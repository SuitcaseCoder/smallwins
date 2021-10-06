// importing useEffect to use axios to tie frontend to api
import React, { useState, useEffect } from "react";
import axios from "axios";

import Winform from "../components/winform";
import Celebrate from "../components/celebrate";
import OneSmallWin from "../components/OneSmallWin";

// this function runs when page loads/refreshes
function Today() {

    // THE BREAKDOWN:
  // newWins = variable to read the current state
  // setNewWins = function that will be called to write the new state
  // useState([whatever goes in here]) = whatever is being passed in to the useState is defining the initial state. 
  // so this whole thing is initialzing state with useState, but defining a variable to hold the state, as well as defining a function that will be called whenever we need to change the state of this thing
  const [newWins, setNewWins] = useState([]);

  // useEffect to get from api 
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:5000/allwins")
      // const result = await axios("http://localhost:5000/createwinstable");
      // result.data is an array of objects where each object is a row from the db (wins table)
      // setNewWins(result.data);
    };
    fetchData();
  }, []);

  const [inputText, setInputText] = useState("");
  //   for my array of objects, which will list out the list of wins for today

  const [addedWin, setAddedWin] = useState("");



  // GUIDE: in the array, the first element is declaring a brand new state variable, the second item in the array is a function that lets us update that first state (similar to this.setState in that we can call it from an event handler),  only one thing (argument) can be passed into the useState() function, which will be the inital value of the state being created. so in this case our 'celebrate' state that was just created is going to start of with a value of false. So the array part is actually array destructuring happening
  const [celebrate, setCelebrate] = useState(false);

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
      />
      <OneSmallWin
        // win={newWins}
        // key={newWins.id}
        // // win_title={newWins}
        // newWins={newWins}
        // setNewWins={setNewWins}
      />
      {celebrate ? <Celebrate /> : null}
    </div>
  );
}

export default Today;
