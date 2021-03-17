
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuIndexComponent } from './menu-index/menu-index.component';



const routes: Routes = [
  {
    path: "",
    component: MenuIndexComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
/**
 * Routing Module for AuthModule
 */
export class MenuModuleRoute { }
