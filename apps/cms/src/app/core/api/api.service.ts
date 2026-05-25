import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Project, Buyer, Application, Notification, ReportData, Report, SearchResult, Reminder, DashboardStatsWithTrend } from '../models';
import { MockApiService } from './mock-api.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(
    private httpClient: HttpClient,
    private mockApiService: MockApiService
  ) {}

  private useMockApi(): boolean {
    return environment.useMockApi;
  }

  getProjects(): Observable<Project[]> {
    if (this.useMockApi()) {
      return this.mockApiService.getProjects();
    }
    return this.httpClient.get<Project[]>(`${environment.apiUrl}/projects`);
  }

  getProject(id: string): Observable<Project | undefined> {
    if (this.useMockApi()) {
      return this.mockApiService.getProject(id);
    }
    return this.httpClient.get<Project>(`${environment.apiUrl}/projects/${id}`);
  }

  createProject(project: Project): Observable<Project> {
    if (this.useMockApi()) {
      return this.mockApiService.createProject(project);
    }
    return this.httpClient.post<Project>(`${environment.apiUrl}/projects`, project);
  }

  updateProject(id: string, updates: Partial<Project>): Observable<Project | undefined> {
    if (this.useMockApi()) {
      return this.mockApiService.updateProject(id, updates);
    }
    return this.httpClient.put<Project>(`${environment.apiUrl}/projects/${id}`, updates);
  }

  getBuyers(projectId: string): Observable<Buyer[]> {
    if (this.useMockApi()) {
      return this.mockApiService.getBuyers(projectId);
    }
    return this.httpClient.get<Buyer[]>(`${environment.apiUrl}/projects/${projectId}/buyers`);
  }

  getBuyer(id: string): Observable<Buyer | undefined> {
    if (this.useMockApi()) {
      return this.mockApiService.getBuyer(id);
    }
    return this.httpClient.get<Buyer>(`${environment.apiUrl}/buyers/${id}`);
  }

  createBuyers(buyers: Buyer[]): Observable<Buyer[]> {
    if (this.useMockApi()) {
      return this.mockApiService.createBuyers(buyers);
    }
    return this.httpClient.post<Buyer[]>(`${environment.apiUrl}/buyers`, buyers);
  }

  getApplications(projectId: string): Observable<Application[]> {
    if (this.useMockApi()) {
      return this.mockApiService.getApplications(projectId);
    }
    return this.httpClient.get<Application[]>(
      `${environment.apiUrl}/projects/${projectId}/applications`
    );
  }

  getApplication(id: string): Observable<Application | undefined> {
    if (this.useMockApi()) {
      return this.mockApiService.getApplication(id);
    }
    return this.httpClient.get<Application>(`${environment.apiUrl}/applications/${id}`);
  }

  reviewApplication(
    id: string,
    decision: 'approved' | 'rework',
    comment: string
  ): Observable<Application | undefined> {
    if (this.useMockApi()) {
      return this.mockApiService.reviewApplication(id, decision, comment);
    }
    return this.httpClient.post<Application>(`${environment.apiUrl}/applications/${id}/review`, {
      decision,
      comment,
    });
  }

  confirmApplication(id: string, preConfirmStatus: string): Observable<Application | undefined> {
    if (this.useMockApi()) {
      return this.mockApiService.confirmApplication(id, preConfirmStatus);
    }
    return this.httpClient.post<Application>(`${environment.apiUrl}/applications/${id}/confirm`, {
      preConfirmStatus,
    });
  }

  sendNotification(payload: any): Observable<{ success: boolean; message: string }> {
    if (this.useMockApi()) {
      return this.mockApiService.sendNotification(payload);
    }
    return this.httpClient.post<{ success: boolean; message: string }>(
      `${environment.apiUrl}/notifications/send`,
      payload
    );
  }

  getNotifications(
    filters?: any,
    sort?: any,
    page?: number
  ): Observable<{ data: Notification[]; total: number }> {
    if (this.useMockApi()) {
      return this.mockApiService.getNotifications(filters, sort, page);
    }
    let queryParams = '';
    if (filters || sort || page) {
      const params = new URLSearchParams();
      if (filters) {
        Object.keys(filters).forEach((key) => {
          if (filters[key] !== null && filters[key] !== undefined) {
            params.append(key, filters[key]);
          }
        });
      }
      if (sort) {
        params.append('sortBy', sort.sortBy || 'sentAt');
        params.append('sortDirection', sort.sortDirection || 'desc');
      }
      if (page) {
        params.append('page', page.toString());
      }
      queryParams = params.toString();
    }
    const url = queryParams
      ? `${environment.apiUrl}/notifications?${queryParams}`
      : `${environment.apiUrl}/notifications`;
    return this.httpClient.get<{ data: Notification[]; total: number }>(url);
  }

  getNotificationById(id: string): Observable<Notification | undefined> {
    if (this.useMockApi()) {
      return this.mockApiService.getNotificationById?.(id) || of(undefined);
    }
    return this.httpClient.get<Notification>(`${environment.apiUrl}/notifications/${id}`);
  }

  getNotificationRecipients(id: string): Observable<any[]> {
    if (this.useMockApi()) {
      return this.mockApiService.getNotificationRecipients?.(id) || of([]);
    }
    return this.httpClient.get<any[]>(`${environment.apiUrl}/notifications/${id}/recipients`);
  }

  resendNotification(id: string): Observable<{ success: boolean; message: string }> {
    if (this.useMockApi()) {
      return this.mockApiService.resendNotification?.(id) || of({ success: true, message: 'Resent' });
    }
    return this.httpClient.post<{ success: boolean; message: string }>(
      `${environment.apiUrl}/notifications/${id}/resend`,
      {}
    );
  }

  generateReport(payload: any): Observable<ReportData> {
    if (this.useMockApi()) {
      return this.mockApiService.generateReport(payload);
    }
    return this.httpClient.post<ReportData>(`${environment.apiUrl}/reports/generate`, payload);
  }

  getReports(
    filters?: any,
    sort?: any,
    page?: number
  ): Observable<{ data: Report[]; total: number }> {
    if (this.useMockApi()) {
      return this.mockApiService.getReports(filters, sort, page);
    }
    let queryParams = '';
    if (filters || sort || page) {
      const params = new URLSearchParams();
      if (filters) {
        Object.keys(filters).forEach((key) => {
          if (filters[key] !== null && filters[key] !== undefined) {
            if (Array.isArray(filters[key])) {
              filters[key].forEach((val: any) => params.append(key, val));
            } else {
              params.append(key, filters[key]);
            }
          }
        });
      }
      if (sort) {
        params.append('sortBy', sort.sortBy || 'generatedAt');
        params.append('sortDirection', sort.sortDirection || 'desc');
      }
      if (page !== undefined) {
        params.append('page', page.toString());
      }
      queryParams = params.toString();
    }
    const url = queryParams
      ? `${environment.apiUrl}/reports?${queryParams}`
      : `${environment.apiUrl}/reports`;
    return this.httpClient.get<{ data: Report[]; total: number }>(url);
  }

  downloadReport(reportId: string, format: string = 'pdf'): Observable<Blob> {
    if (this.useMockApi()) {
      return this.mockApiService.downloadReport(reportId, format);
    }
    return this.httpClient.get(`${environment.apiUrl}/reports/${reportId}/download?format=${format}`, {
      responseType: 'blob',
    });
  }

  deleteReport(reportId: string): Observable<void> {
    if (this.useMockApi()) {
      return this.mockApiService.deleteReport(reportId);
    }
    return this.httpClient.delete<void>(`${environment.apiUrl}/reports/${reportId}`);
  }

  getReportById(id: string): Observable<Report | undefined> {
    if (this.useMockApi()) {
      return this.mockApiService.getReportById?.(id) || of(undefined);
    }
    return this.httpClient.get<Report>(`${environment.apiUrl}/reports/${id}`);
  }

  quickSearch(query: string, searchType: 'buyer' | 'application' | 'unit' = 'buyer'): Observable<SearchResult[]> {
    if (this.useMockApi()) {
      return this.mockApiService.quickSearch?.(query, searchType) || of([]);
    }
    return this.httpClient.get<SearchResult[]>(
      `${environment.apiUrl}/search?q=${encodeURIComponent(query)}&type=${searchType}`
    );
  }

  getTodayReminders(): Observable<Reminder[]> {
    if (this.useMockApi()) {
      return this.mockApiService.getTodayReminders?.() || of([]);
    }
    return this.httpClient.get<Reminder[]>(`${environment.apiUrl}/reminders/today`);
  }

  getDashboardStats(): Observable<DashboardStatsWithTrend> {
    if (this.useMockApi()) {
      return this.mockApiService.getDashboardStats?.() || of({
        totalSubmitted: 0,
        underReview: 0,
        approved: 0,
        needsRework: 0,
        needsConfirmation: 0,
        totalAddOn: 0,
        totalRefund: 0,
      });
    }
    return this.httpClient.get<DashboardStatsWithTrend>(`${environment.apiUrl}/dashboard/stats`);
  }

  markReminderAsDone(reminderId: string): Observable<{ success: boolean }> {
    if (this.useMockApi()) {
      return this.mockApiService.markReminderAsDone?.(reminderId) || of({ success: true });
    }
    return this.httpClient.post<{ success: boolean }>(`${environment.apiUrl}/reminders/${reminderId}/done`, {});
  }
}
