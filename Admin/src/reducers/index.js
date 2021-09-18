import { combineReducers } from "redux";

import Option from "./Option.js";
import OptionValue from "./OptionValue.js";
import Product from "./Product.js";
import { reducer as formReducer } from "redux-form";

const Reducers = combineReducers({
  form: formReducer,
  Option,
  OptionValue,
  Product,
});
export default Reducers;
