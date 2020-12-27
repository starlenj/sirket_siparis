export function SetProduct(Product) {
  return (dispatch) => {
    dispatch({
      type: "SET_PRODUCT",
      payload: Product,
    });
  };
}
