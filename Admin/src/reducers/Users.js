const initialState = { User: [] };
export default function (state = initialState, action) {
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                User: action.payload,
            };
        default:
            return state;
    }
}
