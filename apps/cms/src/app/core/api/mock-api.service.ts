import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Project, Buyer, Application } from '../models';
import { MOCK_PROJECTS, MOCK_BUYERS, MOCK_APPLICATIONS } from './mock-data';

@Injectable({
  providedIn: 'root',
})
export class MockApiService {
  private projects: Project[] = [...MOCK_PROJECTS];
  private buyers: Buyer[] = [...MOCK_BUYERS];
  private applications: Application[] = JSON.parse(JSON.stringify(MOCK_APPLICATIONS));

  getProjects(): Observable<Project[]> {
    return of([...this.projects]).pipe(delay(500));
  }

  getProject(id: string): Observable<Project | undefined> {
    return of(this.projects.find((p) => p.id === id)).pipe(delay(300));
  }

  createProject(project: Project): Observable<Project> {
    const newProject = { ...project };
    this.projects.push(newProject);
    return of(newProject).pipe(delay(500));
  }

  updateProject(id: string, updates: Partial<Project>): Observable<Project | undefined> {
    const project = this.projects.find((p) => p.id === id);
    if (project) {
      Object.assign(project, updates);
    }
    return of(project).pipe(delay(500));
  }

  getBuyers(projectId: string): Observable<Buyer[]> {
    const filtered = this.buyers.filter((b) => b.projectId === projectId);
    return of([...filtered]).pipe(delay(500));
  }

  getBuyer(id: string): Observable<Buyer | undefined> {
    return of(this.buyers.find((b) => b.id === id)).pipe(delay(300));
  }

  createBuyers(buyers: Buyer[]): Observable<Buyer[]> {
    const newBuyers = buyers.map((b) => ({ ...b }));
    this.buyers.push(...newBuyers);
    return of([...newBuyers]).pipe(delay(1000));
  }

  getApplications(projectId: string): Observable<Application[]> {
    const filtered = this.applications.filter((a) => a.projectId === projectId);
    return of(JSON.parse(JSON.stringify(filtered))).pipe(delay(800));
  }

  getApplication(id: string): Observable<Application | undefined> {
    const app = this.applications.find((a) => a.id === id);
    return of(app ? JSON.parse(JSON.stringify(app)) : undefined).pipe(delay(300));
  }

  reviewApplication(
    id: string,
    decision: 'approved' | 'rework',
    comment: string
  ): Observable<Application | undefined> {
    const app = this.applications.find((a) => a.id === id);
    if (app) {
      app.status = decision;
      app.reviewedAt = new Date().toISOString();
      app.reviewedBy = 'system-reviewer';
      app.reviewComment = comment;
    }
    return of(app ? JSON.parse(JSON.stringify(app)) : undefined).pipe(delay(500));
  }

  confirmApplication(id: string, preConfirmStatus: string): Observable<Application | undefined> {
    const app = this.applications.find((a) => a.id === id);
    if (app) {
      app.status = 'confirmed';
      app.preConfirmStatus = preConfirmStatus as 'pending' | 'confirmed' | 'auto-confirmed';
    }
    return of(app ? JSON.parse(JSON.stringify(app)) : undefined).pipe(delay(500));
  }

  sendNotification(payload: any): Observable<{ success: boolean; message: string }> {
    return of({
      success: true,
      message: 'Notification sent successfully',
    }).pipe(delay(500));
  }
}
