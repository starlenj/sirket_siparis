import { Component, Input, OnInit } from '@angular/core';
import { HmbrgrBaseComponent } from 'src/app/core/components/base.component';
import { Product } from 'src/app/core/models/product/product.model';
import { OrderDataPipe } from 'src/app/core/app-pipes/order.data.pipe';

@Component({
  selector: 'app-new-order-option-list',
  templateUrl: './new-order-option-list.component.html',
  styleUrls: ['./new-order-option-list.component.css'],
  providers:[OrderDataPipe]
})
export class NewOrderOptionListComponent extends HmbrgrBaseComponent {

  @Input() newOrderOptionSelect:Product;
    public constructor(){
      super();
      console.log(this.newOrderOptionSelect)
    }
}
