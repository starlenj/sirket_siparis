import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppSidebarComponent } from './app-sidebar/app-sidebar.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    AppHeaderComponent,
    AppSidebarComponent
  ],
  exports: [
    AppHeaderComponent,
    AppSidebarComponent,
  ]
})
export class ComponentsModule { }
