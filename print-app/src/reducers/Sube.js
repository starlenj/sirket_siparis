const initialState = { Sube: [] };
export default function (state = initialState, action) {
    switch (action.type) {
        case "SET_SUBE":
            return {
                ...state,
                Sube: action.payload,
            };
        default:
            return state;
    }
}
