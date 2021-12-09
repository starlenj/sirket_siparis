import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppSidebarComponent } from './app-sidebar/app-sidebar.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatTreeModule } from "@angular/material/tree";
import { MatButtonModule } from '@angular/material/button';
import {  MatDividerModule } from "@angular/material/divider";
@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatTreeModule,
    MatButtonModule,
    MatDividerModule,
  ],
  declarations: [
    AppHeaderComponent,
    AppSidebarComponent
  ],
  exports: [
    AppHeaderComponent,
    AppSidebarComponent,
  ],
  providers: []
})
export class ComponentsModule { }
