import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { CmsStore } from '../state';
import { User } from '../models';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor(private store: CmsStore) {
    // 檢查是否有已登入的用戶（模擬實現）
    const savedUser = this.getSavedUser();
    if (savedUser) {
      this.store.setCurrentUser(savedUser);
      this.isAuthenticatedSubject.next(true);
    }
  }

  login(email: string, password: string): Observable<User> {
    // 模擬登入（後續對接真實 API）
    return new Observable((observer) => {
      setTimeout(() => {
        const user: User = {
          id: '1',
          name: 'Admin User',
          email,
          role: 'ROLE-01',
        };
        this.store.setCurrentUser(user);
        this.saveUser(user);
        this.isAuthenticatedSubject.next(true);
        observer.next(user);
        observer.complete();
      }, 500);
    });
  }

  logout(): Observable<void> {
    return new Observable((observer) => {
      this.store.clearCurrentUser();
      this.clearSavedUser();
      this.isAuthenticatedSubject.next(false);
      observer.next();
      observer.complete();
    });
  }

  getCurrentUser(): User | null {
    return this.store.currentUser();
  }

  getCurrentRole() {
    return this.store.currentRole();
  }

  hasRole(roles: string[]): boolean {
    const currentRole = this.store.currentRole();
    return currentRole ? roles.includes(currentRole) : false;
  }

  private saveUser(user: User) {
    localStorage.setItem('cms_user', JSON.stringify(user));
  }

  private getSavedUser(): User | null {
    const saved = localStorage.getItem('cms_user');
    return saved ? JSON.parse(saved) : null;
  }

  private clearSavedUser() {
    localStorage.removeItem('cms_user');
  }
}
