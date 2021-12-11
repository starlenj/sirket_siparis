import { Component, OnInit, ViewChild } from '@angular/core';
import {BreakpointObserver } from "@angular/cdk/layout";
import { BaseComponent } from 'src/app/base/component/base.component';
import { AppLoginService } from 'src/app/service/app.login.service';
import { AppActiveUserModel } from 'src/app/base/model/app.active.user.model';
@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent extends BaseComponent implements OnInit {

  public activeUser: AppActiveUserModel = new AppActiveUserModel();

   constructor(private loginServices : AppLoginService) {
     super(loginServices);
    }

   ngOnInit(): void {
    this.activeUser = this.getActiveUserInfo();
   }
}
