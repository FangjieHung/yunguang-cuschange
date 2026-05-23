import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectEditComponent } from './project-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../../core/api';
import { CmsStore } from '../../../../core/state';
import { of, throwError } from 'rxjs';
import { Project } from '../../../../core/models';

describe('ProjectEditComponent', () => {
  let component: ProjectEditComponent;
  let fixture: ComponentFixture<ProjectEditComponent>;
  let activatedRoute: any;
  let router: Partial<Router>;
  let apiService: Partial<ApiService>;
  let store: CmsStore;

  const mockProject: Project = {
    id: 'proj-001',
    name: '富華澐光',
    code: 'GH-001',
    status: 'active',
    startDate: '2026-01-01',
    endDate: '2026-12-31',
    totalUnits: 120,
  };

  beforeEach(async () => {
    const routerMock: Partial<Router> = {
      navigate: jest.fn(),
    };
    const apiServiceMock: Partial<ApiService> = {
      getProject: jest.fn(),
      createProject: jest.fn(),
      updateProject: jest.fn(),
    };

    const activatedRouteMock = {
      params: of({ id: 'new' }),
    };

    await TestBed.configureTestingModule({
      declarations: [ProjectEditComponent],
      imports: [ReactiveFormsModule],
      providers: [
        CmsStore,
        { provide: Router, useValue: routerMock },
        { provide: ApiService, useValue: apiServiceMock },
        { provide: ActivatedRoute, useValue: activatedRouteMock },
      ],
    }).compileComponents();

    router = TestBed.inject(Router);
    apiService = TestBed.inject(ApiService);
    store = TestBed.inject(CmsStore);
    activatedRoute = TestBed.inject(ActivatedRoute);

    fixture = TestBed.createComponent(ProjectEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form', () => {
    expect(component.form).toBeTruthy();
    expect(component.form.get('name')).toBeTruthy();
    expect(component.form.get('code')).toBeTruthy();
    expect(component.form.get('status')).toBeTruthy();
    expect(component.form.get('startDate')).toBeTruthy();
    expect(component.form.get('endDate')).toBeTruthy();
    expect(component.form.get('totalUnits')).toBeTruthy();
  });

  it('should validate required fields', () => {
    expect(component.form.valid).toBeFalsy();

    component.form.patchValue({
      name: 'Test Project',
      code: 'TEST-001',
      status: 'active',
      startDate: '2026-01-01',
      endDate: '2026-12-31',
      totalUnits: 10,
    });

    expect(component.form.valid).toBeTruthy();
  });

  it('should validate minimum length for name', () => {
    const control = component.form.get('name');
    control?.setValue('A');
    expect(control?.hasError('minlength')).toBeTruthy();

    control?.setValue('AB');
    expect(control?.hasError('minlength')).toBeFalsy();
  });

  it('should validate minimum units', () => {
    const control = component.form.get('totalUnits');
    control?.setValue(0);
    expect(control?.hasError('min')).toBeTruthy();

    control?.setValue(1);
    expect(control?.hasError('min')).toBeFalsy();
  });

  it('should load project when not new', () => {
    (apiService.getProject as jest.Mock).mockReturnValue(of(mockProject));
    activatedRoute.params = of({ id: 'proj-001' });

    component.ngOnInit();
    expect(apiService.getProject).toHaveBeenCalledWith('proj-001');
  });

  it('should patch form with loaded project data', (done) => {
    (apiService.getProject as jest.Mock).mockReturnValue(of(mockProject));
    activatedRoute.params = of({ id: 'proj-001' });

    component.ngOnInit();
    setTimeout(() => {
      expect(component.form.get('name')?.value).toBe(mockProject.name);
      expect(component.form.get('code')?.value).toBe(mockProject.code);
      expect(component.form.get('status')?.value).toBe(mockProject.status);
      done();
    }, 50);
  });

  it('should handle project load error', (done) => {
    (apiService.getProject as jest.Mock).mockReturnValue(
      throwError(() => new Error('Load failed'))
    );
    jest.spyOn(console, 'error').mockImplementation();
    activatedRoute.params = of({ id: 'proj-001' });

    component.ngOnInit();
    setTimeout(() => {
      expect(console.error).toHaveBeenCalled();
      expect(component.isLoading).toBeFalsy();
      done();
    }, 50);
  });

  it('should create new project on submit for new project', (done) => {
    (apiService.createProject as jest.Mock).mockReturnValue(of(mockProject));
    component.projectId = 'new';
    jest.spyOn(store, 'loadProjects');

    component.form.patchValue({
      name: mockProject.name,
      code: mockProject.code,
      status: mockProject.status,
      startDate: mockProject.startDate,
      endDate: mockProject.endDate,
      totalUnits: mockProject.totalUnits,
    });

    component.onSubmit();
    setTimeout(() => {
      expect(apiService.createProject).toHaveBeenCalled();
      expect(router.navigate).toHaveBeenCalledWith(['/project-mgmt']);
      done();
    }, 50);
  });

  it('should update project on submit for existing project', (done) => {
    (apiService.updateProject as jest.Mock).mockReturnValue(of(mockProject));
    component.projectId = 'proj-001';
    jest.spyOn(store, 'loadProjects');

    component.form.patchValue({
      name: mockProject.name,
      code: mockProject.code,
      status: mockProject.status,
      startDate: mockProject.startDate,
      endDate: mockProject.endDate,
      totalUnits: mockProject.totalUnits,
    });

    component.onSubmit();
    setTimeout(() => {
      expect(apiService.updateProject).toHaveBeenCalledWith(
        'proj-001',
        expect.any(Object)
      );
      expect(router.navigate).toHaveBeenCalledWith(['/project-mgmt']);
      done();
    }, 50);
  });

  it('should not submit if form is invalid', () => {
    component.onSubmit();
    expect(apiService.createProject).not.toHaveBeenCalled();
    expect(apiService.updateProject).not.toHaveBeenCalled();
  });

  it('should navigate back on cancel', () => {
    component.onCancel();
    expect(router.navigate).toHaveBeenCalledWith(['/project-mgmt']);
  });

  it('should identify new project correctly', () => {
    component.projectId = 'new';
    expect(component.isNewProject).toBeTruthy();

    component.projectId = 'proj-001';
    expect(component.isNewProject).toBeFalsy();
  });
});
