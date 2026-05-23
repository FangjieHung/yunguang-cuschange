import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cms-batch-import',
  templateUrl: './batch-import.component.html',
  styleUrls: ['./batch-import.component.scss'],
})
export class BatchImportComponent {
  selectedFile: File | null = null;
  isUploading = false;
  uploadMessage = '';
  uploadSuccess = false;

  constructor(private router: Router) {}

  onFileSelected(event: any) {
    const files = event.target.files;
    if (files && files.length > 0) {
      this.selectedFile = files[0];
      this.uploadMessage = '';
      this.uploadSuccess = false;
    }
  }

  onUpload() {
    if (!this.selectedFile) {
      alert('請選擇檔案');
      return;
    }

    this.isUploading = true;
    this.uploadMessage = '';
    this.uploadSuccess = false;

    // Simulate file upload/processing
    setTimeout(() => {
      this.isUploading = false;
      this.uploadMessage = `成功匯入 ${this.selectedFile?.name}`;
      this.uploadSuccess = true;
      setTimeout(() => {
        this.router.navigate(['/buyer-mgmt']);
      }, 1500);
    }, 1500);
  }

  onCancel() {
    this.router.navigate(['/buyer-mgmt']);
  }
}
