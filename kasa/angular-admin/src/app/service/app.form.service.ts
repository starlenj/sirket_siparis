import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AppUrl } from "../base/enum/app.url.enum";
import { AppHttpResponse } from "../base/model/app.response.http.model";
import { AppBaseService } from "../base/service/app.base.service";
import { AppFormModel } from "../model/form.model";

@Injectable()
export class AppFormService extends AppBaseService {
  public create(FormData: AppFormModel): Observable<AppHttpResponse> {
    return this.postRequest(AppUrl.CREATE_FORM_WS, FormData);
  }
  public getData(name: string): Observable<AppHttpResponse> {
    return this.getRequest(AppUrl.CREATE_FORM_WS, name);
   }

}
