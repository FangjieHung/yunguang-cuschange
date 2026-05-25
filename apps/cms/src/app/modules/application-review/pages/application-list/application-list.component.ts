import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CmsStore } from '../../../../core/state';
import { ApiService } from '../../../../core/api';
import { Application } from '../../../../core/models';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'cms-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.scss'],
})
export class ApplicationListComponent implements OnInit {
  applications = this.store.applications;
  filteredApplications: Application[] = [];
  statusFilter = new FormControl('');
  isLoading = false;

  statusOptions = [
    { value: '', label: '全部' },
    { value: 'submitted', label: '已送出' },
    { value: 'under-review', label: '審核中' },
    { value: 'approved', label: '已批准' },
    { value: 'rework', label: '需返工' },
    { value: 'confirmed', label: '已確認' },
  ];

  constructor(
    private store: CmsStore,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadApplications();
    this.setupFilter();
  }

  loadApplications() {
    const projectId = this.store.activeProject()?.id;
    if (!projectId) return;

    this.isLoading = true;
    this.apiService.getApplications(projectId).subscribe({
      next: (apps) => {
        this.store.loadApplications(apps);
        this.applyFilter();
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Failed to load applications', err);
        this.isLoading = false;
      },
    });
  }

  setupFilter() {
    this.statusFilter.valueChanges.subscribe(() => this.applyFilter());
  }

  applyFilter() {
    const apps = this.applications();
    if (!this.statusFilter.value) {
      this.filteredApplications = apps;
    } else {
      this.filteredApplications = apps.filter(
        (app) => app.status === this.statusFilter.value
      );
    }
  }

  getStatusLabel(status: string): string {
    const option = this.statusOptions.find((o) => o.value === status);
    return option ? option.label : status;
  }

  onViewApplication(app: Application) {
    this.router.navigate([`/application-review/${app.id}`]);
  }
}
