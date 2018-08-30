import { LoaderComponent } from './loader/loader.component';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatAutocompleteModule,
  MatGridListModule,
  MatCardModule,
  MatCheckboxModule,
  MatStepperModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatDialogModule,
  MatNativeDateModule,
  MatInputModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatToolbarModule,
  MatDividerModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatIconModule,
  MatSelectModule,
  MatTableModule,
  MatSortModule,
  MatSnackBarModule,
  MatExpansionModule,
  MatSidenavModule,
  MatPaginatorModule,
  MatRadioModule,
  MatSliderModule,
  MatMenuModule,
  MatSlideToggleModule,
} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatGridListModule,
    MatCardModule,
    MatCheckboxModule,
    MatStepperModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatDialogModule,
    MatNativeDateModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatDividerModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatSelectModule,
    MatTableModule,
    MatSortModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatRadioModule,
    MatSliderModule,
    MatMenuModule,
    MatSlideToggleModule
  ],
  exports: [
    CommonModule,
    MatAutocompleteModule,
    MatGridListModule,
    MatCardModule,
    MatCheckboxModule,
    MatStepperModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatDialogModule,
    MatNativeDateModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatDividerModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatSelectModule,
    MatTableModule,
    MatSortModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatRadioModule,
    MatSliderModule,
    MatMenuModule,
    MatSlideToggleModule
  ],
  declarations: [
    LoaderComponent
  ],
  providers: [],
  entryComponents: []
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [

      ]
    };
  }
}
