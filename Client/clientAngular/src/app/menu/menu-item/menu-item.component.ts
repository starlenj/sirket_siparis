import { Component, Input, OnInit } from '@angular/core';
import { HmbrgrBaseComponent } from 'src/app/core/components/base.component';
import { Menu } from 'src/app/core/models/product/menu.models';
import { Product } from 'src/app/core/models/product/product.model';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AppState } from 'src/app/app.state';
import { Store } from '@ngrx/store';
import { AddProductAction } from 'src/app/core/store/Action/product.action';
import { Observable } from "rxjs";

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css'],
})
export class MenuItemComponent extends HmbrgrBaseComponent {
  @Input() MenuList: Menu
  storeStelectProduct: Observable<Product[]>;
  public selectProduct: Product[];
  closeResult = '';

  constructor(private store: Store<AppState>, private modalService: NgbModal) {
    super();

  }
  SetProduct(product: Product, content: any) {
    this.store.dispatch(new AddProductAction(product));
    this.storeStelectProduct = this.store.select("product");
    this.storeStelectProduct.subscribe((productData) => this.selectProduct = productData);
    console.log(this.selectProduct[0]);
    if (this.selectProduct[0].SelectOption.length > 0) {
      this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'xl' }).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      })
    } else {
      // call new order service
    }

  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
