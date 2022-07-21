const initialState = {
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
};

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
