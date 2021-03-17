import { Component, OnInit } from '@angular/core';
import { HmbrgrBaseComponent } from 'src/app/core/components/base.component';
import { Menu } from 'src/app/core/models/product/menu.models';

@Component({
  selector: 'app-menu-index',
  templateUrl: './menu-index.component.html',
  styleUrls: ['./menu-index.component.css'],
})
export class MenuIndexComponent extends HmbrgrBaseComponent {
  public ProductList: Menu[]
  ngOnInit(): void {
    this.getProduct();
  }
  getProduct() {
    this.productService.GetProductList("Gel-Al").subscribe((data) => {
      this.ProductList = data.GetMenu
    })
  }
}
