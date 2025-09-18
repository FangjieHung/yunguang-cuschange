/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bbd-image-upload',
  templateUrl: './bbd-image-upload.component.html',
  styleUrls: ['./bbd-image-upload.component.scss']
})
export class BBDImageUploadComponent {
  @Input() imageUrl: string | null = null;
  @Input() attId = 0;
  @Output() imageSelected = new EventEmitter<File | null>();

  selectedImage: string | null = null;
  file: File | null = null;

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.file = file;
      const reader = new FileReader();
      reader.onload = () => this.selectedImage = reader.result as string;
      reader.readAsDataURL(file);
      this.imageSelected.emit(file);
    }
  }

  remove(): void {
    this.selectedImage = null;
    this.imageUrl = null;
    this.file = null;
    this.attId = 0;
    this.imageSelected.emit(null);
  }
}
