import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ApiService } from '../../../../core/api/api.service';
import { ReportData } from '../../../../core/models';

@Component({
  selector: 'cms-report-builder',
  templateUrl: './report-builder.component.html',
  styleUrls: ['./report-builder.component.scss'],
})
export class ReportBuilderComponent implements OnInit {
  reportForm!: FormGroup;
  reportData = signal<ReportData | null>(null);
  isGenerating = signal(false);
  error = signal<string | null>(null);

  reportTypeOptions = [
    { label: '申請報表', value: 'applications' },
    { label: '買家報表', value: 'buyers' },
    { label: '財務報表', value: 'financials' },
    { label: '時間軸報表', value: 'timeline' },
  ];

  groupByOptions = [
    { label: '日期', value: 'daily' },
    { label: '週次', value: 'weekly' },
    { label: '月份', value: 'monthly' },
    { label: '狀態', value: 'status' },
    { label: '類別', value: 'category' },
  ];

  exportFormatOptions = [
    { label: 'PDF', value: 'pdf' },
    { label: 'Excel', value: 'excel' },
    { label: 'CSV', value: 'csv' },
  ];

  displayedColumns: string[] = [];

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService
  ) {
    this.initializeForm();
  }

  ngOnInit(): void {
    // Nothing special needed here
  }

  private initializeForm(): void {
    this.reportForm = this.fb.group(
      {
        reportType: [null, [Validators.required]],
        dateFrom: [null, [Validators.required]],
        dateTo: [null, [Validators.required]],
        groupBy: [null],
        includeCharts: [true],
        exportFormat: [null],
      },
      {
        validators: this.dateRangeValidator(),
      }
    );
  }

  private dateRangeValidator() {
    return (control: AbstractControl): ValidationErrors | null => {
      const dateFromCtrl = control.get('dateFrom');
      const dateToCtrl = control.get('dateTo');

      if (!dateFromCtrl || !dateToCtrl) {
        return null;
      }

      const dateFrom = dateFromCtrl.value;
      const dateTo = dateToCtrl.value;

      if (!dateFrom || !dateTo) {
        return null;
      }

      if (new Date(dateFrom) > new Date(dateTo)) {
        return { dateRangeInvalid: true };
      }

      return null;
    };
  }

  onGenerateReport(): void {
    if (!this.reportForm.valid) {
      this.error.set('請填寫所有必填欄位');
      return;
    }

    this.isGenerating.set(true);
    this.error.set(null);

    const payload = {
      reportType: this.reportForm.get('reportType')?.value,
      dateFrom: this.reportForm.get('dateFrom')?.value,
      dateTo: this.reportForm.get('dateTo')?.value,
      groupBy: this.reportForm.get('groupBy')?.value,
      includeCharts: this.reportForm.get('includeCharts')?.value,
      exportFormat: this.reportForm.get('exportFormat')?.value,
    };

    this.apiService.generateReport(payload).subscribe({
      next: (report) => {
        this.reportData.set(report);
        this.isGenerating.set(false);
        this.updateDisplayedColumns();
      },
      error: (err) => {
        this.error.set('報表生成失敗，請重試');
        this.isGenerating.set(false);
        console.error('Report generation failed:', err);
      },
    });
  }

  onResetForm(): void {
    this.reportForm.reset({ includeCharts: true });
    this.reportData.set(null);
    this.error.set(null);
  }

  onDownload(): void {
    const report = this.reportData();
    if (!report) {
      return;
    }

    const format = this.reportForm.get('exportFormat')?.value;
    // In a real implementation, this would call an API to generate and download the file
    // For now, we just trigger the download placeholder
    console.log(`Downloading report in ${format} format:`, report);
    // You could implement actual download functionality here
    alert(`下載報表為 ${format.toUpperCase()} 格式 (Demo only)`);
  }

  private updateDisplayedColumns(): void {
    const report = this.reportData();
    if (report && report.data.length > 0) {
      this.displayedColumns = Object.keys(report.data[0]);
    }
  }
}
