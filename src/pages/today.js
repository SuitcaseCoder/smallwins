// importing useEffect to use axios to tie frontend to api
import React, { useState, useEffect } from "react";
import axios from "axios";

import Winform from "../components/winform";
import TodayWins from "../components/TodayWins";
import Celebrate from "../components/celebrate";

// ENTIRE 'TODAY' (basically homepage) COMPONENT
// this function runs when page loads/refreshes
function Today() {

  // useEffect to get from api - placehoder api for now
  useEffect(() => {
    const fetchData = async () => {
      // this will switch over to whatever's coming from mysql database
      const result = await axios.get("http://localhost:5000/allwins")
      // const result = await axios("http://localhost:5000/createwinstable");
      // once we get those results back, I can use and manipulate them throughout my code
      console.log(result.data);
      setNewWins(result.data);
    };
    fetchData();
  }, []);

  // USE EFFECT FOR POST AXIOS CALL
  useEffect(() => {
    // POST request using axios inside useEffect React hook
    // const todayswins = [{ win_Title: "Second" }, {win_Title:"hello",win_Body:"world"}];
    // const todayswins = ;
    console.log('<<< NEW WINS >>>')
    console.log(newWins);
    const postData = async () => {
    axios
      // .post("http://localhost:5000/addwin1", todayswins)
      .post("http://localhost:5000/addwin1", newWins)
      // create setNewWin function to actually set data
      .then((response) => {
        // setTodaysWins(response.data)
        setNewWins(response.data);
      });
      
    }
      

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    // if I were to remove the empty array I run into a loop
  },[]);


  // note to self - moved this to here from app.js
  const [inputText, setInputText] = useState("");
  //   for my array of objects, which will list out the list of wins for today
  // THE BREAKDOWN:
  // todayswins = variable to read the current state
  // setTodaysWins = function that will be called to write the new state
  // useState([whatever goes in here]) = whatever is being passed in to the useState is defining the initial state. 
  // so this whole thing is initialzing state with useState, but defining a variable to hold the state, as well as defining a function that will be called whenever we need to change the state of this thing
  // const [todayswins, setTodaysWins] = useState([]);
  const [newWins, setNewWins] = useState([]);



  // GUIDE: in the array, the first element is declaring a brand new state variable, the second item in the array is a function that lets us update that first state (similar to this.setState in that we can call it from an event handler),  only one thing (argument) can be passed into the useState() function, which will be the inital value of the state being created. so in this case our 'celebrate' state that was just created is going to start of with a value of false. So the array part is actually array destructuring happening
  const [celebrate, setCelebrate] = useState(false);

  return (
    <div>
      {/* todayswins={todayswins} can just the same be newlyAddedSmallWin={todayswins} */}
      <Winform
        inputText={inputText}
        // todayswins={todayswins}
        newWins={newWins}
        // setTodaysWins={setTodaysWins}
        setInputText={setInputText}
        // setting celebrate to true after submit but passing in the function down to the form when submit is clicked
        setCelebrate={setCelebrate}
        setNewWins={setNewWins}
      />
      <TodayWins
        // todayswins={todayswins}
        // setTodaysWins={setTodaysWins}
        // fakeposts={fakeposts}
        newWins={newWins}
        // setFakePosts={setFakePosts}
        setNewWins = {setNewWins}
      />
      {celebrate ? <Celebrate /> : null}
    </div>
  );
}

export default Today;
