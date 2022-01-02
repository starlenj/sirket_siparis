import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppSidebarComponent } from './app-sidebar/app-sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BaseComponent } from '../base/component/base.component';
import { ButtonEditComponent } from './ag-grid/button-edit/button-edit.component';
import { JsonFormComponent } from './json-form/json-form.component';
@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    AppHeaderComponent,
    AppSidebarComponent,
    ButtonEditComponent,
    JsonFormComponent
  ],
  exports: [
    AppHeaderComponent,
    AppSidebarComponent,
    JsonFormComponent,
    ButtonEditComponent,
  ],
  providers: [BaseComponent]
})
export class ComponentsModule { }
