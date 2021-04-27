const { gql } = require("apollo-boost");
export const DELETE_SUBE_SERVIS = gql`
  mutation($id: String!) {
    DeleteSubeServis(data: { id: $id }) {
      id
    }
  }
`;
export const GET_SUBE_SERVIS = gql`
  query($SubeId: String!) {
    SubeServis(SubeId: $SubeId) {
      Name
      id
      Sube {
        Name
      }
    }
  }
`;
export const CREATE_USER = gql`
  mutation(
    $Email: String!
    $Name: String!
    $Password: String!
    $Sube: String!
  ) {
    CreateUser(
      data: { Email: $Email, Password: $Password, Name: $Name, Sube: $Sube }
    ) {
      token
    }
  }
`;

export const SIGNIN_USER = gql`
  mutation($Email: String!, $Password: String!) {
    SignIn(data: { Email: $Email, Password: $Password }) {
      token
    }
  }
`;

export const GET_ACTIVE_USER = gql`
  query {
    ActiveUser {
      Email
      id
      Sube
    }
  }
`;

export const GET_ORDERS = gql`
  query {
    Orders {
      Note
      SubeId
      Date
      OrderStatus
      PaymentType
      Phone
      CustomerName
      Order {
        id
        Product {
          Name
        }
        SelectOrderOption {
          OrderOptions {
            Name
          }
        }
        Price
        Quantity
      }
    }
  }
`;
export const GET_ONAYSIZ_ORDERS = gql`
  query($SubeId: String!) {
    OnaysizOrders(SubeId: $SubeId) {
      Note
      id
      SubeId
      Date
      OrderStatus
      PaymentType
      Phone
      CustomerName
      Plaka
      OrderType
      OrderChannel
      Aciklama
    }
  }
`;

export const GET_ONAYLI_ORDERS = gql`
  query($SubeId: String!) {
    OnayliOrders(SubeId: $SubeId) {
      Note
      id
      SubeId
      Date
      OrderStatus
      PaymentType
      Phone
      CustomerName
      Plaka
      OrderType
      OrderChannel
      Aciklama
    }
  }
`;

export const GET_ADDED_ORDERS = gql`
  subscription($SubeId: String!) {
    OrderAdded(SubeId: $SubeId) {
      Note
      SubeId
      Date
      OrderStatus
      PaymentType
      Phone
      CustomerName
      id
    }
  }
`;

export const GET_ORDER_DETAILS = gql`
  query($id: String!) {
    Order(id: $id) {
      PaymentType
      OrderStatus
      Phone
      CustomerName
      Plaka
      Aciklama
      OrderType
      OrderChannel
      Note
      Order {
        id
        OrderHeaderId
        Price
        Quantity
        Product {
          Name
          Info
          Price
        }
        SelectOrderOption {
          OptionsId
          OrderOptions {
            Name
            Price
          }
        }
      }
    }
  }
`;
///CATEGORY
export const GET_CATEGORYS = gql`
  query {
    Categorys {
      id
      Name
      Order
      CategoryType
    }
  }
`;

export const CREATE_CATEGORY = gql`
  mutation($Name: String!, $Order: Int!, $CategoryType: String!) {
    CreateCategory(
      data: { Name: $Name, CategoryType: $CategoryType, Order: $Order }
    ) {
      id
      Name
      Order
      CategoryType
    }
  }
`;
export const UPDATE_CATEGORY = gql`
  mutation($Name: String!, $id: String!, $CategoryType: String!, $Order: Int!) {
    UpdateCategory(
      data: { id: $id, Name: $Name, CategoryType: $CategoryType, Order: $Order }
    ) {
      id
      Name
    }
  }
`;
export const DELETE_CATEGORY = gql`
  mutation($id: String!) {
    DeleteCategory(data: { id: $id }) {
      id
      Name
    }
  }
`;

//OPTİONS
export const GET_OPTIONS = gql`
  query {
    Options {
      Name
      id
      MinQuantity
      MaxQuantity
      IsRequired
      SelectType
    }
  }
`;

export const CREATE_OPTIONS = gql`
  mutation(
    $Name: String!
    $MinQuantity: Int
    $MaxQuantity: Int
    $IsRequired: Boolean!
    $SelectType: String!
    $Order: Int
  ) {
    CreateOption(
      data: {
        Name: $Name
        MinQuantity: $MinQuantity
        MaxQuantity: $MaxQuantity
        IsRequired: $IsRequired
        SelectType: $SelectType
        Order: $Order
      }
    ) {
      id
    }
  }
`;
export const UPDATE_OPTIONS = gql`
  mutation(
    $id: ID!
    $Name: String!
    $MinQuantity: Int
    $MaxQuantity: Int
    $IsRequired: Boolean!
    $SelectType: String!
    $Order: Int
  ) {
    UpdateOption(
      data: {
        id: $id
        Order: $Order
        Name: $Name
        MinQuantity: $MinQuantity
        MaxQuantity: $MaxQuantity
        IsRequired: $IsRequired
        SelectType: $SelectType
      }
    ) {
      id
    }
  }
`;

