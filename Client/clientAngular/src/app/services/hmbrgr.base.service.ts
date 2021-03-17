import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
@Injectable()
export class HmbrgrBaseService {

  public constructor(public ApolloService :Apollo){}


}
