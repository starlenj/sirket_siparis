import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuIndexComponent } from './menu-index/menu-index.component';
import { MenuModuleRoute } from './menu.module.route';
import { ComponentModule } from '../component/component.module';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { OrderDataPipe } from '../core/app-pipes/order.data.pipe';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { OrderModule } from '../order/order.module';
import { AppPipesModule } from '../core/app-pipes/app-pipes.module';
@NgModule({
  declarations: [MenuIndexComponent, MenuItemComponent],
  imports: [
    CommonModule,
    MenuModuleRoute,
    ComponentModule,
    NgbModalModule,
    OrderModule,
    AppPipesModule
  ],
  exports: [MenuIndexComponent]
})
export class MenuModule { }
