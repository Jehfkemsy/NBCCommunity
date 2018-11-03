import { combineReducers } from "redux";
import AuthR from "./AuthR";
import ContentR from './ContentR'
import ResponseR from './ResponseR'


const RootR = combineReducers({
  AuthR,
  ContentR,
  ResponseR
});

export default RootR;
