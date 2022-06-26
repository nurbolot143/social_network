import React from "react";

import s from "./Post.module.scss";

const Post = ({ avatar, message }) => {
  return (
    <li className={s.item}>
      <div className={s.avatar}>
        <img src={avatar} alt="avatar" />
      </div>
      <p className={s.message}>{message}</p>
    </li>
  );
};

export default Post;
