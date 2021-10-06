import React from "react";

// todo is same as onesmallwin ... or win from todaywins.js
const OneSmallWin = ({ /*win_title*/ win, newWins, setNewWins }) => {
  // events
  const handleDelete = () => {
    setNewWins(newWins.filter((el) => el.id !== win.id));

  };
// THIS IS ACCURATE, 
  // console.log("newWins");
  //   console.log(newWins);
  //   console.log(win);

    // const winTitle = newWins.map(newWin => {
    //   console.log(newWin);
    //   return newWin.win_title;
    // })
    // CHANGE SOMETHING ABOUT THE WINTITLE TO BE JUST ONE WIN TITLE AND NOT A LIST OF THEM
    // console.log("winTitle: " + winTitle);

  return (
    <div className="onesmallwin">
      <li>eventually map through response from get on handle submit and display that</li>
      {/* <li className="onesmallwin-item">{newWins.win_title}</li> */}
      <button onClick={handleDelete} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default OneSmallWin;
