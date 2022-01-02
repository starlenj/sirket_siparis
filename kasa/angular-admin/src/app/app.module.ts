import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './base/guards/auth.guard';
import { AppInterceptor } from './base/service/http.interceptors';
import { ComponentsModule } from './components/components.module';
import { AppLoginService } from './service/app.login.service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppFormService } from './service/app.form.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    ComponentsModule,
  ],
  providers: [
    AuthGuard,
    AppLoginService,
    AppFormService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AppInterceptor,
    multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
