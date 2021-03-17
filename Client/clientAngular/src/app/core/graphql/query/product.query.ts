import { gql } from "apollo-angular";

export const GetAllProductInfo = gql`
query($CategoryType:String!) {
  GetMenu(CategoryType:$CategoryType) {
    Name
    id
    Order
    Products {
      Name
      Info
      Price
     YemekSepetiPrice
      id
      Order
      Picture
      SelectOption {
        Options {
          Name
          MaxQuantity
          MinQuantity
          Order
          SelectType
          id
          IsRequired
          OptionValues {
            Name
            id
            Price
            Order
          }
        }
      }
    }
  }
}
`;
