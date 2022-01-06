import React from "react";
import uuid from "react-uuid";
import axios from 'axios'


const Winform = ({
  inputText,
  setInputText,
  newWins,
  setNewWins,
  setCelebrate,
  addedWin,
  setAddedWin,
  user_id
}) => {


  // here I can write js code and functions
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
    // deal with missing last letter later
    setAddedWin({id: uuid(), win_title: inputText, user_id:user_id});
  };
  // setNewWins([...newWins, { id: uuid(), win_title: inputText}]);

  const handleSubmitToday = (e) => {
    e.preventDefault();

    // addedWin.user_id exists but it's undefined
  console.log("addedWin", addedWin);

    axios
    .post("http://localhost:5000/addwin1", addedWin )
    .then((response) => {

      
      // get request to all wins
      axios
        .get("http://localhost:5000/allwins")
        .then(res => {
          setNewWins(res.data);
        })


      // setNewWins(response.data);
    });



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
