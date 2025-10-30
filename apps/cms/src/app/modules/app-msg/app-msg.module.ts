import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMsgRoutingModule } from './app-msg-routing.module';

// Thired party packages
import { QuillModule } from 'ngx-quill';

// Custom packages
import { SharedModule } from '../../shared/shared.module';
import { AppNewsMsgEditComponent, AppNewsMsgListComponent } from './pages';

const CUST_MODULES = [SharedModule];
const CUST_COMPONENTS = [
  AppNewsMsgEditComponent, AppNewsMsgListComponent
];

@NgModule({
  declarations: [
    ...CUST_COMPONENTS
  ],
  imports: [
    CommonModule,
    AppMsgRoutingModule,
    QuillModule.forRoot(),
    ...CUST_MODULES
  ]
})
export class AppMsgModule { }
