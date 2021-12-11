import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/base/component/base.component';
import { AppActiveUserModel } from 'src/app/base/model/app.active.user.model';
import { AppLoginService } from 'src/app/service/app.login.service';

@Component({
  selector: 'app-app-sidebar',
  templateUrl: './app-sidebar.component.html',
  styleUrls: ['./app-sidebar.component.css']
})
export class AppSidebarComponent extends BaseComponent implements OnInit {

  public activeUser: AppActiveUserModel = new AppActiveUserModel();

   constructor(private loginServices : AppLoginService) {
     super(loginServices);
    }

   ngOnInit(): void {
    this.activeUser = this.getActiveUserInfo();
   }

}
