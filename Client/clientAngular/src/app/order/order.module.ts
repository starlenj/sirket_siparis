import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewOrderModalComponent } from './new-order-modal/new-order-modal.component';
import { NewOrderOptionListComponent } from './new-order-option-list/new-order-option-list.component';
import { AppPipesModule } from '../core/app-pipes/app-pipes.module';




@NgModule({
  declarations: [NewOrderModalComponent,NewOrderOptionListComponent],
  imports: [
    CommonModule,
    AppPipesModule
  ],
  exports:[NewOrderModalComponent,NewOrderOptionListComponent]
})
export class OrderModule { }
