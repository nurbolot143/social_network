import { combineReducers } from "redux";

import { postsReducer } from "./postsReducer";
import { dialogsReducer } from "./dialogsReducer";
import { messagesReducer } from "./messagesReducer";

export const rootReducer = combineReducers({
  postsReducer,
  dialogsReducer,
  messagesReducer,
});
