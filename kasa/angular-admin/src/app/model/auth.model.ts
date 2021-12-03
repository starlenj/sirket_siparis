import { Injectable } from "@angular/core";
import { AppBaseEntity } from "./base.model";
@Injectable()
export class AuthModel extends AppBaseEntity {


  [key: string]: number | string | boolean | object

  public email: string = "";

  public password: string = "";

}
