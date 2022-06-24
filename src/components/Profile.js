import React from "react";

const Profile = () => {
  return (
    <main className="profile">
      <div className="banner">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCZlf5lc5tX-0gY-y94pGS0mQdL-D0lCH2OQ&usqp=CAU"
          alt="banner"
        />
      </div>

      <div className="container">
        <div className="user">
          <div className="user__avatar">
            <img
              src="https://images.theconversation.com/files/443350/original/file-20220131-15-1ndq1m6.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C3354%2C2464&q=45&auto=format&w=926&fit=clip"
              alt=""
            />
          </div>

          <div className="user__descr">
            <h3 className="user__name">Nurbolot B.</h3>

            <p>Date of birth: 2nd january</p>
            <p>City: Bishkek</p>
            <p>
              Web Site: <a href="#">nurbolot123.github.io</a>
            </p>
          </div>
        </div>

        <div className="post">
          <h2 className="post__title">My posts</h2>

          <form>
            <input type="text" placeholder="Your news..." />
            <button type="submit">send</button>
          </form>

          <ul className="post__list">
            <li className="post__item">
              <div className="post__avatar">
                <img
                  src="https://images.theconversation.com/files/443350/original/file-20220131-15-1ndq1m6.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C3354%2C2464&q=45&auto=format&w=926&fit=clip"
                  alt="avatar"
                />
              </div>
              <p className="post__message">Hey, how are you?</p>
            </li>
            <li className="post__item">
              <div className="post__avatar">
                <img
                  src="https://images.theconversation.com/files/443350/original/file-20220131-15-1ndq1m6.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C3354%2C2464&q=45&auto=format&w=926&fit=clip"
                  alt="avatar"
                />
              </div>
              <p className="post__message">Hey, how are you?</p>
            </li>
            <li className="post__item">
              <div className="post__avatar">
                <img
                  src="https://images.theconversation.com/files/443350/original/file-20220131-15-1ndq1m6.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C3354%2C2464&q=45&auto=format&w=926&fit=clip"
                  alt="avatar"
                />
              </div>
              <p className="post__message">Hey, how are you?</p>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Profile;
