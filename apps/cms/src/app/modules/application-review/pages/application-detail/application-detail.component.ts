import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Application } from '../../../../core/models';
import { ApiService } from '../../../../core/api';

@Component({
  selector: 'cms-application-detail',
  templateUrl: './application-detail.component.html',
  styleUrls: ['./application-detail.component.scss'],
})
export class ApplicationDetailComponent implements OnInit {
  application: Application | null = null;
  isLoading = false;
  showReviewForm = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    const appId = this.route.snapshot.paramMap.get('id');
    if (appId) {
      this.loadApplication(appId);
    }
  }

  loadApplication(id: string) {
    this.isLoading = true;
    this.apiService.getApplication(id).subscribe({
      next: (app) => {
        this.application = app ?? null;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Failed to load application', err);
        this.isLoading = false;
      },
    });
  }

  onReviewSubmit(data: { decision: string; comment: string }) {
    if (!this.application) return;

    this.apiService
      .reviewApplication(
        this.application.id,
        data.decision as 'approved' | 'rework',
        data.comment
      )
      .subscribe({
        next: (updatedApp) => {
          alert('審核已提交');
          this.router.navigate(['/application-review']);
        },
        error: (err) => {
          console.error('Failed to submit review', err);
          alert('提交失敗');
        },
      });
  }

  onBack() {
    this.router.navigate(['/application-review']);
  }
}
