import { nanoid } from "nanoid";

const ADD_POST = "ADD-POST";
const DELETE_POST = "DELETE-POST";
const ADD_MESSAGE = "ADD_MESSAGE";

const _store = {
  _state: {
    profilePage: {
      posts: [
        {
          id: 0,
          message: "Hey, how are you?",
          avatar:
            "https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1394x454:1396x452)/origin-imgresizer.eurosport.com/2021/11/18/3256044-66638148-2560-1440.jpg",
        },
        {
          id: 1,
          message: "Hey, how are you?",
          avatar:
            "https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1394x454:1396x452)/origin-imgresizer.eurosport.com/2021/11/18/3256044-66638148-2560-1440.jpg",
        },
        {
          id: 2,
          message: "Hey, how are you?",
          avatar:
            "https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1394x454:1396x452)/origin-imgresizer.eurosport.com/2021/11/18/3256044-66638148-2560-1440.jpg",
        },
      ],
    },

    dialogsPage: {
      dialogs: [
        {
          id: 0,
          avatar:
            "https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1394x454:1396x452)/origin-imgresizer.eurosport.com/2021/11/18/3256044-66638148-2560-1440.jpg",
          name: "Karim Benzima",
        },
        {
          id: 1,
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2IxE4RmK2uMa6E3fb4iw5yeWoQpnVMk4yKkt5TCKrc9QmTDVshbe3bHsaiJKKSG5pcr8&usqp=CAU",
          name: "Rebert Lewandowski",
        },
        {
          id: 2,
          avatar:
            "https://cdn.images.express.co.uk/img/dynamic/67/590x/1622734_1.jpg?r=1654718717057",
          name: "Romelu Lukaku",
        },
        {
          id: 3,
          avatar:
            "https://roscongress.org/upload/resize_cache/iblock/a9b/289_289_2/111426.htm.jpg",
          name: "Vladimir Putin",
        },
        {
          id: 4,
          avatar:
            "https://st-1.akipress.org/st_gallery/30/1164530.22888245c316cdae28905764eefd2d74.jpg",
          name: "Alylbek Japarov",
        },
        {
          id: 5,
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR0KItGitM-BSfHrU9t_jJ3nF54piicn6oRAeGSmPLsaVQbQU77Wqtf2OV41UO9akNi3I&usqp=CAU",
          name: "Jeki Chan",
        },
        {
          id: 6,
          avatar:
            "https://www.readfootball.com/sites/default/files/news-img/semedo1.png",
          name: "Nelson Semedu",
        },
        {
          id: 7,
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDNezfDUKRVGBp-jGt15gqj-nx2lbsXijD1G0b5h0xRIt3vP89N7Z8PAnsM8zeDYaJ7zA&usqp=CAU",
          name: "Sadio Mane",
        },
        {
          id: 8,
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtPAdTnM9E5ymnBimcKcNVUJKRBIjObYsw1buiXXn1sb78DLAoxsUxMULBwhyzMJNoBk4&usqp=CAU",
          name: "Harry Kane",
        },
        {
          id: 9,
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoajvHqQsFw037mx1TObv326x4G41NiiPbHA&usqp=CAU",
          name: "Ansumane Fati",
        },
      ],
      messages: [
        { id: 0, message: "Hi Robert.", isMy: false },
        { id: 1, message: "Hi", isMy: true },
        { id: 2, message: "What are you doing?", isMy: false },
        { id: 3, message: "I practice", isMy: true },
        {
          id: 4,
          message:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis possimus modi corruptcupiditate magni harum, veritatis dolor ex, fuga dicta debitis? Impedit a dicta eos uvoluptate nisi alias illum!",
          isMy: true,
        },
        {
          id: 5,
          message:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis possimus modi corruptcupiditate magni harum, veritatis dolor ex, fuga dicta debitis? Impedit a dicta eos uvoluptate nisi alias illum!",
          isMy: false,
        },
      ],
    },
  },

  getState() {
    return this._state;
  },

  callSubscriber() {
    console.log("Changed state");
  },

  subscribe(observer) {
    this.callSubscriber = observer;
  },

  dispatch(action) {
    switch (action.type) {
      case ADD_POST:
        const newPost = {
          id: nanoid(),
          message: action.post,
          avatar:
            "https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg):focal(1394x454:1396x452)/origin-imgresizer.eurosport.com/2021/11/18/3256044-66638148-2560-1440.jpg",
        };

        this._state.profilePage.posts.push(newPost);
        this.callSubscriber(this._state);
        break;
      case DELETE_POST:
        this._state.profilePage.posts = this._state.profilePage.posts.filter(
          (item) => item.id !== action.id
        );
        this.callSubscriber(this._state);
        break;
      case ADD_MESSAGE:
        const newMessage = {
          id: nanoid(),
          message: action.message,
          isMy: true,
        };
        this._state.dialogsPage.messages.push(newMessage);
        this.callSubscriber(this._state);
      default:
        break;
    }
  },
};

export const addPostActionCreater = (post) => ({ type: ADD_POST, post });

export const addMessageActonCreator = (message) => ({
  type: ADD_MESSAGE,
  message,
});

export const deletePostActionCreater = (id) => ({ type: DELETE_POST, id });

export default _store;
