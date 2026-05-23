import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectListComponent } from './project-list.component';
import { CmsStore } from '../../../../core/state';
import { ApiService } from '../../../../core/api';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/shared.module';
import { of, throwError } from 'rxjs';
import { Project } from '../../../../core/models';
import { Router } from '@angular/router';

describe('ProjectListComponent', () => {
  let component: ProjectListComponent;
  let fixture: ComponentFixture<ProjectListComponent>;
  let apiService: Partial<ApiService>;
  let router: Partial<Router>;
  let store: CmsStore;

  const mockProjects: Project[] = [
    {
      id: 'proj-001',
      name: '富華澐光',
      code: 'GH-001',
      status: 'active',
      startDate: '2026-01-01',
      endDate: '2026-12-31',
      totalUnits: 120,
    },
    {
      id: 'proj-002',
      name: '精緻尊邸',
      code: 'ZD-002',
      status: 'closed',
      startDate: '2023-06-15',
      endDate: '2025-06-14',
      totalUnits: 85,
    },
  ];

  beforeEach(async () => {
    const apiServiceMock: Partial<ApiService> = {
      getProjects: jest.fn().mockReturnValue(of(mockProjects)),
    };
    const routerMock: Partial<Router> = {
      navigate: jest.fn(),
    };

    await TestBed.configureTestingModule({
      declarations: [ProjectListComponent],
      imports: [ReactiveFormsModule, SharedModule],
      providers: [
        CmsStore,
        { provide: ApiService, useValue: apiServiceMock },
        { provide: Router, useValue: routerMock },
      ],
    }).compileComponents();

    apiService = TestBed.inject(ApiService);
    router = TestBed.inject(Router);
    store = TestBed.inject(CmsStore);

    fixture = TestBed.createComponent(ProjectListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load projects on init', () => {
    fixture.detectChanges();
    expect(apiService.getProjects).toHaveBeenCalled();
  });

  it('should display projects from store after loading', () => {
    fixture.detectChanges();
    expect(component.projects()).toEqual(mockProjects);
  });

  it('should set isLoading to false after successful load', (done) => {
    fixture.detectChanges();
    setTimeout(() => {
      expect(component.isLoading).toBeFalsy();
      done();
    }, 100);
  });

  it('should handle error when loading projects', (done) => {
    (apiService.getProjects as jest.Mock).mockReturnValue(
      throwError(() => new Error('Load failed'))
    );
    jest.spyOn(console, 'error').mockImplementation();

    component.loadProjects();
    setTimeout(() => {
      expect(console.error).toHaveBeenCalled();
      expect(component.isLoading).toBeFalsy();
      done();
    }, 100);
  });

  it('should navigate to create project on onCreateProject', () => {
    component.onCreateProject();
    expect(router.navigate).toHaveBeenCalledWith(['/project-mgmt/new']);
  });

  it('should navigate to edit project on onEditProject', () => {
    const project = mockProjects[0];
    component.onEditProject(project);
    expect(router.navigate).toHaveBeenCalledWith([
      `/project-mgmt/${project.id}/edit`,
    ]);
  });
});
