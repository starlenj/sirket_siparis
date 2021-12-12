import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridConfigComponent } from './grid-config.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    GridConfigComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: "", component: GridConfigComponent }]),
  ]
})
export class GridConfigModule { }
