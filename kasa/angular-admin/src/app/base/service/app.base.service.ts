import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AppBaseHttpService } from "../app.base.http.service";
import { AppConfig } from "../enum/app.config.enum";
import { AppUrl } from "../enum/app.url.enum";
import { AppHttpResponse } from "../model/app.response.http.model";
import { isDevMode } from '@angular/core';

@Injectable()
export class AppBaseService  {

    constructor(private appService: AppBaseHttpService) {}

    public getRequest(url: AppUrl): Observable<AppHttpResponse>{
       return this.appService.getRequest(url);
    }
    public postRequest(url: AppUrl, data: any): Observable<AppHttpResponse> {
      return this.appService.postRequest(url, data);
    }
    public getLocalStorage(config: AppConfig) : string | null {
      return window.localStorage.getItem(config.toString());
    }
    public setLocalStorage(config: AppConfig, value: string): void {
      return window.localStorage.setItem(config.toString(), value);
    }
    public log(header: string, value: any, className: string = "", functionName: string =  "") {
      if (isDevMode()) {
        console.log(` Date - ${new Date()}, Class: ${className} functionName: ${functionName}  header: ${header} `, value);
      }

    }
}
