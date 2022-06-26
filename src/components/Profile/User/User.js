import React from "react";

import s from "./User.module.scss";

const User = () => {
  return (
    <div className={s.user}>
      <div className={s.avatar}>
        <img
          src="https://images.theconversation.com/files/443350/original/file-20220131-15-1ndq1m6.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C3354%2C2464&q=45&auto=format&w=926&fit=clip"
          alt="Avatar"
        />
      </div>

      <div className={s.descr}>
        <h3 className={s.name}>Nurbolot B.</h3>

        <p className={s.text}>Date of birth: 2nd january</p>
        <p className={s.text}>City: Bishkek</p>
        <p className={s.text}>
          Web Site: <a href="#">nurbolot123.github.io</a>
        </p>
      </div>
    </div>
  );
};

export default User;
