import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';
import { AppLoginService } from '../service/app.login.service';
import { ToastrService } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import {ComponentsModule } from "../components/components.module";
@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ComponentsModule,
    RouterModule.forChild([{ path: "", component: AuthComponent }]),
  ],
  providers: [AppLoginService, ToastrService]
})
export class AuthModule { }
