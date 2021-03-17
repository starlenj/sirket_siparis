import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuIndexComponent } from './menu/menu-index/menu-index.component';
import { MenuModule } from './menu/menu.module';

const routes: Routes = [
 {
  loadChildren: (): Promise<MenuModule> =>
  import('./menu/menu.module').then(
    (m) => m.MenuModule
  ),
    path: ""
 }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
