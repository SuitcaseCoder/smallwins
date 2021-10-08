import React, { useEffect } from "react";
import axios from 'axios'


// todo is same as onesmallwin ... or win from todaywins.js
const OneSmallWin = ({ /*win_title win,*/ newWins, setNewWins }) => {
 
  // events
  const handleDelete = (id) => {
    // setNewWins(newWins.filter((el) => el.id !== id));
    // console.log(newWins);

    axios
      .delete(`/deletesmallwin/:id=${id}`)
      .then(() => {
        console.log("---DELETE BUTTON----")
        console.log(id);
        setNewWins(newWins.filter((el) => el.id !== id))
      })
  };


  return (
    <div className="onesmallwin">
      {newWins.map(win => {
        return <li className="win-li" key={win.id}>
          {win.win_title}
          <button onClick={() => handleDelete(win.id)} className="trash-btn">
          <i className="fas fa-trash"></i>
          </button>
              </li>
      })}

    </div>
  );
};

export default OneSmallWin;
