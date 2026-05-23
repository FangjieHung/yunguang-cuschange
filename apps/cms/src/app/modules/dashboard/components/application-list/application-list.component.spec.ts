import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApplicationListComponent } from './application-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Application } from '../../../../core/models';

describe('ApplicationListComponent', () => {
  let component: ApplicationListComponent;
  let fixture: ComponentFixture<ApplicationListComponent>;

  const mockApplications: Application[] = [
    {
      id: 'app-001',
      buyerId: 'buyer-001',
      projectId: 'proj-001',
      version: 1,
      status: 'submitted',
      items: [],
      totalAddOn: 5000,
      totalRefund: 0,
      submittedAt: '2026-05-20T10:00:00Z',
    },
    {
      id: 'app-002',
      buyerId: 'buyer-002',
      projectId: 'proj-001',
      version: 1,
      status: 'approved',
      items: [],
      totalAddOn: 3000,
      totalRefund: 1000,
      submittedAt: '2026-05-19T10:00:00Z',
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApplicationListComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ApplicationListComponent);
    component = fixture.componentInstance;
    component.applications = mockApplications;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display all applications by default', () => {
    expect(component.filteredApplications.length).toBe(2);
  });

  it('should filter applications by status', (done) => {
    component.statusFilter.setValue('approved');
    setTimeout(() => {
      expect(component.filteredApplications.length).toBe(1);
      expect(component.filteredApplications[0].status).toBe('approved');
      done();
    }, 100);
  });

  it('should calculate pagination correctly', () => {
    component.pageSize = 1;
    expect(component.getTotalPages()).toBe(2);
  });

  it('should emit applicationSelect event on row click', () => {
    spyOn(component.applicationSelect, 'emit');
    component.onApplicationClick(mockApplications[0]);
    expect(component.applicationSelect.emit).toHaveBeenCalledWith(
      mockApplications[0]
    );
  });

  it('should handle pagination navigation', () => {
    component.pageSize = 1;
    expect(component.currentPage).toBe(1);
    component.nextPage();
    expect(component.currentPage).toBe(2);
    component.prevPage();
    expect(component.currentPage).toBe(1);
  });
});
