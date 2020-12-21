export function SetUser(User) {
    return (dispatch) => {
        dispatch({
            type: "SET_User",
            payload: User,
        });
    };
}
