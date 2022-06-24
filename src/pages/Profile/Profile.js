import React from "react";
import MyPosts from "../../components/MyPosts/MyPosts";
import User from "../../components/User/User";

import s from "./Profile.module.scss";

const Profile = () => {
  return (
    <>
      <div className={s.banner}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCZlf5lc5tX-0gY-y94pGS0mQdL-D0lCH2OQ&usqp=CAU"
          alt="banner"
        />
      </div>

      <div className="container">
        <User />
        <MyPosts />
      </div>
    </>
  );
};

export default Profile;
