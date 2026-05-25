import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Project, Buyer, Application, Notification, User } from '../models';
import { MOCK_PROJECTS, MOCK_BUYERS, MOCK_APPLICATIONS } from './mock-data';

@Injectable({
  providedIn: 'root',
})
export class MockApiService {
  private projects: Project[] = [...MOCK_PROJECTS];
  private buyers: Buyer[] = [...MOCK_BUYERS];
  private applications: Application[] = JSON.parse(JSON.stringify(MOCK_APPLICATIONS));
  private notifications: Notification[] = this.generateMockNotifications();

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

  private generateMockNotifications(): Notification[] {
    const mockSenders: User[] = [
      { id: 'user-001', name: 'John Admin', email: 'john@example.com', role: 'ROLE-01' },
      { id: 'user-002', name: 'Jane Manager', email: 'jane@example.com', role: 'ROLE-02' },
      { id: 'user-003', name: 'Mike Coordinator', email: 'mike@example.com', role: 'ROLE-03' },
    ];

    const statuses: Array<'sent' | 'pending' | 'failed'> = ['sent', 'pending', 'failed'];
    const scopes: Array<'global' | 'specific-units' | 'specific-buyers'> = [
      'global',
      'specific-units',
      'specific-buyers',
    ];

    const notifications: Notification[] = [];

    for (let i = 0; i < 25; i++) {
      const date = new Date();
      date.setDate(date.getDate() - i);

      notifications.push({
        id: `notif-${String(i + 1).padStart(3, '0')}`,
        projectId: 'proj-001',
        type: 'global',
        title: `Notification ${i + 1}`,
        content: `This is notification content ${i + 1}`,
        channel: 'in-app',
        status: statuses[i % statuses.length],
        sentAt: date.toISOString(),
        sender: mockSenders[i % mockSenders.length],
        recipientScope: scopes[i % scopes.length],
        recipientCount: Math.floor(Math.random() * 100) + 1,
      });
    }

    return notifications;
  }

  getNotifications(
    filters?: any,
    sort?: any,
    page: number = 1
  ): Observable<{ data: Notification[]; total: number }> {
    let filtered = [...this.notifications];

    if (filters) {
      if (filters.dateFrom) {
        const dateFrom = new Date(filters.dateFrom);
        filtered = filtered.filter((n) => n.sentAt && new Date(n.sentAt) >= dateFrom);
      }
      if (filters.dateTo) {
        const dateTo = new Date(filters.dateTo);
        dateTo.setHours(23, 59, 59, 999);
        filtered = filtered.filter((n) => n.sentAt && new Date(n.sentAt) <= dateTo);
      }
      if (filters.status) {
        filtered = filtered.filter((n) => n.status === filters.status);
      }
      if (filters.sender) {
        filtered = filtered.filter((n) =>
          n.sender?.name.toLowerCase().includes(filters.sender.toLowerCase())
        );
      }
    }

    if (sort) {
      filtered.sort((a, b) => {
        const sortKey = (sort.sortBy || 'sentAt') as keyof Notification;
        let aVal: any = a[sortKey];
        let bVal: any = b[sortKey];

        if (sort.sortBy === 'sender') {
          aVal = a.sender?.name || '';
          bVal = b.sender?.name || '';
        }

        if (aVal < bVal) return sort.sortDirection === 'asc' ? -1 : 1;
        if (aVal > bVal) return sort.sortDirection === 'asc' ? 1 : -1;
        return 0;
      });
    }

    const pageSize = 10;
    const start = (page - 1) * pageSize;
    const data = filtered.slice(start, start + pageSize);

    return of({ data, total: filtered.length }).pipe(delay(500));
  }
}
