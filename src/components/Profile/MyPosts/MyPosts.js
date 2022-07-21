import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../../../redux/actions";

import Post from "../Post/Post";

import s from "./MyPosts.module.scss";

const MyPosts = () => {
  const [textValue, setTextValue] = useState("");

  const posts = useSelector((state) => {
    const { postsReducer } = state;

    return postsReducer.posts;
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!textValue.trim().length > 0) return;

    dispatch(addPost(textValue));
    setTextValue("");
  };

  return (
    <div>
      <h2 className={s.title}>My posts</h2>

      <form className={s.form} onSubmit={handleSubmit}>
        <textarea
          rows="5"
          value={textValue}
          placeholder="Your news..."
          onChange={(e) => setTextValue(e.target.value)}
        />
        <button type="submit">send</button>
      </form>

      <ul className={s.list}>
        {posts.map(({ id, avatar, message }) => {
          return <Post id={id} key={id} avatar={avatar} message={message} />;
        })}
      </ul>
    </div>
  );
};

export default MyPosts;
