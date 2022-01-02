import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { observable, Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { AppUrl } from "./enum/app.url.enum";
import { AppHttpResponse } from "./model/app.response.http.model";

export interface RequestOptions {
  /** http headers for request */
  headers?: HttpHeaders;
  /** http observe option */
  observe?: "body";
  /** http params for request */
  params?: HttpParams;
  /** reportProgress optino for http request */
  reportProgress?: boolean;
  /** type of request for http request */
  responseType?: "json";
  /** credentials optino for http request */
  withCredentials?: boolean;
  /** body of http request */
  body?: string;
  /** report on error event  */
  noReportOnError?: boolean;
}

@Injectable({ providedIn: "root" })
export class AppBaseHttpService {
  /** http headers for request */
  headers?: HttpHeaders;
  /** http observe option */
  observe?: "body";
  /** http params for request */
  params?: HttpParams;
  /** reportProgress optino for http request */
  reportProgress?: boolean;
  /** type of request for http request */
  responseType?: "json";
  /** credentials optino for http request */
  withCredentials?: boolean;
  /** body of http request */
  body?: string;

  constructor(private http: HttpClient, private toastService: ToastrService, private router: Router) { }
  /**  base http get class */
  public getRequest(url: AppUrl, params? : string): Observable<AppHttpResponse> {
    return new Observable(observable => {
      this.http.get<AppHttpResponse>(`${environment.BASE_URL}${url.toString()}/${params}`, )
        .subscribe((response) => {
          if (!response.success) {
            if (response.message) {
              this.toastService.error(response.error?.message);
              observable.error(response);
              observable.complete();
            }
          }
          if (response.success) {
            observable.next(response);
            observable.complete();
          }
          observable.complete();
        }, (error) => {
          this.toastService.error(error.error?.message);
          observable.error(error)
          if (error.status === 401) {
            this.router.navigate(["auth"]);
          }
          observable.complete();
        });

    });
  }

  /** base http post class */
  public postRequest(url: AppUrl, body: any, options: RequestOptions = {}): Observable<any> {
    return new Observable((observable) => {
      const urlString: string = `${environment.BASE_URL}${url.toString()}`;
      this.http.post<AppHttpResponse>(urlString, body).subscribe((response) => {
          if (!response.success) {
            if (response.message) {
              this.toastService.error(response.error?.message);
              observable.error(response);
              observable.complete();
            }
          }
          if (response.success) {
            observable.next(response);
            observable.complete();
          }
          observable.complete();
      }, (error) => {
        this.toastService.error(error.error?.message);
        observable.error(error)
          if (error.status === 401) {
            this.router.navigate(["auth"]);
          }
        observable.complete();
      });
    });
  }
}
