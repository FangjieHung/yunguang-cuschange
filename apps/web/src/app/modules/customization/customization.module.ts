import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';

import { CustomizationRoutingModule } from './customization-routing.module';

// Shell + shared components
import { BuyerShellComponent } from './components/buyer-shell/buyer-shell.component';
import { BuyerTopbarComponent } from './components/buyer-topbar/buyer-topbar.component';
import { InfoTileComponent } from './components/info-tile/info-tile.component';
import { ItemRowComponent } from './components/item-row/item-row.component';
import { FeeSummaryComponent } from './components/fee-summary/fee-summary.component';
import { EmptyStateComponent } from './components/empty-state/empty-state.component';

// Pages
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MyUnitComponent } from './pages/my-unit/my-unit.component';
import { WholeHouseComponent } from './pages/whole-house/whole-house.component';
import { FormLayer1Component } from './pages/form-layer1/form-layer1.component';
import { MyListComponent } from './pages/my-list/my-list.component';
import { DesignerPackComponent } from './pages/designer-pack/designer-pack.component';
import { SubmitComponent } from './pages/submit/submit.component';

@NgModule({
  declarations: [
    BuyerShellComponent,
    BuyerTopbarComponent,
    InfoTileComponent,
    ItemRowComponent,
    FeeSummaryComponent,
    EmptyStateComponent,
    WelcomeComponent,
    DashboardComponent,
    MyUnitComponent,
    WholeHouseComponent,
    FormLayer1Component,
    MyListComponent,
    DesignerPackComponent,
    SubmitComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CustomizationRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatChipsModule,
    MatTooltipModule,
  ],
})
export class CustomizationModule {}
