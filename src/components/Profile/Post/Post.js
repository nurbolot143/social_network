import React from "react";
import { useDispatch } from "react-redux";

import { deletePost } from "../../../redux/actions";

import s from "./Post.module.scss";

const Post = ({ avatar, message, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deletePost(id));
  };

  return (
    <li className={s.item} onClick={handleDelete}>
      <div className={s.avatar}>
        <img src={avatar} alt="avatar" />
      </div>
      <p className={s.message}>{message}</p>
    </li>
  );
};

export default Post;
