import { Injectable } from "@angular/core";
@Injectable()
export class AppActiveUserModel  {


  [key: string]: number | string | boolean | object

  public email: string = "";

  public role:string = "";

  public id: number = 0;


}
