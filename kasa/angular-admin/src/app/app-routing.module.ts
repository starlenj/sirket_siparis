import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './base/guards/auth.guard';

const routes: Routes = [
  {
    path : "",
    children : [
      {
        path : "auth",
        loadChildren : () => import("./auth/auth.module").then(m => m.AuthModule),
      }
    ]
  },
  {
    path : "",
    canActivate :[AuthGuard],
    children: [
      {
        path :"stok",
        loadChildren: () => import("../app/stok/stok.module").then(m => m.StokModule)
      }
    ]
  },
  {
    path : "",
    canActivate :[AuthGuard],
    children: [
      {
        path :"home",
        loadChildren: () => import("../app/home-page/home-page.module").then(m => m.HomePageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
