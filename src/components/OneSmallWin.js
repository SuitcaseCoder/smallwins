import React, { useEffect } from "react";
import axios from 'axios'


import { useNavigate } from "react-router-dom";


// todo is same as onesmallwin ... or win from todaywins.js
const OneSmallWin = ({ newWins, setNewWins }) => {
 

  // DELETE 
  const handleDelete = (id) => {
    console.log(id);
    axios
      .delete(`/deletesmallwin/${id}`)
      .then((res) => {
        console.log(res.data);
        console.log("---DELETE BUTTON----")
        console.log(id);

        // setNewWins (hooks) can take a new value or a function from an old one to the new one --> 
        setNewWins((newWins) => newWins.filter((el) => 
          // console.log('el: ', el.id)
          el.id !== id
        ))
      })

     
    };

    // checks to see when this component renders
    useEffect(() => {
      console.log('render:', newWins);

    }, [newWins])


  return (
    <div className="onesmallwin">
      {newWins.map(win => {
        // console.log("win one small win: " , win);
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
