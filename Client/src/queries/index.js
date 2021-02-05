const { gql } = require("apollo-boost");

export const CREATE_USER = gql`
  mutation($username: String!, $password: String!) {
    createUser(data: { username: $username, password: $password }) {
      token
    }
  }
`;

export const SIGNIN_USER = gql`
  mutation($Email: String!, $Password: String!) {
    SingInCustomer(data: { Email: $Email, Password: $Password }) {
      token
    }
  }
`;

export const GET_ACTIVE_USER = gql`
  query {
    ActiveUser {
      Email
      id
    }
  }
`;

export const GET_PRODUCTS = gql`
  query {
    Products {
      id
      Category {
        Name
      }
      Name
      Info
      Price
      Picture
      Order
      SelectOption {
        Options {
          Name
          MaxQuantity
          MinQuantity
          Order
          OptionValues {
            Name
            Price
          }
        }
      }
    }
  }
`;

export const GET_CATEGORYS = gql`
  query {
    Categorys {
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
            OptionValues {
              Name
              id
              Price
            }
          }
        }
      }
    }
  }
`;

export const GET_MENU = gql`
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
            OptionValues {
              Name
              id
              Price
            }
          }
        }
      }
    }
  }
`;

export const CREATE_ORDER_HEADER = gql`
  mutation(
    $PaymentType: String!
    $OrderType: String!
    $CustomerId: String!
    $SubeId: String!
    $Note: String!
    $Discount: Float!
    $ServicePrice: Float!
    $OrderChannel: String!
    $CustomerName: String!
    $Phone: String!
    $Plaka: String
    $Aciklama: String
  ) {
    CreateOrderHeader(
      data: {
        PaymentType: $PaymentType
        OrderType: $OrderType
        CustomerId: $CustomerId
        SubeId: $SubeId
        Note: $Note
        Discount: $Discount
        ServicePrice: $ServicePrice
        OrderChannel: $OrderChannel
        CustomerName: $CustomerName
        Phone: $Phone
        Plaka: $Plaka
        Aciklama: $Aciklama
      }
    ) {
      id
    }
  }
`;

export const CREATE_ORDER_BODY = gql`
  mutation(
    $ProductId: String!
    $Quantity: Int!
    $Price: Float!
    $OrderHeaderId: String!
  ) {
    CreateOrder(
      data: {
        ProductId: $ProductId
        Quantity: $Quantity
        Price: $Price
        OrderHeaderId: $OrderHeaderId
      }
    ) {
      id
    }
  }
`;

export const CREATE_SELECT_ORDER_OPTIONS = gql`
  mutation($OrderBodyId: String!, $OptionsId: String!) {
    CreateSelectOrderOptions(
      data: { OrderBodyId: $OrderBodyId, OptionsId: $OptionsId }
    ) {
      id
    }
  }
`;
export const GET_PRODUCT = gql`
query($id :String!) {
 Product(id: $id) {
    Name
    Info
    id
    Price
    Order
    Picture
    Category {
      Name
      id
    }
    SelectOption {
      Options {
        Name
        MaxQuantity
        MinQuantity
        Order
        SelectType
        id
        OptionValues {
          Name
          id
          Price
        }
      }
    }
  }
}


`;