import { NgModule } from '@angular/core';

// Angular material packages
import { MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav'

import { MatStepperModule } from '@angular/material/stepper';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatDividerModule } from '@angular/material/divider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { YouTubePlayerModule } from '@angular/youtube-player';

// Custom packages
import { MAT_DATE_TW_FORMATS } from '../../consts';

const MODULES = [
  MatInputModule,
  MatSidenavModule,
  MatStepperModule,
  MatProgressBarModule,
  MatIconModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatButtonModule, MatBottomSheetModule, MatButtonToggleModule,
  MatCheckboxModule,
  MatPaginatorModule,
  MatTableModule,
  MatSortModule,
  MatMenuModule,
  MatSelectModule,
  MatDialogModule,
  MatRadioModule,
  MatDividerModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTabsModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  MatExpansionModule,
  MatListModule,
  MatChipsModule,
  YouTubePlayerModule
];

@NgModule({
  declarations: [],
  imports: [],
  exports: [
    ...MODULES
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'zh-TW' },
    { provide: MAT_DATE_FORMATS, useValue: MAT_DATE_TW_FORMATS }
  ]
})
export class MaterialModule { }
