import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../../core/api';
import { CmsStore } from '../../../../core/state';
import { Project } from '../../../../core/models';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'cms-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.scss'],
})
export class ProjectEditComponent implements OnInit, OnDestroy {
  form!: FormGroup;
  projectId: string | null = null;
  isSubmitting = false;
  isLoading = false;
  private destroy$ = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService,
    private store: CmsStore
  ) {}

  ngOnInit() {
    this.initForm();
    this.route.params.pipe(takeUntil(this.destroy$)).subscribe((params) => {
      this.projectId = params['id'];
      if (this.projectId && this.projectId !== 'new') {
        this.loadProject(this.projectId);
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  initForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      code: ['', [Validators.required, Validators.minLength(2)]],
      status: ['active', [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required]],
      totalUnits: [0, [Validators.required, Validators.min(1)]],
    });
  }

  loadProject(id: string) {
    this.isLoading = true;
    this.apiService
      .getProject(id)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (project) => {
          if (project) {
            this.patchForm(project);
          }
          this.isLoading = false;
        },
        error: (err) => {
          console.error('Failed to load project', err);
          this.isLoading = false;
        },
      });
  }

  patchForm(project: Project) {
    this.form.patchValue({
      name: project.name,
      code: project.code,
      status: project.status,
      startDate: project.startDate,
      endDate: project.endDate,
      totalUnits: project.totalUnits,
    });
  }

  onSubmit() {
    if (this.form.invalid) return;

    this.isSubmitting = true;
    const formValue = this.form.value;

    if (this.projectId && this.projectId !== 'new') {
      this.apiService
        .updateProject(this.projectId, formValue)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (updated) => {
            if (updated) {
              this.store.loadProjects([
                ...this.store.projects(),
              ]);
            }
            this.isSubmitting = false;
            this.router.navigate(['/project-mgmt']);
          },
          error: (err) => {
            console.error('Failed to update project', err);
            this.isSubmitting = false;
          },
        });
    } else {
      this.apiService
        .createProject(formValue as Project)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (created) => {
            this.store.loadProjects([
              ...this.store.projects(),
              created,
            ]);
            this.isSubmitting = false;
            this.router.navigate(['/project-mgmt']);
          },
          error: (err) => {
            console.error('Failed to create project', err);
            this.isSubmitting = false;
          },
        });
    }
  }

  onCancel() {
    this.router.navigate(['/project-mgmt']);
  }

  get isNewProject(): boolean {
    return this.projectId === 'new';
  }
}