export const DELETE_OPTIONS = gql`
  mutation($id: ID!) {
    DeleteOption(data: { id: $id }) {
      id
    }
  }
`;

export const GET_USERS = gql`
  query {
    Users {
      id
      Email
      Name
      Sube
      UserPermissions {
        Name
        id
      }
    }
  }
`;
export const UPDATE_USER = gql`
  mutation($id: String!, $Name: String!, $Email: String!, $Sube: String!) {
    UpdateUser(data: { Name: $Name, Email: $Email, id: $id, Sube: $Sube }) {
      Email
      Name
    }
  }
`;
export const DELETE_USER = gql`
  mutation($id: String!) {
    DeleteUser(data: { id: $id }) {
      id
    }
  }
`;

export const GET_USER = gql`
  query($id: String!) {
    User(id: $id) {
      id
      Name
      UserPermissions {
        Name
        id
      }
    }
  }
`;

export const GET_PRODUCTS = gql`
  query {
    Products {
      id
      Category {
        Name
        id
        CategoryType
      }
      Name
      Info
      Price
      YemekSepetiPrice
      Picture
      Order
      SelectOption {
        Options {
          id
          Name
          MaxQuantity
          MinQuantity
          Order
          OptionValues {
            Name
            id
            Price
          }
        }
        id
      }
    }
  }
`;
export const CREATE_PRODUCT = gql`
  mutation(
    $CategoryId: String!
    $Name: String!
    $Info: String!
    $Price: Float!
    $YemekSepetiPrice: Float!
    $Picture: String
    $Status: Int!
  ) {
    CreateProduct(
      data: {
        CategoryId: $CategoryId
        Name: $Name
        Info: $Info
        Price: $Price
        YemekSepetiPrice: $YemekSepetiPrice
        Picture: $Picture
        Status: $Status
      }
    ) {
      id
    }
  }
`;
export const UPDATE_PRODUCT = gql`
  mutation(
    $CategoryId: String!
    $Name: String!
    $Info: String!
    $Price: Float!
    $YemekSepetiPrice: Float!
    $Picture: String!
    $Status: Int!
    $id: String!
    $Order: Int
  ) {
    UpdateProduct(
      data: {
        CategoryId: $CategoryId
        Name: $Name
        Info: $Info
        Price: $Price
        YemekSepetiPrice: $YemekSepetiPrice
        Order: $Order
        Picture: $Picture
        Status: $Status
        id: $id
      }
    ) {
      id
    }
  }
`;

export const CREATE_SELECTOPTION = gql`
  mutation($ProductId: String!, $OptionsId: String!) {
    CreateSelectOption(data: { ProductId: $ProductId, OptionsId: $OptionsId }) {
      Options {
        id
      }
    }
  }
`;

export const GET_SELECTOPTONS = gql`
  query($ProductId: String!) {
    ProductSelectOption(ProductId: $ProductId) {
      id
      Options {
        Name
        Price
        OptionsCategory
        MinQuantity
        MaxQuantity
        IsRequired
      }
    }
  }
`;

export const DELETE_SELECTOPTIONS = gql`
  mutation($id: String!) {
    DeleteSelectOption(data: { id: $id }) {
      id
    }
  }
`;

export const GET_OPTIONSVALUE = gql`
  query($OptionsId: String!) {
    OptionValue(OptionsId: $OptionsId) {
      Name
      Order
      OptionsId
      Price
      id
    }
  }
`;

export const CREATE_OPTIONSVALUE = gql`
  mutation($Name: String!, $Price: Float!, $OptionsId: String!, $Order: Int!) {
    CreateOptionValue(
      data: { Order: $Order, Name: $Name, Price: $Price, OptionsId: $OptionsId }
    ) {
      id
    }
  }
`;

export const UPDATE_OPTIONSVALUE = gql`
  mutation($Name: String!, $Price: Float!, $id: String!, $Order: Int!) {
    UpdateOptionValue(
      data: { Name: $Name, Price: $Price, id: $id, Order: $Order }
    ) {
      id
    }
  }
`;

export const SIPARIS_ONAY = gql`
  mutation($id: String!) {
    SiparisOnay(data: { id: $id }) {
      id
    }
  }
`;
export const SIPARIS_REDDET = gql`
  mutation($id: String!, $OrderCancelInfo: String!) {
    SiparisReddet(data: { id: $id, OrderCancelInfo: $OrderCancelInfo }) {
      id
    }
  }
`;
export const GET_ODEME_ORDER = gql`
  query($PaymentType: String!) {
    OdemeOrders(PaymentType: $PaymentType) {
      Note
      id
      SubeId
      Date
      OrderStatus
      PaymentType
      Phone
      CustomerName
      Plaka
      OrderType
      OrderChannel
      Aciklama
    }
  }
`;
