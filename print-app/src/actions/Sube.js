export function SetSube(Sube) {
    return (dispatch) => {
        dispatch({
            type: "SET_SUBE",
            payload: Sube,
        });
    };
}
