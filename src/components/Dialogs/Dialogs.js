import React, { createRef, useEffect, useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import { useDispatch, useSelector } from "react-redux/es/exports";

import Dialog from "./Dialog/Dialog";

import s from "./Dialogs.module.scss";
import { addMessage } from "../../redux/actions";

const Dialogs = () => {
  const [textValue, setTextValue] = useState("");
  const wrapperRef = createRef();

  const data = useSelector((state) => {
    const { dialogsReducer, messagesReducer } = state;

    return {
      dialogs: dialogsReducer.dialogs,
      messages: messagesReducer.messages,
    };
  });

  const dispatch = useDispatch();

  const scrollToBottom = () => {
    wrapperRef.current.scrollTo(0, wrapperRef.current.scrollHeight);
  };

  useEffect(() => {
    scrollToBottom();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!textValue.trim().length > 0) return;

    dispatch(addMessage(textValue));

    setTextValue("");
    scrollToBottom();
  };

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
            <div ref={wrapperRef} className={s.chat_wrapper}>
              <ul className={s.chat_list}>
                {data.messages.map(({ id, message, isMy }) => {
                  return (
                    <li
                      key={id}
                      className={
                        `${s.item} ` + (isMy ? `${s.my}` : `${s.notMy}`)
                      }
                    >
                      <p>{message}</p>
                    </li>
                  );
                })}
              </ul>
            </div>

            <form className={s.form} onSubmit={handleSubmit}>
              <textarea
                rows="1"
                value={textValue}
                placeholder="Message"
                onChange={(e) => setTextValue(e.target.value)}
              />
              <button type="submit">
                <SendIcon
                  color="inherit"
                  sx={{
                    fontSize: 25,
                    transform: "translateX(2px);",
                  }}
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dialogs;
