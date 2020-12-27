const initialState = { Personel: [] };
export default function (state = initialState, action) {
  switch (action.type) {
    case "SET_PERSONEL":
      return {
        ...state,
        Personel: action.payload,
      };
    default:
      return state;
  }
}
