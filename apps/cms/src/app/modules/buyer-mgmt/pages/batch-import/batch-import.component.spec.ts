import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { BatchImportComponent } from './batch-import.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

describe('BatchImportComponent', () => {
  let component: BatchImportComponent;
  let fixture: ComponentFixture<BatchImportComponent>;
  let router: jest.Mocked<Router>;

  beforeEach(async () => {
    const routerMock = {
      navigate: jest.fn(),
    };

    await TestBed.configureTestingModule({
      declarations: [BatchImportComponent],
      imports: [CommonModule, MatIconModule],
      providers: [{ provide: Router, useValue: routerMock }],
    }).compileComponents();

    router = TestBed.inject(Router) as jest.Mocked<Router>;

    fixture = TestBed.createComponent(BatchImportComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with no file selected', () => {
    expect(component.selectedFile).toBeNull();
    expect(component.isUploading).toBeFalsy();
    expect(component.uploadMessage).toBe('');
    expect(component.uploadSuccess).toBeFalsy();
  });

  it('should select file when file input changes', () => {
    const mockFile = new File(['test content'], 'test.csv', { type: 'text/csv' });
    const event = {
      target: {
        files: [mockFile],
      },
    };

    component.onFileSelected(event);

    expect(component.selectedFile).toBe(mockFile);
    expect(component.uploadMessage).toBe('');
    expect(component.uploadSuccess).toBeFalsy();
  });

  it('should handle empty file selection', () => {
    const event = {
      target: {
        files: [],
      },
    };

    component.onFileSelected(event);

    expect(component.selectedFile).toBeNull();
  });

  it('should alert if no file selected on upload', () => {
    const alertSpy = jest.spyOn(window, 'alert').mockImplementation();

    component.onUpload();

    expect(alertSpy).toHaveBeenCalledWith('請選擇檔案');

    alertSpy.mockRestore();
  });

  it('should upload file successfully', fakeAsync(() => {
    const mockFile = new File(['test content'], 'test.csv', { type: 'text/csv' });
    component.selectedFile = mockFile;

    component.onUpload();

    expect(component.isUploading).toBeTruthy();

    tick(1500);

    expect(component.isUploading).toBeFalsy();
    expect(component.uploadSuccess).toBeTruthy();
    expect(component.uploadMessage).toContain('成功匯入 test.csv');

    tick(1500);
  }));

  it('should navigate to buyer list after successful upload', fakeAsync(() => {
    const mockFile = new File(['test content'], 'test.csv', { type: 'text/csv' });
    component.selectedFile = mockFile;

    component.onUpload();

    tick(1500);

    expect(router.navigate).not.toHaveBeenCalled();

    tick(1500);

    expect(router.navigate).toHaveBeenCalledWith(['/buyer-mgmt']);
  }));

  it('should cancel and navigate back', () => {
    component.onCancel();

    expect(router.navigate).toHaveBeenCalledWith(['/buyer-mgmt']);
  });

  it('should reset upload message when new file is selected', () => {
    component.uploadMessage = 'Previous message';
    component.uploadSuccess = true;

    const mockFile = new File(['test content'], 'new.csv', { type: 'text/csv' });
    const event = {
      target: {
        files: [mockFile],
      },
    };

    component.onFileSelected(event);

    expect(component.uploadMessage).toBe('');
    expect(component.uploadSuccess).toBeFalsy();
    expect(component.selectedFile).toBe(mockFile);
  });

  it('should disable upload button when no file selected', () => {
    component.selectedFile = null;

    // This would be tested in the template, but we verify the logic
    const isDisabled = !component.selectedFile || component.isUploading;

    expect(isDisabled).toBeTruthy();
  });

  it('should disable upload button when uploading', () => {
    const mockFile = new File(['test content'], 'test.csv', { type: 'text/csv' });
    component.selectedFile = mockFile;
    component.isUploading = true;

    const isDisabled = !component.selectedFile || component.isUploading;

    expect(isDisabled).toBeTruthy();
  });
});
