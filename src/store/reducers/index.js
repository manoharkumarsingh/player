import { combineReducers } from "redux";
import Media from "./media";

const allReducers = combineReducers({
  Media: Media,
});

export default allReducers;
