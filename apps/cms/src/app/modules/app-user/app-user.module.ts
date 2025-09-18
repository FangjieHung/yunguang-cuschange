import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppUserRoutingModule } from './app-user-routing.module';

// Thired party packages
import { QuillModule } from 'ngx-quill';

// Custom packages
import { SharedModule } from '../../shared/shared.module';
import { AppUserEditComponent, AppUserListComponent } from './pages';

const CUST_MODULES = [SharedModule];
const CUST_COMPONENTS = [
  AppUserEditComponent, AppUserListComponent
];

@NgModule({
  declarations: [
    ...CUST_COMPONENTS
  ],
  imports: [
    CommonModule,
    AppUserRoutingModule,
    QuillModule.forRoot(),
    ...CUST_MODULES
  ]
})
export class AppUserModule { }
