const initializeState = {
  Quantity: 1,
  Price: 0,
  Options: [],
  EkmekOption: [],
  IcecekOption: [],
  ExtraOptions: [],
  EkOptions: [],
  ServicePrice: 0,
  ExtraPrice: 0,
  ExtraIcecek: 0
};
export default function (state = initializeState, action) {
  switch (action.type) {
    case "SET_QUANTITY":
      return {
        ...state,
        Quantity: state.Quantity + 1
      };
    case "UNSET_QUANTITY":
      if (state.Quantity === 1) return { ...state };
      return {
        ...state,
        Quantity: state.Quantity - 1
      };
    case "SET_EXTRA_OPTIONS":
      return {
        ...state,
        ExtraOptions: action.payload
      };
    case "SET_EK_OPTIONS":
      return {
        ...state,
        EkOptions: action.payload
      };
    case "SET_EXTRA":
      return {
        ...state,
        ExtraPrice: parseFloat(action.payload.Price)
      };
    case "SET_ICECEK_EXTRA":
      return {
        ...state,
        ExtraIcecek: parseFloat(action.payload.Price)
      };
    case "SET_OPTIONS":
      return {
        ...state,
        Options: [...state.Options, action.payload[0]]
      };
    case "SET_EKMEK":
      return {
        ...state,
        EkmekOption: action.payload
      };
    case "SET_ICECEK":
      return {
        ...state,
        IcecekOption: action.payload
      };
    case "SET_DEFAULT":
      return (state = initializeState);
    default:
      return state;
  }
}
