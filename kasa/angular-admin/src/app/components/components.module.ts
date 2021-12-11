import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppSidebarComponent } from './app-sidebar/app-sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BaseComponent } from '../base/component/base.component';
@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    AppHeaderComponent,
    AppSidebarComponent
  ],
  exports: [
    AppHeaderComponent,
    AppSidebarComponent,
  ],
  providers: [BaseComponent]
})
export class ComponentsModule { }
