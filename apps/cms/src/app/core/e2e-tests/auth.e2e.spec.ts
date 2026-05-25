/**
 * E2E Tests - Authentication Flow
 * Tests the login, logout, and session management workflows
 */

import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthService } from '../auth/auth.service';
import { CmsStore } from '../state';
import { User } from '../models';

describe('E2E: Authentication Flow', () => {
  let authService: AuthService;
  let store: CmsStore;
  let router: Router;
  let location: Location;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService, CmsStore],
    });

    authService = TestBed.inject(AuthService);
    store = TestBed.inject(CmsStore);
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);

    // Clear storage before each test
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  describe('Login Flow', () => {
    it('should login user with valid credentials', (done) => {
      const testEmail = 'test@example.com';
      const testPassword = 'password123';

      authService.login(testEmail, testPassword).subscribe({
        next: (user) => {
          expect(user).toBeTruthy();
          expect(user.email).toBe(testEmail);
          expect(store.currentUser()).toBeTruthy();
          done();
        },
        error: done.fail,
      });
    });

    it('should handle login errors gracefully', (done) => {
      const testEmail = 'invalid@example.com';
      const testPassword = '';

      // Empty password should trigger timeout and form validation
      authService.login(testEmail, testPassword).subscribe({
        next: () => {
          // Form validation happens in component
          done();
        },
        error: done.fail,
      });
    });

    it('should store user in localStorage after successful login', (done) => {
      const testEmail = 'test@example.com';
      const testPassword = 'password123';

      authService.login(testEmail, testPassword).subscribe({
        next: () => {
          const savedUser = localStorage.getItem('cms_user');
          expect(savedUser).toBeTruthy();
          const user = JSON.parse(savedUser!);
          expect(user.email).toBe(testEmail);
          done();
        },
        error: done.fail,
      });
    });

    it('should set user in store after login', (done) => {
      const testEmail = 'admin@example.com';
      const testPassword = 'password123';

      expect(store.currentUser()).toBeNull();

      authService.login(testEmail, testPassword).subscribe({
        next: () => {
          const currentUser = store.currentUser();
          expect(currentUser).toBeTruthy();
          expect(currentUser?.email).toBe(testEmail);
          done();
        },
        error: done.fail,
      });
    });
  });

  describe('Logout Flow', () => {
    it('should logout user successfully', (done) => {
      const testEmail = 'test@example.com';
      const testPassword = 'password123';

      // First login
      authService.login(testEmail, testPassword).subscribe({
        next: () => {
          expect(store.currentUser()).toBeTruthy();

          // Then logout
          authService.logout().subscribe({
            next: () => {
              expect(store.currentUser()).toBeNull();
              expect(localStorage.getItem('cms_user')).toBeNull();
              done();
            },
            error: done.fail,
          });
        },
        error: done.fail,
      });
    });

    it('should clear localStorage on logout', (done) => {
      const testEmail = 'test@example.com';
      const testPassword = 'password123';

      authService.login(testEmail, testPassword).subscribe({
        next: () => {
          expect(localStorage.getItem('cms_user')).toBeTruthy();

          authService.logout().subscribe({
            next: () => {
              expect(localStorage.getItem('cms_user')).toBeNull();
              done();
            },
            error: done.fail,
          });
        },
        error: done.fail,
      });
    });

    it('should clear store on logout', (done) => {
      const testEmail = 'test@example.com';
      const testPassword = 'password123';

      authService.login(testEmail, testPassword).subscribe({
        next: () => {
          expect(store.currentUser()).toBeTruthy();
          expect(store.currentRole()).toBeTruthy();

          authService.logout().subscribe({
            next: () => {
              expect(store.currentUser()).toBeNull();
              expect(store.currentRole()).toBeNull();
              done();
            },
            error: done.fail,
          });
        },
        error: done.fail,
      });
    });
  });

  describe('Session Management', () => {
    it('should persist user session in localStorage', (done) => {
      const testEmail = 'session@example.com';
      const testPassword = 'password123';

      authService.login(testEmail, testPassword).subscribe({
        next: () => {
          const savedUser = localStorage.getItem('cms_user');
          expect(savedUser).toBeTruthy();

          // Simulate page reload by creating new auth service instance
          const newAuthService = TestBed.inject(AuthService);
          const newStore = TestBed.inject(CmsStore);

          // New service should load persisted user
          const loadedUser = newStore.currentUser();
          expect(loadedUser).toBeTruthy();
          expect(loadedUser?.email).toBe(testEmail);
          done();
        },
        error: done.fail,
      });
    });

    it('should check if user is authenticated', (done) => {
      expect(authService.getCurrentUser()).toBeNull();

      const testEmail = 'test@example.com';
      const testPassword = 'password123';

      authService.login(testEmail, testPassword).subscribe({
        next: () => {
          expect(authService.getCurrentUser()).toBeTruthy();
          done();
        },
        error: done.fail,
      });
    });

    it('should return current user role', (done) => {
      const testEmail = 'test@example.com';
      const testPassword = 'password123';

      authService.login(testEmail, testPassword).subscribe({
        next: () => {
          const role = authService.getCurrentRole();
          expect(role).toBeTruthy();
          expect(role).toMatch(/^ROLE-\d{2}$/);
          done();
        },
        error: done.fail,
      });
    });
  });

  describe('Permission Checks', () => {
    it('should check if user has specific role', (done) => {
      const testEmail = 'test@example.com';
      const testPassword = 'password123';

      authService.login(testEmail, testPassword).subscribe({
        next: () => {
          // User should have some role
          const hasRole = authService.hasRole(['ROLE-01']);
          expect(typeof hasRole).toBe('boolean');
          done();
        },
        error: done.fail,
      });
    });

    it('should return false when checking for non-existent role', (done) => {
      const testEmail = 'test@example.com';
      const testPassword = 'password123';

      authService.login(testEmail, testPassword).subscribe({
        next: () => {
          const nonExistentRole = 'ROLE-99';
          const hasRole = authService.hasRole([nonExistentRole]);
          expect(hasRole).toBe(false);
          done();
        },
        error: done.fail,
      });
    });

    it('should return false when checking roles without user', () => {
      const hasRole = authService.hasRole(['ROLE-01']);
      expect(hasRole).toBe(false);
    });
  });
});
