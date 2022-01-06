import React from "react";
import axios from 'axios'


// todo is same as onesmallwin ... or win from todaywins.js
const OneSmallWin = ({ newWins, setNewWins }) => {
 
  // DELETE 
  const handleDelete = (id) => {
    console.log(id);
    axios
      .delete(`/deletesmallwin/${id}`)
      .then(() => {
        console.log("---DELETE BUTTON----")
        console.log(id);
        setNewWins(newWins.filter((el) => el.id !== id))
      })
  };


  return (
    <div className="onesmallwin">
      {newWins.map(win => {
        // console.log("win one small win: " , win);
        return <li className="win-li" key={win.id}>
          {win.win_title}
          <button onClick={() => handleDelete(win.win_id)} className="trash-btn">
          <i className="fas fa-trash"></i>
          </button>
              </li>
      })}

    </div>
  );
};

export default OneSmallWin;
