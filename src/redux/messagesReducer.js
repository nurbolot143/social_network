import { nanoid } from "nanoid";

import { ADD_MESSAGE } from "./types";

const initialState = {
  messages: [
    { id: 0, message: "Hi Robert.", isMy: false },
    { id: 1, message: "Hi", isMy: true },
    { id: 2, message: "What are you doing?", isMy: false },
    { id: 3, message: "I practice", isMy: true },
    {
      id: 4,
      message:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis possimus modi corruptcupiditate magni harum, veritatis dolor ex, fuga dicta debitis? Impedit a dicta eos uvoluptate nisi alias illum!",
      isMy: true,
    },
    {
      id: 5,
      message:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis possimus modi corruptcupiditate magni harum, veritatis dolor ex, fuga dicta debitis? Impedit a dicta eos uvoluptate nisi alias illum!",
      isMy: false,
    },
  ],
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: nanoid(),
            message: action.message,
            isMy: true,
          },
        ],
      };
    default:
      return state;
  }
};
