import { NgModule } from '@angular/core';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';
import { MatTabsModule } from '@angular/material/tabs';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatInputModule } from '@angular/material/input';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const MODULES = [
  CdkTreeModule,
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatTabsModule,
  MatTreeModule,
  DragDropModule,
  MatBadgeModule,
  MatChipsModule,
  MatInputModule,
  MatTableModule,
  MatButtonModule,
  MatDialogModule,
  MatSelectModule,
  MatSidenavModule,
  MatStepperModule,
  MatToolbarModule,
  MatTooltipModule,
  MatCheckboxModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatDatepickerModule,
  MatProgressBarModule,
  MatAutocompleteModule,
  MatButtonToggleModule,
  MatProgressSpinnerModule,
];
@NgModule({
  imports: [...MODULES],
  exports: [...MODULES],
})
export class MaterialModule {}
