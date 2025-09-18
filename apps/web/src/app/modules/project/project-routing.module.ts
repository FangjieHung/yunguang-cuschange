import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// Custom packages
import { MassRefinementComponent, MassComparisonComponent, ProjectEditComponent, ProjectIntegrateComponent, RenderlistComponent, RenderDetailComponent } from './pages';

const routes: Routes = [
  {
    path: 'edit',
    component: ProjectEditComponent
  },
  {
    path: 'integrate',
    component: ProjectIntegrateComponent
  },
  {
    path: 'mass-refinement',
    component: MassRefinementComponent
  },
  {
    path: 'mass-comparison',
    component: MassComparisonComponent
  },
  {
    path: 'render-list',
    component: RenderlistComponent
  },
  {
    path: 'render-detail',
    component: RenderDetailComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class projectEditRoutingModule { }
