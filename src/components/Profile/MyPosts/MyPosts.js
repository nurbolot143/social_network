import React from "react";
import Post from "../Post/Post";

import s from "./MyPosts.module.scss";

const MyPosts = ({ posts }) => {
  return (
    <div>
      <h2 className={s.title}>My posts</h2>

      <form className={s.form}>
        <textarea rows="5" placeholder="Your news..."></textarea>
        <button type="submit">send</button>
      </form>

      <ul className={s.list}>
        {posts.map(({ id, avatar, message }) => {
          return <Post key={id} avatar={avatar} message={message} />;
        })}
      </ul>
    </div>
  );
};

export default MyPosts;
