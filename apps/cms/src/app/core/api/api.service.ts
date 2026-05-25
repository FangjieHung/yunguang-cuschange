import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Project, Buyer, Application, Notification } from '../models';
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
}
