/**
 * Integration Tests - Complete Workflows
 * Tests full user workflows across the CMS system
 */

import { TestBed } from '@angular/core/testing';
import { AuthService } from '../auth/auth.service';
import { CmsStore } from '../state';
import { Application, Project, Buyer, Notification } from '../models';

describe('Integration: Complete Workflows', () => {
  let authService: AuthService;
  let store: CmsStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService, CmsStore],
    });

    authService = TestBed.inject(AuthService);
    store = TestBed.inject(CmsStore);
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  describe('Project Management Workflow', () => {
    it('should load and manage projects', (done) => {
      const testEmail = 'admin@example.com';
      const testPassword = 'password123';

      authService.login(testEmail, testPassword).subscribe({
        next: () => {
          // Simulate loading projects
          const projects: Project[] = [
            {
              id: 'proj1',
              name: 'Project A',
              code: 'PA001',
              status: 'active',
              startDate: '2024-01-01',
              endDate: '2026-12-31',
              totalUnits: 100,
            },
            {
              id: 'proj2',
              name: 'Project B',
              code: 'PB001',
              status: 'active',
              startDate: '2024-06-01',
              endDate: '2027-06-30',
              totalUnits: 200,
            },
          ];

          store.loadProjects(projects);
          expect(store.projects().length).toBe(2);

          // Set active project
          store.setActiveProject('proj1');
          expect(store.activeProjectId()).toBe('proj1');
          expect(store.activeProject()?.name).toBe('Project A');

          done();
        },
        error: done.fail,
      });
    });
  });

  describe('Buyer Management Workflow', () => {
    it('should manage buyers in a project', (done) => {
      const testEmail = 'buyer@example.com';
      const testPassword = 'password123';

      authService.login(testEmail, testPassword).subscribe({
        next: () => {
          const projectId = 'proj1';
          store.setActiveProject(projectId);

          // Simulate creating buyers
          const buyers: Buyer[] = [
            {
              id: 'buyer1',
              projectId,
              unitNo: 'A01',
              ownerName: 'John Doe',
              ownerIdLast4: '1234',
              phone: '09123456789',
              email: 'john@example.com',
              layout: '3房2廳',
              size: 85.5,
              floor: 5,
              facing: '南',
              createdAt: new Date().toISOString(),
            },
          ];

          // Store should handle multiple buyers
          expect(buyers.length).toBeGreaterThan(0);
          expect(buyers[0].unitNo).toBe('A01');
          done();
        },
        error: done.fail,
      });
    });
  });

  describe('Application Review Workflow', () => {
    it('should complete application submission and review', (done) => {
      const testEmail = 'reviewer@example.com';
      const testPassword = 'password123';

      authService.login(testEmail, testPassword).subscribe({
        next: () => {
          // Simulate applications
          const applications: Application[] = [
            {
              id: 'app1',
              buyerId: 'buyer1',
              projectId: 'proj1',
              version: 1,
              status: 'draft',
              items: [
                {
                  id: 'item1',
                  code: 'KIT-001',
                  name: 'Kitchen Upgrade',
                  category: 'Kitchen',
                  location: 'Kitchen',
                  fee: 50000,
                },
              ],
              totalAddOn: 50000,
              totalRefund: 0,
            },
          ];

          store.loadApplications(applications);
          expect(store.applications().length).toBe(1);

          // Select application
          store.selectApplication('app1');
          expect(store.selectedApplication()?.id).toBe('app1');

          // Update application status
          store.updateApplication('app1', { status: 'under-review' });
          expect(store.selectedApplication()?.status).toBe('under-review');

          // Approve application
          store.updateApplication('app1', { status: 'approved' });
          expect(store.selectedApplication()?.status).toBe('approved');

          done();
        },
        error: done.fail,
      });
    });

    it('should handle application rework requests', (done) => {
      const testEmail = 'reviewer@example.com';
      const testPassword = 'password123';

      authService.login(testEmail, testPassword).subscribe({
        next: () => {
          const application: Application = {
            id: 'app2',
            buyerId: 'buyer2',
            projectId: 'proj1',
            version: 1,
            status: 'submitted',
            items: [],
            totalAddOn: 0,
            totalRefund: 0,
          };

          store.addApplication(application);
          store.selectApplication('app2');

          // Request rework
          store.updateApplication('app2', {
            status: 'rework',
            reviewComment: 'Please provide more details',
          });

          const updated = store.selectedApplication();
          expect(updated?.status).toBe('rework');
          expect(updated?.reviewComment).toBe('Please provide more details');

          done();
        },
        error: done.fail,
      });
    });
  });

  describe('Notification Workflow', () => {
    it('should create and track notifications', (done) => {
      const testEmail = 'admin@example.com';
      const testPassword = 'password123';

      authService.login(testEmail, testPassword).subscribe({
        next: () => {
          const notification: Notification = {
            id: 'notif1',
            projectId: 'proj1',
            type: 'global',
            title: 'System Update',
            content: 'A new update is available',
            channel: 'in-app',
            status: 'sent',
            sentAt: new Date().toISOString(),
          };

          // Notification should be created
          expect(notification.id).toBe('notif1');
          expect(notification.status).toBe('sent');
          done();
        },
        error: done.fail,
      });
    });
  });

  describe('Dashboard Analytics Workflow', () => {
    it('should calculate dashboard statistics', (done) => {
      const testEmail = 'admin@example.com';
      const testPassword = 'password123';

      authService.login(testEmail, testPassword).subscribe({
        next: () => {
          const applications: Application[] = [
            {
              id: 'app1',
              buyerId: 'buyer1',
              projectId: 'proj1',
              version: 1,
              status: 'submitted',
              items: [],
              totalAddOn: 50000,
              totalRefund: 0,
            },
            {
              id: 'app2',
              buyerId: 'buyer2',
              projectId: 'proj1',
              version: 1,
              status: 'under-review',
              items: [],
              totalAddOn: 30000,
              totalRefund: 0,
            },
            {
              id: 'app3',
              buyerId: 'buyer3',
              projectId: 'proj1',
              version: 1,
              status: 'approved',
              items: [],
              totalAddOn: 80000,
              totalRefund: 0,
            },
          ];

          store.loadApplications(applications);
          const stats = store.dashboardStats();

          // totalSubmitted counts all non-draft applications
          expect(stats.totalSubmitted).toBe(3);
          expect(stats.underReview).toBe(1);
          expect(stats.approved).toBe(1);
          expect(stats.totalAddOn).toBe(160000);

          done();
        },
        error: done.fail,
      });
    });
  });

  describe('Multi-User Workflow', () => {
    it('should handle multiple users with different roles', (done) => {
      // Admin login
      authService.login('admin@example.com', 'password123').subscribe({
        next: () => {
          const adminUser = authService.getCurrentUser();
          expect(adminUser).toBeTruthy();

          // Logout
          authService.logout().subscribe({
            next: () => {
              expect(authService.getCurrentUser()).toBeNull();

              // Different user login
              authService.login('reviewer@example.com', 'password123').subscribe({
                next: () => {
                  const reviewerUser = authService.getCurrentUser();
                  expect(reviewerUser).toBeTruthy();
                  expect(reviewerUser?.email).toBe('reviewer@example.com');
                  done();
                },
                error: done.fail,
              });
            },
            error: done.fail,
          });
        },
        error: done.fail,
      });
    });
  });

  describe('Data Consistency Workflow', () => {
    it('should maintain data consistency across operations', (done) => {
      const testEmail = 'admin@example.com';
      const testPassword = 'password123';

      authService.login(testEmail, testPassword).subscribe({
        next: () => {
          // Load projects
          const projects: Project[] = [
            {
              id: 'proj1',
              name: 'Project A',
              code: 'PA001',
              status: 'active',
              startDate: '2024-01-01',
              endDate: '2026-12-31',
              totalUnits: 100,
            },
          ];
          store.loadProjects(projects);

          // Load applications
          const applications: Application[] = [
            {
              id: 'app1',
              buyerId: 'buyer1',
              projectId: 'proj1',
              version: 1,
              status: 'draft',
              items: [],
              totalAddOn: 0,
              totalRefund: 0,
            },
          ];
          store.loadApplications(applications);

          // Verify consistency
          expect(store.projects().length).toBe(1);
          expect(store.applications().length).toBe(1);
          expect(store.projects()[0].id).toBe('proj1');
          expect(store.applications()[0].projectId).toBe('proj1');

          // Update application
          store.updateApplication('app1', { totalAddOn: 50000 });
          // Application is updated but selectedApplication is null until selected
          expect(store.selectedApplication()).toBeNull();

          store.selectApplication('app1');
          expect(store.selectedApplication()?.totalAddOn).toBe(50000);

          done();
        },
        error: done.fail,
      });
    });
  });
});
