/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, EventEmitter, Injector, Input, OnInit, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BBDBaseComponent } from '../bbd-base.component';
import { AppAttachApiServ } from '../../../services/app-attach.api.serv';

@Component({
  selector: 'bbd-img-native-upload',
  templateUrl: './bbd-img-native-upload.component.html',
  styleUrls: ['./bbd-img-native-upload.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BBDImgNativeUploadComponent),
      multi: true
    }
  ]
})
export class BBDImgNativeUploadComponent extends BBDBaseComponent implements OnInit, ControlValueAccessor {
  @Input() previewSrc = '';
  // IOs
  @Input() _attId: number | null = 0;
  @Input() files: any;
  @Input() maxImgHeight = '';
  @Input() isHighPixelImg = false;
  @Output() _attIdChange = new EventEmitter<number>();
  @Output() filesChange = new EventEmitter<any>();
  get attId(): number {
    return this._attId || 0;
  }

  set attId(value: number) {
    this._attId = value;
    this.propagateChange(this._attId);
    this._attIdChange.emit(this._attId);
  }

  constructor(
    private appAttachApiServ: AppAttachApiServ,
    protected override injector: Injector
  ) {
    super(injector);
  }

  ngOnInit(): void {
    console.log();
  }

  writeValue(value: number) {
    if (value !== undefined) {
      this.attId = value;
    }
  }

  propagateChange = (_: any) => {
    console.log();
  };
  propagateTouched = (_: any) => {
    console.log();
  };

  registerOnChange(fn: (_: any) => void) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: (_: any) => void) {
    this.propagateTouched = fn;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onUploadFile(target: any): void {
    const files = target?.files;
    if (!files || files.length === 0) {
      this.bbdNotifyServ.warning('提示，您未選取要上傳的檔案。');
      return;
    }
    const formData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formData.append(key, value);
    });
    formData.append('file', files[0]);

    setTimeout(() => {
      if (files) {
        try {
          this.previewSrc = URL.createObjectURL(files[0]);
        }
        catch (e) {
          console.log((e as Error).message);
        }
      }
    }, 200);

    this.filesChange.emit(files);

    // 臨時編號表示有上傳圖片
    this.attId = -1;
    this._attIdChange.emit(this._attId || 0);
  }

  onDelAppFileAtt(): void {
    this.attId = 0;
    this.previewSrc = '';
    this._attIdChange.emit(this._attId || 0);
    this.filesChange.emit(null);
  }

}
