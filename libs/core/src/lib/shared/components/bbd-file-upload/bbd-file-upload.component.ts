/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bbd-file-upload',
  templateUrl: './bbd-file-upload.component.html',
  styleUrls: ['./bbd-file-upload.component.scss']
})
export class BBDFileUploadComponent {
  @Input() fileName = '下載檔案';
  @Input() selectedFile: File | null = null;
  @Output() fileSelected = new EventEmitter<File | null>();

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.fileSelected.emit(file);
    }
  }

  doOpenFile(): void {
    if (!this.selectedFile) return;

    if (this.fileName) {
      const blobUrl = URL.createObjectURL(this.selectedFile);
      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = this.fileName;
      a.click();
      URL.revokeObjectURL(blobUrl);
    } else {
      window.open(URL.createObjectURL(this.selectedFile), "_blank");
    }
  }

  remove(): void {
    this.selectedFile = null;
    this.fileName = '';
    this.fileSelected.emit(null);
  }
}
