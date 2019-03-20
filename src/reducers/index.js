import { combineReducers } from "redux";
import gifReceiver from "./gifReceiver";
import gifListReceiver from "./gifListReceiver";
import buttonText from "./slotButton";
import bool from "./bool";
import tweetData from './tweet';
import shareTwitter from './shareTwitter';

export default combineReducers({ gifReceiver, buttonText, bool, tweetData, shareTwitter, gifListReceiver });
