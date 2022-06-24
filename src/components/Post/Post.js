import React from "react";

import s from "./Post.module.scss";

const Post = ({ message }) => {
  return (
    <li className={s.item}>
      <div className={s.avatar}>
        <img
          src="https://images.theconversation.com/files/443350/original/file-20220131-15-1ndq1m6.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C3354%2C2464&q=45&auto=format&w=926&fit=clip"
          alt="avatar"
        />
      </div>
      <p className={s.message}>{message}</p>
    </li>
  );
};

export default Post;
