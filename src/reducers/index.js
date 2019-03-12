import { combineReducers } from "redux";
import gifReceiver from "./gifReceiver";
import buttonText from "./slotButton";
import bool from "./bool";
import tweetData from './tweet';

export default combineReducers({ gifReceiver, buttonText, bool, tweetData });
