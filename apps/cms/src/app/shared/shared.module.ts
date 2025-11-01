import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Thired party packages
import { QuillModule } from 'ngx-quill';

// Custom packages
import { SharedModule as CoreSharedModule } from '@core/shared';
import {
  CmsImgPreviewComponent, CmsPageHeaderComponent, CmsSearchBarComponent,
  CmsImgUploadComponent, CmsTagEditComponent, CmsPdfUploadComponent,
  CmsQuillEditorComponent,
} from './components';
import { CustGroupControlComponent, CustMemberControlComponent } from './controls';

const CUST_MODULES = [CoreSharedModule];
const CUST_COMPONENTS = [CmsImgPreviewComponent,
  CmsPageHeaderComponent, CmsSearchBarComponent,
  CmsTagEditComponent, CmsPdfUploadComponent,
  CmsImgUploadComponent, CmsQuillEditorComponent
];
const CUST_CONTROLS = [
  CustGroupControlComponent, CustMemberControlComponent
];

@NgModule({
  declarations: [
    ...CUST_COMPONENTS,
    ...CUST_CONTROLS
  ],
  imports: [
    CommonModule,
    FormsModule,
    QuillModule.forRoot(),
    ReactiveFormsModule,
    ...CUST_MODULES
  ],
  exports: [
    ...CUST_MODULES,
    ...CUST_COMPONENTS,
    ...CUST_CONTROLS
  ]
})
export class SharedModule { }
