import React from "react";

import s from "./Dialogs.module.scss";

const Dialogs = () => {
  return (
    <>
      <div className="container">
        <div className={s.wrapper}>
          <div className={s.dialogs}>
            <h2 className={s.title}>Dialogs</h2>

            <ul className={s.list}>
              <li className={s.item}>
                <a href="#" className={s.link}>
                  <div className={s.avatar}>
                    <img
                      src="https://images.theconversation.com/files/443350/original/file-20220131-15-1ndq1m6.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C3354%2C2464&q=45&auto=format&w=926&fit=clip"
                      alt="avatar"
                    />
                  </div>
                  <div className={s.name}>Alex Maximov</div>
                </a>
              </li>
              <li className={`${s.item} ${s.active}`}>
                <a href="#" className={s.link}>
                  <div className={s.avatar}>
                    <img
                      src="https://images.theconversation.com/files/443350/original/file-20220131-15-1ndq1m6.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C3354%2C2464&q=45&auto=format&w=926&fit=clip"
                      alt="avatar"
                    />
                  </div>
                  <div className={s.name}>Alex Maximov</div>
                </a>
              </li>
              <li className={s.item}>
                <a href="#" className={s.link}>
                  <div className={s.avatar}>
                    <img
                      src="https://images.theconversation.com/files/443350/original/file-20220131-15-1ndq1m6.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C3354%2C2464&q=45&auto=format&w=926&fit=clip"
                      alt="avatar"
                    />
                  </div>
                  <div className={s.name}>Alex Maximov</div>
                </a>
              </li>
              <li className={s.item}>
                <a href="#" className={s.link}>
                  <div className={s.avatar}>
                    <img
                      src="https://images.theconversation.com/files/443350/original/file-20220131-15-1ndq1m6.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C3354%2C2464&q=45&auto=format&w=926&fit=clip"
                      alt="avatar"
                    />
                  </div>
                  <div className={s.name}>Alex Maximov</div>
                </a>
              </li>
              <li className={s.item}>
                <a href="#" className={s.link}>
                  <div className={s.avatar}>
                    <img
                      src="https://images.theconversation.com/files/443350/original/file-20220131-15-1ndq1m6.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C3354%2C2464&q=45&auto=format&w=926&fit=clip"
                      alt="avatar"
                    />
                  </div>
                  <div className={s.name}>Alex Maximov</div>
                </a>
              </li>
              <li className={s.item}>
                <a href="#" className={s.link}>
                  <div className={s.avatar}>
                    <img
                      src="https://images.theconversation.com/files/443350/original/file-20220131-15-1ndq1m6.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C3354%2C2464&q=45&auto=format&w=926&fit=clip"
                      alt="avatar"
                    />
                  </div>
                  <div className={s.name}>Alex Maximov</div>
                </a>
              </li>
              <li className={s.item}>
                <a href="#" className={s.link}>
                  <div className={s.avatar}>
                    <img
                      src="https://images.theconversation.com/files/443350/original/file-20220131-15-1ndq1m6.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C3354%2C2464&q=45&auto=format&w=926&fit=clip"
                      alt="avatar"
                    />
                  </div>
                  <div className={s.name}>Alex Maximov</div>
                </a>
              </li>
              <li className={s.item}>
                <a href="#" className={s.link}>
                  <div className={s.avatar}>
                    <img
                      src="https://images.theconversation.com/files/443350/original/file-20220131-15-1ndq1m6.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C3354%2C2464&q=45&auto=format&w=926&fit=clip"
                      alt="avatar"
                    />
                  </div>
                  <div className={s.name}>Alex Maximov</div>
                </a>
              </li>
              <li className={s.item}>
                <a href="#" className={s.link}>
                  <div className={s.avatar}>
                    <img
                      src="https://images.theconversation.com/files/443350/original/file-20220131-15-1ndq1m6.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C3354%2C2464&q=45&auto=format&w=926&fit=clip"
                      alt="avatar"
                    />
                  </div>
                  <div className={s.name}>Alex Maximov</div>
                </a>
              </li>
              <li className={s.item}>
                <a href="#" className={s.link}>
                  <div className={s.avatar}>
                    <img
                      src="https://images.theconversation.com/files/443350/original/file-20220131-15-1ndq1m6.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C3354%2C2464&q=45&auto=format&w=926&fit=clip"
                      alt="avatar"
                    />
                  </div>
                  <div className={s.name}>Alex Maximov</div>
                </a>
              </li>
            </ul>
          </div>

          <div className={s.chat}>
            <ul className={s.chat_list}>
              <li className={`${s.chat_item} ${s.notMy}`}>hey, how are you?</li>
              <li className={`${s.chat_item} ${s.notMy}`}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Delectus, minima. Sequi, ea atque. Repellat mollitia nostrum
                ducimus esse illo numquam soluta quaerat labore laborum,
                consequatur ratione commodi. Ex, molestiae dicta?
              </li>
              <li className={`${s.chat_item} ${s.my}`}>
                Sequi, ea atque. Repellat mollitia nostrum ducimus esse illo
                numquam soluta quaerat labore laborum, consequatur ratione
                commodi. Ex, molestiae dicta?
              </li>
              <li className={`${s.chat_item} ${s.my}`}>
                Sequi, ea atque. Repellat mollitia nostrum ducimus esse illo
                numquam soluta quaerat labore laborum, consequatur ratione
                commodi. Ex, molestiae dicta?
              </li>
              <li className={`${s.chat_item} ${s.notMy}`}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Delectus, minima. Sequi, ea atque. Repellat mollitia nostrum
                ducimus esse illo numquam soluta quaerat labore laborum,
                consequatur ratione commodi. Ex, molestiae dicta?
              </li>
              <li className={`${s.chat_item} ${s.my}`}>
                Sequi, ea atque. Repellat mollitia nostrum ducimus esse illo
                numquam soluta quaerat labore laborum, consequatur ratione
                commodi. Ex, molestiae dicta?
              </li>
              <li className={`${s.chat_item} ${s.my}`}>
                Sequi, ea atque. Repellat mollitia nostrum ducimus esse illo
                numquam soluta quaerat labore laborum, consequatur ratione
                commodi. Ex, molestiae dicta?
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dialogs;
