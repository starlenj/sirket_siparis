import { Component, OnInit, ViewChild } from '@angular/core';
import {BreakpointObserver } from "@angular/cdk/layout";
import { BaseComponent } from 'src/app/base/component/base.component';
@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent extends BaseComponent {


   constructor() {
     super();
    }

   ngAfterViewInit() {
   }

}
