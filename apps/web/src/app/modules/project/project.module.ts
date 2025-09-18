import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { projectEditRoutingModule } from './project-routing.module';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';

// Custom packages
import { SharedModule } from '../../shared/shared.module';
import { ProjectEditComponent, ProjectIntegrateComponent, CalculatingDialogComponent, MassRefinementComponent, MassComparisonComponent, RenderlistComponent, RenderDetailComponent, DetailTableDialogComponent, LoadingComponent } from './pages';

// Config settings
const CUSTOM_MODULES = [SharedModule];
const CUSTOM_COMPONENTS = [ProjectEditComponent, ProjectIntegrateComponent, CalculatingDialogComponent, MassRefinementComponent, MassComparisonComponent, RenderlistComponent, RenderDetailComponent, DetailTableDialogComponent, LoadingComponent];

@NgModule({
  declarations: [...CUSTOM_COMPONENTS],
  imports: [
    CommonModule,
    FormsModule,
    projectEditRoutingModule,
       NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1IjoiaHBicm90aGVyIiwiYSI6ImNtODVmZGtsbTJicTEybXExcXQ1dzJmNzQifQ.641_BzJs9sz9pcdtxo_lqA'
    }),

    ...CUSTOM_MODULES
  ]
})
export class ProjectModule { }
