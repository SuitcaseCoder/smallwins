// importing useEffect to use axios to tie frontend to api
import React, { useState, useEffect } from "react";
import axios from "axios";

import Winform from "../components/winform";
import Celebrate from "../components/celebrate";
import OneSmallWin from "../components/OneSmallWin";
import { Redirect } from "react-router-dom";

// this function runs when page loads/refreshes
function Today(props) {
  const [newWins, setNewWins] = useState([]);

  // useEffect to get from api 
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:5000/allwins")
      // const result = await axios("http://localhost:5000/createwinstable");
      // result.data is an array of objects where each object is a row from the db (wins table)
      setNewWins(result.data);
    };
    fetchData();
  }, []);

  const [inputText, setInputText] = useState("");
  //   for my array of objects, which will list out the list of wins for today

  const [addedWin, setAddedWin] = useState("");



  // GUIDE: in the array, the first element is declaring a brand new state variable, the second item in the array is a function that lets us update that first state (similar to this.setState in that we can call it from an event handler),  only one thing (argument) can be passed into the useState() function, which will be the inital value of the state being created. so in this case our 'celebrate' state that was just created is going to start of with a value of false. So the array part is actually array destructuring happening
  const [celebrate, setCelebrate] = useState(false);
  console.log("newWins", newWins.user_id);
  // if(!props.loginStatus){
  //   return (
  //     <div>
  //       <Redirect to="/" />
  //     </div>
  //   )
  // } else {
  return (
    <div>
      <Winform
        inputText={inputText}
        newWins={newWins}
        setInputText={setInputText}
        // setting celebrate to true after submit but passing in the function down to the form when submit is clicked
        setCelebrate={setCelebrate}
        setNewWins={setNewWins}
        addedWin={addedWin}
        setAddedWin={setAddedWin}
        user_id={props.user_id}

      />
      <OneSmallWin
        newWins={newWins}
        setNewWins={setNewWins}
        user_id={newWins.user_id}
      />
      {celebrate ? <Celebrate /> : null}
    </div>
  );
  
}

export default Today;
