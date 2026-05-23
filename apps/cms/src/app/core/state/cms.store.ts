import { Injectable } from '@angular/core';
import { signal, computed } from '@angular/core';
import {
  User,
  Project,
  Application,
  DashboardStats,
  Role,
} from '../models';

@Injectable({ providedIn: 'root' })
export class CmsStore {
  // ========== Authentication State ==========
  private readonly currentUserSignal = signal<User | null>(null);
  private readonly currentRoleSignal = signal<Role | null>(null);

  currentUser = this.currentUserSignal.asReadonly();
  currentRole = this.currentRoleSignal.asReadonly();

  // ========== Project State ==========
  private readonly projectsSignal = signal<Project[]>([]);
  private readonly activeProjectIdSignal = signal<string | null>(null);

  projects = this.projectsSignal.asReadonly();
  activeProjectId = this.activeProjectIdSignal.asReadonly();

  activeProject = computed(() => {
    const id = this.activeProjectIdSignal();
    return this.projectsSignal().find((p) => p.id === id) || null;
  });

  // ========== Application State ==========
  private readonly applicationsSignal = signal<Application[]>([]);
  private readonly selectedApplicationIdSignal = signal<string | null>(null);

  applications = this.applicationsSignal.asReadonly();
  selectedApplicationId = this.selectedApplicationIdSignal.asReadonly();

  selectedApplication = computed(() => {
    const id = this.selectedApplicationIdSignal();
    return this.applicationsSignal().find((a) => a.id === id) || null;
  });

  // ========== Dashboard Stats ==========
  dashboardStats = computed<DashboardStats>(() => {
    const apps = this.applicationsSignal();
    return {
      totalSubmitted: apps.filter((a) => a.status !== 'draft').length,
      underReview: apps.filter((a) => a.status === 'under-review').length,
      approved: apps.filter((a) => a.status === 'approved').length,
      needsRework: apps.filter((a) => a.status === 'rework').length,
      needsConfirmation: apps.filter(
        (a) => a.status === 'approved' && a.preConfirmStatus !== 'confirmed'
      ).length,
      totalAddOn: apps.reduce((sum, a) => sum + a.totalAddOn, 0),
      totalRefund: apps.reduce((sum, a) => sum + a.totalRefund, 0),
    };
  });

  // ========== Methods ==========
  setCurrentUser(user: User) {
    this.currentUserSignal.set(user);
    this.currentRoleSignal.set(user.role);
  }

  clearCurrentUser() {
    this.currentUserSignal.set(null);
    this.currentRoleSignal.set(null);
  }

  loadProjects(projects: Project[]) {
    this.projectsSignal.set(projects);
  }

  setActiveProject(projectId: string) {
    this.activeProjectIdSignal.set(projectId);
  }

  loadApplications(applications: Application[]) {
    this.applicationsSignal.set(applications);
  }

  selectApplication(applicationId: string) {
    this.selectedApplicationIdSignal.set(applicationId);
  }

  updateApplication(id: string, updates: Partial<Application>) {
    const current = this.applicationsSignal();
    const updated = current.map((a) =>
      a.id === id ? { ...a, ...updates } : a
    );
    this.applicationsSignal.set(updated);
  }

  addApplication(application: Application) {
    const current = this.applicationsSignal();
    this.applicationsSignal.set([...current, application]);
  }

  deleteApplication(id: string) {
    const current = this.applicationsSignal();
    this.applicationsSignal.set(current.filter((a) => a.id !== id));
  }
}
