import { combineReducers } from "../../node_modules/redux";
import generalReducer from "./generalReducer";
import usersReducer from "./usersReducer";
import adminReducer from "./adminReducer";
import errorReducer from "./errorReducer";
export default combineReducers({
  general: generalReducer,
  users: usersReducer,
  admin: adminReducer,
  error: errorReducer,
});
