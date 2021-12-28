import { Injectable } from "@angular/core";
import { AppBaseEntity } from "./base.model";
@Injectable()
export class AppFormModel extends AppBaseEntity {


  [key: string]: number | string | boolean | object

  public name: string = "";

  public fields: string = "";

  public mode: string = "";

}
