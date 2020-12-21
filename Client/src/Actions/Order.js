export function SetQuantity(Quantity) {
  return (dispatch) => {
    dispatch({
      type: "SET_QUANTITY",
      payload: Quantity,
    });
  };
}
