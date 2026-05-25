import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Project, Buyer, Application, Notification, User, ReportData, Report } from '../models';
import { MOCK_PROJECTS, MOCK_BUYERS, MOCK_APPLICATIONS } from './mock-data';

@Injectable({
  providedIn: 'root',
})
export class MockApiService {
  private projects: Project[] = [...MOCK_PROJECTS];
  private buyers: Buyer[] = [...MOCK_BUYERS];
  private applications: Application[] = JSON.parse(JSON.stringify(MOCK_APPLICATIONS));
  private notifications: Notification[] = this.generateMockNotifications();
  private reports: Report[] = this.generateMockReports();

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

  generateReport(payload: any): Observable<ReportData> {
    const dateFrom = new Date(payload.dateFrom);
    const dateTo = new Date(payload.dateTo);
    const reportType = payload.reportType;

    // Generate mock report data based on report type
    let data: any[] = [];
    let summary: any = {};

    if (reportType === 'applications') {
      data = [
        { date: '2024-01-01', status: 'submitted', count: 5 },
        { date: '2024-01-02', status: 'approved', count: 3 },
        { date: '2024-01-03', status: 'under-review', count: 2 },
      ];
      summary = { totalApplications: 10, averageDaily: 3.33, approvalRate: 30 };
    } else if (reportType === 'buyers') {
      data = [
        { unitNo: 'A01', ownerName: 'John Doe', status: 'active' },
        { unitNo: 'A02', ownerName: 'Jane Smith', status: 'active' },
        { unitNo: 'A03', ownerName: 'Bob Johnson', status: 'pending' },
      ];
      summary = { totalBuyers: 3, activeCount: 2 };
    } else if (reportType === 'financials') {
      data = [
        { category: 'Interior', totalFees: 50000, count: 10 },
        { category: 'Exterior', totalFees: 30000, count: 5 },
        { category: 'Utilities', totalFees: 20000, count: 3 },
      ];
      summary = { totalFees: 100000, averageFeePerApplication: 5000 };
    } else if (reportType === 'timeline') {
      data = [
        { milestone: 'Submitted', date: '2024-01-01', count: 15 },
        { milestone: 'Under Review', date: '2024-01-05', count: 12 },
        { milestone: 'Approved', date: '2024-01-10', count: 8 },
      ];
      summary = { averageProcessingDays: 9, completionRate: 53 };
    }

    const chartData = {
      labels: data.map((d) => d.date || d.category || d.unitNo || d.milestone),
      datasets: [
        {
          label: 'Count',
          data: data.map((d) => d.count || d.totalFees),
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
        },
      ],
    };

    const report: ReportData = {
      id: `report-${Date.now()}`,
      title: `${reportType} Report`,
      generatedAt: new Date(),
      reportType,
      dateRange: { from: dateFrom, to: dateTo },
      groupBy: payload.groupBy,
      data,
      chartData: payload.includeCharts ? chartData : undefined,
      summary,
    };

    return of(report).pipe(delay(1000));
  }

  private generateMockReports(): Report[] {
    const mockUsers: User[] = [
      { id: 'user-001', name: 'John Doe', email: 'john@example.com', role: 'ROLE-01' },
      { id: 'user-002', name: 'Jane Smith', email: 'jane@example.com', role: 'ROLE-02' },
      { id: 'user-003', name: 'Bob Johnson', email: 'bob@example.com', role: 'ROLE-03' },
    ];

    const reportTypes: Array<'applications' | 'buyers' | 'financials' | 'timeline'> = [
      'applications',
      'buyers',
      'financials',
      'timeline',
    ];
    const statuses: Array<'completed' | 'processing' | 'failed'> = ['completed', 'processing', 'failed'];

    const reports: Report[] = [];

    for (let i = 0; i < 25; i++) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const dateFrom = new Date(date);
      dateFrom.setMonth(dateFrom.getMonth() - 1);

      reports.push({
        id: `report-${String(i + 1).padStart(3, '0')}`,
        title: `${reportTypes[i % reportTypes.length]} Report ${i + 1}`,
        reportType: reportTypes[i % reportTypes.length],
        generatedAt: date,
        dateRange: { from: dateFrom, to: date },
        generatedBy: mockUsers[i % mockUsers.length],
        status: statuses[i % statuses.length],
        fileSize: Math.floor(Math.random() * 5000000) + 500000,
        downloadUrl: `/downloads/report-${i + 1}.pdf`,
      });
    }

    return reports;
  }

  getReports(
    filters?: any,
    sort?: any,
    page: number = 0
  ): Observable<{ data: Report[]; total: number }> {
    let filtered = [...this.reports];

    if (filters) {
      if (filters.reportType && filters.reportType.length > 0) {
        filtered = filtered.filter((r) => filters.reportType.includes(r.reportType));
      }
      if (filters.dateFrom) {
        const dateFrom = new Date(filters.dateFrom);
        filtered = filtered.filter((r) => new Date(r.generatedAt) >= dateFrom);
      }
      if (filters.dateTo) {
        const dateTo = new Date(filters.dateTo);
        dateTo.setHours(23, 59, 59, 999);
        filtered = filtered.filter((r) => new Date(r.generatedAt) <= dateTo);
      }
      if (filters.status) {
        filtered = filtered.filter((r) => r.status === filters.status);
      }
      if (filters.generatedBy) {
        filtered = filtered.filter((r) =>
          r.generatedBy?.name.toLowerCase().includes(filters.generatedBy.toLowerCase())
        );
      }
    }

    if (sort) {
      filtered.sort((a, b) => {
        const sortKey = (sort.sortBy || 'generatedAt') as keyof Report;
        let aVal: any = a[sortKey];
        let bVal: any = b[sortKey];

        if (sort.sortBy === 'generatedBy') {
          aVal = a.generatedBy?.name || '';
          bVal = b.generatedBy?.name || '';
        }

        if (aVal < bVal) return sort.sortDirection === 'asc' ? -1 : 1;
        if (aVal > bVal) return sort.sortDirection === 'asc' ? 1 : -1;
        return 0;
      });
    }

    const pageSize = 15;
    const start = page * pageSize;
    const data = filtered.slice(start, start + pageSize);

    return of({ data, total: filtered.length }).pipe(delay(500));
  }

  downloadReport(reportId: string, format: string = 'pdf'): Observable<Blob> {
    const report = this.reports.find((r) => r.id === reportId);
    if (!report) {
      return of(new Blob(['Report not found'], { type: 'text/plain' })).pipe(delay(300));
    }

    const content = `Report: ${report.title}\nGenerated at: ${report.generatedAt.toISOString()}\nType: ${report.reportType}`;
    const blob = new Blob([content], { type: 'application/pdf' });
    return of(blob).pipe(delay(500));
  }

  deleteReport(reportId: string): Observable<void> {
    const index = this.reports.findIndex((r) => r.id === reportId);
    if (index > -1) {
      this.reports.splice(index, 1);
    }
    return of(void 0).pipe(delay(300));
  }
}
