import { Component, Input, OnInit } from '@angular/core';
import { HmbrgrBaseComponent } from 'src/app/core/components/base.component';
import { Product } from 'src/app/core/models/product/product.model';

@Component({
  selector: 'app-new-order-modal',
  templateUrl: './new-order-modal.component.html',
  styleUrls: ['./new-order-modal.component.css']
})
export class NewOrderModalComponent extends  HmbrgrBaseComponent {

@Input() newOrderSelect :Product[]
}
