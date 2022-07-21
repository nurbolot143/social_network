import { ADD_MESSAGE, ADD_POST, DELETE_POST } from "./types";

export const addPost = (post) => ({ type: ADD_POST, post });

export const deletePost = (id) => ({ type: DELETE_POST, id });

export const addMessage = (message) => ({ type: ADD_MESSAGE, message });
