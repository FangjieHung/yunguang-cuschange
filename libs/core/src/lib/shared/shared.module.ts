import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Third party packages
import { ThirdPartyModule } from './modules/third-party.module';

// Custom packages
import {
  BBDQuillEditorComponent, BBDQuillEditorViewerComponent,
  BBDImageUploadComponent, BBDImgNativeUploadComponent, BBDFileUploadComponent, BBDConfirmDialogComponent,
} from './components';
import { ZipCodeControlComponent } from './controls';
import { AntdModule, MaterialModule } from './modules';
import {
  AryFilterPipe, AryFindValuePipe, AryFindPipe, ArySortPipe, CtrlHasRequiredPipe, DateFormatterPipe, EmptyFormatterPipe,
  JsonParsePipe, PhoneFormatterPipe, SafeHtmlPipe, SafeUrlPipe, FileUrlPipe, RoundDefaultPipe, AreaConvertPipe,
  HasPermissionPipe, HasAnyPermissionPipe, IsEmptyPipe
} from './pipes';
import { BBDNotifyModule } from './components/bbd-notify/bbd-notify.module';
import { ImageFallbackDirective } from './../directives';

const CUST_MODULES = [AntdModule, MaterialModule];
const CUST_COMPONENTS = [BBDQuillEditorComponent, BBDQuillEditorViewerComponent, BBDImageUploadComponent, BBDImgNativeUploadComponent, BBDFileUploadComponent, BBDConfirmDialogComponent];
const CUST_CONTROLS = [ZipCodeControlComponent];
const CUST_PIPES = [AryFilterPipe, AryFindValuePipe, AryFindPipe, ArySortPipe, CtrlHasRequiredPipe, DateFormatterPipe,
  EmptyFormatterPipe, JsonParsePipe, PhoneFormatterPipe, SafeHtmlPipe, SafeUrlPipe, FileUrlPipe, RoundDefaultPipe, AreaConvertPipe,
  HasPermissionPipe, HasAnyPermissionPipe, IsEmptyPipe];
const THIRD_MODULES = [ThirdPartyModule, BBDNotifyModule];
const CUST_DIRECTIVES = [ImageFallbackDirective];

@NgModule({
  declarations: [
    ...CUST_DIRECTIVES,
    ...CUST_PIPES,
    ...CUST_COMPONENTS,
    ...CUST_CONTROLS,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...CUST_MODULES,
    ...THIRD_MODULES
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    ...CUST_MODULES,
    ...CUST_PIPES,
    ...CUST_COMPONENTS,
    ...CUST_CONTROLS,
    ...THIRD_MODULES,
    ...CUST_DIRECTIVES
  ]
})
export class SharedModule { }
