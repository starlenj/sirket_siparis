import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StokComponent } from './stok.component';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  declarations: [
    StokComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: "", component: StokComponent }]),
    AgGridModule.withComponents([])
  ]
})
export class StokModule { }
