import React from "react";
import Dialog from "./Dialog/Dialog";

import s from "./Dialogs.module.scss";

const Dialogs = ({ data }) => {
  return (
    <>
      <div className="container_large">
        <div className={s.wrapper}>
          <div className={s.dialogs}>
            <h2 className={s.title}>Dialogs</h2>

            <ul className={s.list}>
              {data.dialogs.map(({ id, avatar, name }) => {
                return <Dialog key={id} id={id} avatar={avatar} name={name} />;
              })}
            </ul>
          </div>

          <div className={s.chat}>
            <ul className={s.chat_list}>
              {data.messages.map(({ id, message, isMy }) => {
                return (
                  <li
                    key={id}
                    className={`${s.item} ` + (isMy ? `${s.my}` : `${s.notMy}`)}
                  >
                    {message}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dialogs;
