import React from "react";
import Post from "../Post/Post";

import s from "./MyPosts.module.scss";

const MyPosts = () => {
  return (
    <div>
      <h2 className={s.title}>My posts</h2>

      <form className={s.form}>
        <input type="text" placeholder="Your news..." />
        <button type="submit">send</button>
      </form>

      <ul className={s.list}>
        <Post message={"Hey, How are you?"} />
        <Post message={"Hey, What's app?"} />
        <Post message={"Hey, What are you doing?"} />
      </ul>
    </div>
  );
};

export default MyPosts;
