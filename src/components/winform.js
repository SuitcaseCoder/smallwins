import React from "react";
import uuid from "react-uuid";
import axios from 'axios'


const Winform = ({
  inputText,
  setInputText,
  // todayswins,
  newWins,
  setNewWins,
  setTodaysWins,
  setCelebrate,
}) => {


  // here I can write js code and functions
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
    setNewWins([...newWins, { id: uuid(), win_title: inputText}]);
  };
  // setNewWins([...newWins, { id: uuid(), win_title: inputText}]);


  const handleSubmitToday = (e) => {
    e.preventDefault();
    // newWins here is coming direct from the db as an arr ... i think
    console.log(`newWins before post request in winform`);
    console.log(newWins);
    // -------------------------

    axios
    // .post("http://localhost:5000/addwin1", todayswins)
    .post("http://localhost:5000/addwin1", newWins[newWins.length-1])
    // create setNewWin function to actually set data
    .then((response) => {
      // setTodaysWins(response.data)
      console.log("post request successful at winform + response:")
      console.log(response);
      // console.log(JSON.parse(response));
      setNewWins(response.data);
    });

    // -------------------------
    // we have state
    // when I click on submit new input, then this function gets triggered, within this function I am triggering setTodaysWins, which is accepting all the existing 'todayswins' that's being spread in an array (also passed in from props), the second thing being passed in is the text that's being assigned to text from the user. setTodaysWins is being passed down from today
    // setTodaysWins([...todayswins, { id: uuid(), win_title: inputText}]);
    // setNewWins([...newWins, { id: uuid(), win_title: inputText}]);

    // setInputText('') refreshes so that the input field empties out after something's been submitted
    setInputText("");
    // changing the state of setCelebrate to true to rerender and display the congrats component
    setCelebrate(true);
    // after a few seconds of celebrating, we are resetting the set celebrate to false
    setTimeout(() => {
      setCelebrate(false);
    }, 900);
  };

  return (
    <form>
      <input
        type="text"
        placeholder="I did done did it ..."
        onChange={inputTextHandler}
        value={inputText}
      ></input>
      <button type="submit" onClick={handleSubmitToday}>
        +
      </button>
    </form>
  );
};

export default Winform;
