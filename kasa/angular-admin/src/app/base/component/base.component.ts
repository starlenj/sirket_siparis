import { Injectable } from "@angular/core";
import { AppLoginService } from "src/app/service/app.login.service";
import { AppActiveUserModel } from "../model/app.active.user.model";
import { AppBaseService } from "../service/app.base.service";

@Injectable()

export class BaseComponent {

  constructor(private loginService: AppLoginService) { }

  public getActiveUserInfo(): AppActiveUserModel {
    const activeUser: AppActiveUserModel = new AppActiveUserModel();
    this.loginService.checkToken().subscribe((response) => {
      activeUser.email = response.data.email;
      activeUser.id = response.data.id;
      activeUser.role = response.data.role;
    });
    return activeUser;
  }

}
