import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CmsStore } from '../../../../core/state';
import { ApiService } from '../../../../core/api';
import { Project } from '../../../../core/models';

@Component({
  selector: 'cms-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent implements OnInit {
  projects = this.store.projects;
  isLoading = false;

  constructor(
    private store: CmsStore,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    this.isLoading = true;
    this.apiService.getProjects().subscribe({
      next: (projects) => {
        this.store.loadProjects(projects);
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Failed to load projects', err);
        this.isLoading = false;
      },
    });
  }

  onCreateProject() {
    this.router.navigate(['/project-mgmt/new']);
  }

  onEditProject(project: Project) {
    this.router.navigate([`/project-mgmt/${project.id}/edit`]);
  }
}
