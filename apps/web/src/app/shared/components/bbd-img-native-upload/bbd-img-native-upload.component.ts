/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, EventEmitter, Injector, Input, OnInit, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BBDBaseComponent } from '../bbd-base.component';
import { AppAttachApiServ } from '../../../services/app-attach.api.serv';
import { DeviceDetectorService } from 'ngx-device-detector';
import { AppFileAttLog } from '../../../models/entities';

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
    private deviceServ: DeviceDetectorService,
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
    this.onAttCheckLog(files);
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
    // this.spinnerServ.show();
    // const uploadServ = this.isHighPixelImg ?
    // this.appAttachApiServ.uploadHighPixelImgs(this.formData) :
    // this.appAttachApiServ.uploadAppFileInfos(this.formData);
    // uploadServ.subscribe({
    //   next: (res) => {
    //     if (!res) {
    //       this.bbdNotifyServ.error('圖片上傳失敗，請再重試一次。');
    //       return;
    //     }

    //     this.bbdNotifyServ.success('圖片上傳成功，請記得存檔。');
    //     this.attId = res[0].id;
    //     this._attIdChange.emit(this._attId);
    //   },
    //   error: (err) => {
    //     this.notificationServ.error(
    //       '執行失敗',
    //       `錯誤訊息：「${err?.error?.errorMessage}」`
    //     );
    //   },
    // }).add(() => this.spinnerServ.hide());
  }

  onDelAppFileAtt(): void {
    this.attId = 0;
    this.previewSrc = '';
    this._attIdChange.emit(this._attId || 0);
    this.filesChange.emit(null);

    // 暫時不採用直接刪除，避免忘記存擋時圖片無法顯示
    // this.appAttachApiServ.delAppFileAtt(this.attId).subscribe({
    //   next: (res) => {
    //     if (!res) {
    //       this.bbdNotifyServ.error('圖片刪除失敗，請再重試一次。');
    //       return;
    //     }

    //     this.bbdNotifyServ.success('圖片刪除失敗成功。');
    //     this.attId = 0;
    //   },
    //   error: (err) => {
    //     this.notificationServ.error(
    //       '執行失敗',
    //       `錯誤訊息：「${err?.error?.errorMessage}」`
    //     );
    //   },
    // }).add(() => this.spinnerServ.hide());
  }

  onAttCheckLog(files: any): void {
    let jtoContent: any = {};
    const request = new AppFileAttLog();
    try {
      jtoContent = {
        device: this.deviceServ.getDeviceInfo(),
        appUser: {
          appUserId: this.currUserInfo?.appUserId,
          custId: this.currUserInfo?.custId,
          account: this.currUserInfo?.account,
        },
        file: {
          name: files[0]?.name || '',
          size: files[0]?.size || 0,
          type: files[0]?.type || '',
          lastModifiedDate: files[0]?.lastModifiedDate || new Date('2999-12-31T00:00:00.000Z'),
          webkitRelativePath: files[0]?.webkitRelativePath || '',
          previewSrc: URL.createObjectURL(files[0]) || ''
        }
      };
    }
    catch (e) {
      jtoContent = {
        device: this.deviceServ.getDeviceInfo(),
        appUser: {
          appUserId: this.currUserInfo?.appUserId,
          custId: this.currUserInfo?.custId,
          account: this.currUserInfo?.account,
        },
        file: {
          name: files[0]?.name || '',
          size: files[0]?.size || 0,
          type: files[0]?.type || '',
        },
        exception: (e as Error).message
      };
    }

    request.content = JSON.stringify(jtoContent || '{}');
    this.appAttachApiServ.setAppFileAttLog(request).subscribe({
      next: (res) => {
        if (!res) {
          return;
        }
      },
    });
  }
}
