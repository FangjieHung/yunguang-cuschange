import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProjectMgmtRoutingModule } from './project-mgmt-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ProjectListComponent } from './pages/project-list/project-list.component';
import { ProjectEditComponent } from './pages/project-edit/project-edit.component';

@NgModule({
  declarations: [ProjectListComponent, ProjectEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ProjectMgmtRoutingModule,
  ],
})
export class ProjectMgmtModule {}
