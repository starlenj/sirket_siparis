import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { MenuModule } from './menu/menu.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { productReducer } from './core/store/Reducer/product.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OrderModule } from './order/order.module';
import { AppPipesModule } from './core/app-pipes/app-pipes.module';
import { orderReducer } from './core/store/Reducer/order.reduces';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    MenuModule,
    StoreModule.forRoot({
      product:productReducer,
      order:orderReducer
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    NgbModule,
    OrderModule,
    AppPipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
