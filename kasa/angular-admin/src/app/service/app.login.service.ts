import { Observable } from "rxjs";
import { AppConfig } from "../base/enum/app.config.enum";
import { AppUrl } from "../base/enum/app.url.enum";
import { AppHttpResponse } from "../base/model/app.response.http.model";
import { AppBaseService } from "../base/service/app.base.service";
import { LoginModel } from "../model/auth.model";

export class AppLoginService extends AppBaseService {

  public login (login: LoginModel): Observable<AppHttpResponse> {
    return this.postRequest(AppUrl.LOGIN_URL, login);
  }
  public checkToken(): Observable<AppHttpResponse> {
    return this.postRequest(AppUrl.CHECK_TOKEN, {token: this.getLocalStorage(AppConfig.AUTH_TOKEN)});
   }
}
