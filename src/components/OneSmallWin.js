import React from "react";

// todo is same as onesmallwin ... or win from todaywins.js
const OneSmallWin = ({ win_title, win, todayswins, setTodaysWins }) => {
  // events
  const handleDelete = () => {
    // console.log("win in onesmallwin", win);

    setTodaysWins(todayswins.filter((el) => el.id !== win.id));
  };

  return (
    <div className="onesmallwin">
      <li className="onesmallwin-item">{win_title}</li>
      <button onClick={handleDelete} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default OneSmallWin;
