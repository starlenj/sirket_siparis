import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YeniSiparisComponent } from './yeni-siparis/yeni-siparis.component';
import { RouterModule } from '@angular/router';
import { SiparisListComponent } from './siparis-list/siparis-list.component';



@NgModule({
  declarations: [
    YeniSiparisComponent,
    SiparisListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: "yeni-siparis", component: YeniSiparisComponent },{ path: "", component: SiparisListComponent }]),
  ]
})
export class SiparisModule { }
