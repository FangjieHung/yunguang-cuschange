import { TestBed } from '@angular/core/testing';
import { CmsStore } from './cms.store';
import { User, Application, Project } from '../models';

describe('CmsStore', () => {
  let store: CmsStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CmsStore],
    });
    store = TestBed.inject(CmsStore);
  });

  describe('User Management', () => {
    it('should set current user and role', () => {
      const user: User = {
        id: '1',
        name: 'Admin',
        email: 'admin@example.com',
        role: 'ROLE-01',
      };

      store.setCurrentUser(user);

      expect(store.currentUser()).toEqual(user);
      expect(store.currentRole()).toBe('ROLE-01');
    });

    it('should clear current user', () => {
      const user: User = {
        id: '1',
        name: 'Admin',
        email: 'admin@example.com',
        role: 'ROLE-01',
      };
      store.setCurrentUser(user);
      store.clearCurrentUser();

      expect(store.currentUser()).toBeNull();
      expect(store.currentRole()).toBeNull();
    });
  });

  describe('Project Management', () => {
    it('should load projects', () => {
      const projects: Project[] = [
        {
          id: '1',
          name: '富華澐光',
          code: 'PROJECT-001',
          status: 'active',
          startDate: '2026-01-01',
          endDate: '2026-12-31',
          totalUnits: 42,
        },
      ];

      store.loadProjects(projects);

      expect(store.projects()).toEqual(projects);
    });

    it('should set active project', () => {
      const projects: Project[] = [
        {
          id: '1',
          name: '富華澐光',
          code: 'PROJECT-001',
          status: 'active',
          startDate: '2026-01-01',
          endDate: '2026-12-31',
          totalUnits: 42,
        },
      ];
      store.loadProjects(projects);
      store.setActiveProject('1');

      expect(store.activeProjectId()).toBe('1');
      expect(store.activeProject()).toEqual(projects[0]);
    });
  });

  describe('Dashboard Stats', () => {
    it('should calculate correct stats', () => {
      const applications: Application[] = [
        {
          id: '1',
          buyerId: '1',
          projectId: '1',
          version: 1,
          status: 'submitted',
          items: [],
          totalAddOn: 10000,
          totalRefund: 5000,
        },
        {
          id: '2',
          buyerId: '2',
          projectId: '1',
          version: 1,
          status: 'under-review',
          items: [],
          totalAddOn: 20000,
          totalRefund: 0,
        },
        {
          id: '3',
          buyerId: '3',
          projectId: '1',
          version: 1,
          status: 'approved',
          items: [],
          totalAddOn: 15000,
          totalRefund: 8000,
          preConfirmStatus: 'confirmed',
        },
      ];

      store.loadApplications(applications);

      const stats = store.dashboardStats();
      expect(stats.totalSubmitted).toBe(3);
      expect(stats.underReview).toBe(1);
      expect(stats.approved).toBe(1);
      expect(stats.totalAddOn).toBe(45000);
      expect(stats.totalRefund).toBe(13000);
    });
  });

  describe('Application Operations', () => {
    it('should update application status', () => {
      const app: Application = {
        id: '1',
        buyerId: '1',
        projectId: '1',
        version: 1,
        status: 'submitted',
        items: [],
        totalAddOn: 10000,
        totalRefund: 0,
      };
      store.loadApplications([app]);

      store.updateApplication('1', { status: 'approved' });

      expect(store.applications()[0].status).toBe('approved');
    });

    it('should select application', () => {
      const app: Application = {
        id: '1',
        buyerId: '1',
        projectId: '1',
        version: 1,
        status: 'submitted',
        items: [],
        totalAddOn: 10000,
        totalRefund: 0,
      };
      store.loadApplications([app]);

      store.selectApplication('1');

      expect(store.selectedApplicationId()).toBe('1');
      expect(store.selectedApplication()).toEqual(app);
    });
  });
});
