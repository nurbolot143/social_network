import { nanoid } from "nanoid";

import { ADD_POST, DELETE_POST } from "./types";

const initialState = {
  posts: [
    {
      id: 0,
      message: "Hey, how are you?",
      avatar:
        "https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1394x454:1396x452)/origin-imgresizer.eurosport.com/2021/11/18/3256044-66638148-2560-1440.jpg",
    },
    {
      id: 1,
      message: "Hey, how are you?",
      avatar:
        "https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1394x454:1396x452)/origin-imgresizer.eurosport.com/2021/11/18/3256044-66638148-2560-1440.jpg",
    },
    {
      id: 2,
      message: "Hey, how are you?",
      avatar:
        "https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1394x454:1396x452)/origin-imgresizer.eurosport.com/2021/11/18/3256044-66638148-2560-1440.jpg",
    },
  ],
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: nanoid(),
            message: action.post,
            avatar:
              "https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1394x454:1396x452)/origin-imgresizer.eurosport.com/2021/11/18/3256044-66638148-2560-1440.jpg",
          },
        ],
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((item) => item.id !== action.id),
      };
    default:
      return state;
  }
};
