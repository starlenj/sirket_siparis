export function SetPersonel(Personel) {
  return (dispatch) => {
    dispatch({
      type: "SET_PERSONEL",
      payload: Personel,
    });
  };
}
