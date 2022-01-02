import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormConfigComponent } from './form-config.component';
import { RouterModule } from '@angular/router';
import { AppFormService } from '../service/app.form.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';



@NgModule({
  declarations: [
    FormConfigComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([]),
    RouterModule.forChild([{ path: "", component: FormConfigComponent }]),
  ],
  providers: [AppFormService]
})
export class FormConfigModule { }
