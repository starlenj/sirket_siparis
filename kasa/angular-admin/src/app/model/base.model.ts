
import { Injectable } from "@angular/core";
import { classToPlain } from "class-transformer";

export interface JSONObject {
  [key: string]: number | string | boolean | object | Blob;

}

@Injectable()
export abstract class AppBaseEntity {

  public toJSONObject (): JSONObject {
    const object: object = classToPlain(this);
    const returnValue: JSONObject = object as JSONObject;
    return returnValue;
  }

}
