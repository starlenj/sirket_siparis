import { Injectable } from "@angular/core";
import { Apollo } from "apollo-angular";
import { GetAllProductInfo } from "../core/graphql/query/product.query";
import { HmbrgrBaseService } from "./hmbrgr.base.service";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import { IProductResponse } from "../core/models/product/api.response.model";
import { IMenuResponse } from "../core/models/api.menu.models";

@Injectable({
  providedIn: 'root'
})
export class HmbrgrProductService extends HmbrgrBaseService {


/**
 * @params ApolloService {Apollo}
 */
  public constructor(public ApolloService:Apollo){
    super(ApolloService);
  }
  /**
   * Get Product List
   * @return {IMenuResponse}
   * @params MenuType {string}
   */
  public  GetProductList(MenuType:string): Observable<IMenuResponse>{
      return this.ApolloService.watchQuery<IMenuResponse>({
        query:GetAllProductInfo,
        variables :{CategoryType:MenuType}
      }).valueChanges.pipe(map((response)=>{
        return response.data
      }));

    }
}
