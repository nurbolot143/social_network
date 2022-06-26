import React from "react";
import { NavLink } from "react-router-dom";

import s from "./Dialog.module.scss";

const Dialog = ({ id, avatar, name }) => {
  return (
    <li className={s.item}>
      <NavLink
        to={`${id}`}
        className={({ isActive }) =>
          `${s.link}` + (isActive ? ` ${s.active}` : "")
        }
      >
        <div className={s.avatar}>
          <img src={avatar} alt={name} />
        </div>
        <div className={s.name}>{name}</div>
      </NavLink>
    </li>
  );
};

export default Dialog;
