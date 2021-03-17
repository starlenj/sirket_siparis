import { Component } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable} from 'rxjs';
import { map} from 'rxjs/operators';
import { Product } from './core/models/product/product.model';

interface Response {
  Products:Product[]
}

const GET_PRODUCT= gql`
query {
  Products {
    id
    CategoryId
    Category {
      Name
    }
    Price
    Name
    YemekSepetiPrice
  }
}

`;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private apollo:Apollo){}
  products$ :Observable<Product[]>
  ngOnInit():void{
    this.products$= this.apollo.watchQuery<Response>({
      query :GET_PRODUCT,
    }).valueChanges.pipe(map(result => result.data.Products));
  }
}
