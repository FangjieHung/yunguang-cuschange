import { TestBed } from '@angular/core/testing';
import { MockApiService } from './mock-api.service';

describe('MockApiService', () => {
  let service: MockApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockApiService],
    });
    service = TestBed.inject(MockApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return mock projects with correct data', (done) => {
    service.getProjects().subscribe((projects) => {
      expect(projects).toBeTruthy();
      expect(projects.length).toBe(2);
      expect(projects[0].name).toBe('富華澐光');
      expect(projects[0].code).toBe('GH-001');
      expect(projects[0].status).toBe('active');
      done();
    });
  });

  it('should return correct buyers for a specific project', (done) => {
    const projectId = 'proj-001';
    service.getBuyers(projectId).subscribe((buyers) => {
      expect(buyers).toBeTruthy();
      expect(buyers.length).toBe(2);
      expect(buyers[0].unitNo).toBe('12F-A1');
      expect(buyers[0].projectId).toBe(projectId);
      expect(buyers[0].ownerName).toBe('王小明');
      done();
    });
  });

  it('should return correct applications for a specific project', (done) => {
    const projectId = 'proj-001';
    service.getApplications(projectId).subscribe((applications) => {
      expect(applications).toBeTruthy();
      expect(applications.length).toBe(2);
      expect(applications[0].status).toBe('submitted');
      expect(applications[0].projectId).toBe(projectId);
      done();
    });
  });

  it('should update application status to approved with review comment', (done) => {
    const appId = 'app-001';
    const comment = 'All items approved';
    service.reviewApplication(appId, 'approved', comment).subscribe((app) => {
      expect(app).toBeTruthy();
      if (app) {
        expect(app.status).toBe('approved');
        expect(app.reviewComment).toBe(comment);
        expect(app.reviewedBy).toBe('system-reviewer');
        expect(app.reviewedAt).toBeTruthy();
      }
      done();
    });
  });
});
