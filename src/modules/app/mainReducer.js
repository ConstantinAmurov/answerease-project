import { combineReducers } from "redux";
import loginReducer from "../Login/reducer";
import registerReducer from "../Register/reducer";
import notificationReducer from "components/Notifications/reducer";
import userReducer from "../Profile/reducer";
export const mainReducer = combineReducers({
  user: userReducer,
  login: loginReducer,
  register: registerReducer,
  notifications: notificationReducer
});
