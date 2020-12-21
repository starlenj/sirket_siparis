const initialState = { Product: [] };
export default function (state = initialState, action) {
  switch (action.type) {
    case "SET_PRODUCT":
      return {
        ...state,
        Product: action.payload,
      };
    default:
      return state;
  }
}
