import { NgModule } from '@angular/core';
import {
  MatNativeDateModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatChipsModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatSliderModule,
  MatStepperModule,
  MatTableModule,
  MatGridListModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTabsModule,
  MatDatepickerModule,
  MatSnackBarModule,
  MatCheckboxModule,
  MatRadioModule,
  MatSortModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatBottomSheetModule,
  MatAutocompleteModule,
  MatBadgeModule,
} from '@angular/material';

import {LayoutModule} from '@angular/cdk/layout';
import {TextFieldModule} from '@angular/cdk/text-field';

const materialModules: any[] = [
  MatButtonModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatButtonToggleModule,
  MatCardModule,
  MatChipsModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDividerModule,
  MatDividerModule,
  MatExpansionModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatIconModule,
  MatInputModule,
  MatInputModule,
  MatListModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatProgressSpinnerModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSelectModule,
  MatSidenavModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatStepperModule,
  MatStepperModule,
  MatTableModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTooltipModule,
  MatCheckboxModule,
  MatRadioModule,
  MatSortModule,
  MatPaginatorModule,
  MatProgressBarModule,
  LayoutModule,
  TextFieldModule,
  MatBottomSheetModule,
  MatAutocompleteModule,
  MatBadgeModule,
];

@NgModule({
  imports: [...materialModules],
  exports: [...materialModules],
})
export class AppMaterialModule { }
