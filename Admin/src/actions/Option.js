export function SetOption(Option) {
  return (dispatch) => {
    dispatch({
      type: "SET_OPTION",
      payload: Option,
    });
  };
}
