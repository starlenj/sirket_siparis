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
        path :"form",
        loadChildren: () => import("../app/form-config/form-config.module").then(m => m.FormConfigModule)
      }
    ]
  },
  {
    path : "",
    canActivate :[AuthGuard],
    children: [
      {
        path :"grid",
        loadChildren: () => import("../app/grid-config/grid-config.module").then(m => m.GridConfigModule)
      }
    ]
  },
  {
    path : "",
    canActivate :[AuthGuard],
    children: [
      {
        path :"sube",
        loadChildren: () => import("../app/sube/sube.module").then(m => m.SubeModule)
      }
    ]
  },
  {
    path : "",
    canActivate :[AuthGuard],
    children: [
      {
        path :"siparis",
        loadChildren: () => import("../app/siparis/siparis.module").then(m => m.SiparisModule)
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
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: "enabled"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
