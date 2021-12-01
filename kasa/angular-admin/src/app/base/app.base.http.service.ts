import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { AppUrl } from "./enum/app.url.enum";
import { AppHttpResponse } from "./model/app.response.http.model";

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

  constructor(private http: HttpClient) { }
  /**  base http get class */
  public getRequest(url: AppUrl): Observable<AppHttpResponse> {
    return new Observable(observable => {
      this.http.get<AppHttpResponse>(`${environment.BASE_URL}${url.toString()}`)
        .subscribe((response) => {
          if (!response.success) {
            if (response.errorMessage) {
              console.error("Http getRequest Error", response.errorMessage);
            }
          }
          if (response.success) {
            observable.next(response);
          }
          observable.complete();

        })
    });
  }

  /** base http post class */
  public postRequest(url: AppUrl, body: any): Observable<AppHttpResponse> {
    return new Observable(observable => {
      this.http.post<AppHttpResponse>(`${environment.BASE_URL}${url.toString()}`, body).subscribe((response) => {
        if (!response.success) {
          if (response.errorMessage) {
            console.error("Http postRequest Error", response.errorMessage);
          }
        }
        if (response.success) {
          observable.next(response);
        }
        observable.complete();
      });
    });
  }
}
