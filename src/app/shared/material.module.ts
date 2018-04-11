import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import {
  MatExpansionModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatButtonModule,
  MatCardModule,
  MatStepperModule,
  MatInputModule,
  MatIconModule,
} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  exports: [
    FlexLayoutModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatStepperModule,
    MatToolbarModule,
  ]
})
export class MaterialModule {
}
