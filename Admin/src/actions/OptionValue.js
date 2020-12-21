export function SetOptionValue(OptionValue) {
  return (dispatch) => {
    dispatch({
      type: "SET_OPTIONVALUE",
      payload: OptionValue,
    });
  };
}
