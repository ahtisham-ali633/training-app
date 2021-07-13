import { combineReducers } from "redux";
import peopleReducer from "./peopleReducer";
import modalReducer from "./modalReducer";

const rootReducer = combineReducers({
  peopleReducer: peopleReducer,
  modalReducer: modalReducer
});


export default rootReducer