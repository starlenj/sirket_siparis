const initialState = { Option: [] };
export default function (state = initialState, action) {
  switch (action.type) {
    case "SET_OPTION":
      return {
        ...state,
        Option: action.payload,
      };
    default:
      return state;
  }
}
