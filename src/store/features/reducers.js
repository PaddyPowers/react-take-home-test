import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";
import HomePage from "./HomePage/reducers";

const rootReducer = combineReducers({
  HomePage,
  form: reduxFormReducer, // mounted under "form"
});
export default rootReducer;