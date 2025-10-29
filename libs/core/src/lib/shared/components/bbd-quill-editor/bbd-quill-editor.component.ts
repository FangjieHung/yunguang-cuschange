import { Component, EventEmitter, Injector, Input, OnInit, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { BBDBaseComponent } from '../bbd-base.component';
import { AppAttachApiServ } from '../../../services/app-attach.api.serv';

@Component({
  selector: 'bbd-quill-editor',
  templateUrl: './bbd-quill-editor.component.html',
  styleUrls: ['./bbd-quill-editor.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BBDQuillEditorComponent),
      multi: true
    }
  ]
})
export class BBDQuillEditorComponent extends BBDBaseComponent implements OnInit, ControlValueAccessor {
  @Input() placeholder = '請輸入內容';
  @Input() isUseLink = true;
  @Input() isUseImage = true;
  @Input() isUseVideo = true;
  formData = new FormData();

  // 樣式參考以下寫法才能完整正常運作
  // <div class="ql-container ql-snow" style="border: none !important;">
  //     <div class="ql-editor" [innerHTML]="(info.content || '{}' | jsonParse)?.desc | safeHtml">
  //     </div>
  // </div>
  quillConfig = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote'],
      [{ 'header': 1 }, { 'header': 2 }],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'indent': '-1' }, { 'indent': '+1' }],
      [{ 'direction': 'rtl' }],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'size': ['small', false, 'large', 'huge'] }],
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      [{ 'font': [] }],
      [{ 'align': [] }],
      ['clean'],
      // [this.isUseLink ? 'link' : '', 'image', 'video'],

    ]
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  editor: any;

  // IOs
  @Input() _content = '';
  @Output() _contentChange = new EventEmitter<string>();
  get content(): string {
    return this._content;
  }

  set content(value: string) {
    this._content = value;
    this.propagateChange(this._content);
    this._contentChange.emit(this._content);
  }

  constructor(
    private appAttachApiServ: AppAttachApiServ,
    protected override injector: Injector
  ) {
    super(injector);
  }

  ngOnInit(): void {
    console.log();
    if (this.quillConfig.toolbar) {
      const medias: string[] = [];
      if (this.isUseLink) {
        medias.push('link');
      }
      if (this.isUseImage) {
        medias.push('image');
      }
      if (this.isUseVideo) {
        medias.push('video');
      }
      if (medias.length) {
        this.quillConfig.toolbar.push(medias)
      }
    }
  }

  writeValue(value: string) {
    if (value !== undefined) {
      this._content = value;
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

  editorCreated(quill: any): void {
    const toolbar = quill.getModule('toolbar');
    toolbar.addHandler('image', this.imageHandler.bind(this));
    this.editor = quill;
  }

  imageHandler() {
    const imageinput = document.createElement('input');
    imageinput.setAttribute('type', 'file');
    imageinput.setAttribute('accept', 'image/png, image/gif, image/jpeg, image/bmp, image/x-icon');
    imageinput.classList.add('ql-image');
    imageinput.addEventListener('change', () => {
      if (imageinput.files != null && imageinput.files[0] != null) {
        const formData = new FormData();
        Object.entries(this.formData).forEach(([key, value]) => {
          formData.append(key, value);
        });
        formData.append('file', (imageinput?.files || [])[0]);

        this.appAttachApiServ.uploadCdnFiles(formData)
          .subscribe(res => {
            const range = this.editor.getSelection(true);
            const imageSrc = this.combineCdnUrl(res[0].fullPath);
            this.editor.insertEmbed(range.index, 'image', imageSrc);
          });
      }
    });
    imageinput.click();
  }
}
