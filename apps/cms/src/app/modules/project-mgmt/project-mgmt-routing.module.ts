import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectListComponent } from './pages/project-list/project-list.component';
import { ProjectEditComponent } from './pages/project-edit/project-edit.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectListComponent,
  },
  {
    path: ':id/edit',
    component: ProjectEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectMgmtRoutingModule {}
