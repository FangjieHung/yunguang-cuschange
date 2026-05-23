import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Application } from '../../../../core/models';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'cms-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.scss'],
})
export class ApplicationListComponent implements OnInit {
  @Input() applications: Application[] = [];
  @Input() pageSize: number = 10;
  @Input() enableFiltering: boolean = true;
  @Output() applicationSelect = new EventEmitter<Application>();

  filteredApplications: Application[] = [];
  statusFilter = new FormControl('');
  currentPage = 1;

  statusOptions = [
    { value: '', label: '全部' },
    { value: 'draft', label: '草稿' },
    { value: 'submitted', label: '已送出' },
    { value: 'under-review', label: '審核中' },
    { value: 'approved', label: '已批准' },
    { value: 'rework', label: '需返工' },
    { value: 'confirmed', label: '已確認' },
  ];

  ngOnInit() {
    this.applyFilters();
    this.statusFilter.valueChanges.subscribe(() => this.applyFilters());
  }

  private applyFilters() {
    let filtered = [...this.applications];

    if (this.statusFilter.value) {
      filtered = filtered.filter((app) => app.status === this.statusFilter.value);
    }

    this.filteredApplications = filtered;
    this.currentPage = 1;
  }

  onApplicationClick(app: Application) {
    this.applicationSelect.emit(app);
  }

  getStatusLabel(status: string): string {
    const option = this.statusOptions.find((o) => o.value === status);
    return option ? option.label : status;
  }

  getPaginatedApplications(): Application[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.filteredApplications.slice(
      startIndex,
      startIndex + this.pageSize
    );
  }

  getTotalPages(): number {
    return Math.ceil(this.filteredApplications.length / this.pageSize);
  }

  nextPage() {
    if (this.currentPage < this.getTotalPages()) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}
