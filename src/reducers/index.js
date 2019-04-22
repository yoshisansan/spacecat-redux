import { combineReducers } from "redux";
import gifListReceiver from "./gifListReceiver";
import buttonText from "./slotButton";
import bool from "./bool";
import tweetData from './tweet';
import shareTwitter from './shareTwitter';
import preloadingBool from './preloadingBool';
import makeTag from './makeTag';

export default combineReducers({ buttonText, bool, tweetData, shareTwitter, gifListReceiver, preloadingBool, makeTag });
