const initializeState = { Product: [] };
export default function (state = initializeState, action) {
  switch (action.type) {
    case "SET_PRODUCT":
      return {
        ...state,
        Product: action.payload
      };
    default:
      return state;
  }
}
