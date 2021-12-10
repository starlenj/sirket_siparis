import { Component, OnInit, ViewChild } from '@angular/core';
import {BreakpointObserver } from "@angular/cdk/layout";
@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent{


   constructor(private observer: BreakpointObserver ){}

   ngAfterViewInit() {
   }

}
