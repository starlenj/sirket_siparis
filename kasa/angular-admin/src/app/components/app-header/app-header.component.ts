import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {BreakpointObserver } from "@angular/cdk/layout";
@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent{

   @ViewChild(MatSidenav) sideNav! : MatSidenav;

   constructor(private observer: BreakpointObserver ){}

   ngAfterViewInit() {
   }

}
