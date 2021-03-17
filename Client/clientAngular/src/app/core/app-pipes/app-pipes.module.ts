import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderDataPipe } from './order.data.pipe';



@NgModule({
  declarations: [OrderDataPipe],
  imports: [
    CommonModule
  ],
  exports:[OrderDataPipe]
})
export class AppPipesModule { }
