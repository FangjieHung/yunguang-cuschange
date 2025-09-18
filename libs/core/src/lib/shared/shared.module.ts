import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Third party packages
import { ThirdPartyModule } from './modules/third-party.module';

// Custom packages
import {
  BBDQuillEditorViewerComponent, BBDImageUploadComponent, BBDFileUploadComponent, BBDConfirmDialogComponent,
  // Widget
  ZipCodeWidgetComponent,
} from './components';
import { AntdModule, MaterialModule } from './modules';
import {
  AryFilterPipe, AryFindValuePipe, AryFindPipe, ArySortPipe, CtrlHasRequiredPipe, DateFormatterPipe, EmptyFormatterPipe,
  JsonParsePipe, SafeHtmlPipe, SafeUrlPipe, FileUrlPipe, RoundDefaultPipe, AreaConvertPipe, HasPermissionPipe, HasAnyPermissionPipe,
} from './pipes';
import { BBDNotifyModule } from './components/bbd-notify/bbd-notify.module';

const CUST_MODULES = [AntdModule, MaterialModule];
const CUST_COMPONENTS = [BBDQuillEditorViewerComponent, BBDImageUploadComponent, BBDFileUploadComponent, ZipCodeWidgetComponent, BBDConfirmDialogComponent];
const CUST_PIPES = [AryFilterPipe, AryFindValuePipe, AryFindPipe, ArySortPipe, CtrlHasRequiredPipe, DateFormatterPipe,
  EmptyFormatterPipe, JsonParsePipe, SafeHtmlPipe, SafeUrlPipe, FileUrlPipe, RoundDefaultPipe, AreaConvertPipe,
  HasPermissionPipe, HasAnyPermissionPipe,];
const THIRD_MODULES = [ThirdPartyModule, BBDNotifyModule];

@NgModule({
  declarations: [
    ...CUST_PIPES,
    ...CUST_COMPONENTS
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
    ...THIRD_MODULES
  ]
})
export class SharedModule { }
