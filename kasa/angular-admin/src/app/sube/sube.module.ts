import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubeComponent } from './sube.component';
import { Router, RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';



@NgModule({
  declarations: [
    SubeComponent
  ],
  imports: [
    CommonModule,
    AgGridModule.withComponents([]),
    RouterModule.forChild([{ path: "", component: SubeComponent }]),
  ]
})
export class SubeModule { }
