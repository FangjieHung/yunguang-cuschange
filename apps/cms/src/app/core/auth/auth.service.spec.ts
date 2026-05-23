import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { CmsStore } from '../state';

describe('AuthService', () => {
  let service: AuthService;
  let store: CmsStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService, CmsStore],
    });
    service = TestBed.inject(AuthService);
    store = TestBed.inject(CmsStore);
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should login user and save to localStorage', (done) => {
    service.login('admin@example.com', 'password').subscribe((user) => {
      expect(user.name).toBe('Admin User');
      expect(store.currentUser()).toEqual(user);
      expect(localStorage.getItem('cms_user')).toBeTruthy();
      done();
    });
  });

  it('should logout user and clear localStorage', (done) => {
    service.login('admin@example.com', 'password').subscribe(() => {
      service.logout().subscribe(() => {
        expect(store.currentUser()).toBeNull();
        expect(localStorage.getItem('cms_user')).toBeNull();
        done();
      });
    });
  });

  it('should check if user has role', (done) => {
    service.login('admin@example.com', 'password').subscribe(() => {
      expect(service.hasRole(['ROLE-01'])).toBe(true);
      expect(service.hasRole(['ROLE-02'])).toBe(false);
      done();
    });
  });
});
