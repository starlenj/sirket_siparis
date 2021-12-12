import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormConfigComponent } from './form-config.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FormConfigComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: "", component: FormConfigComponent }]),
  ]
})
export class FormConfigModule { }
