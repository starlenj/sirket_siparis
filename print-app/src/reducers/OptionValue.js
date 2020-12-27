const initialState = { OptionValue: [] };
export default function (state = initialState, action) {
  switch (action.type) {
    case "SET_OPTIONVALUE":
      return {
        ...state,
        OptionValue: action.payload,
      };
    default:
      return state;
  }
}
