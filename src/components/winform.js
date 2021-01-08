import React from "react";
import uuid from "react-uuid";

const Winform = ({
  inputText,
  setInputText,
  todayswins,
  setTodaysWins,
  setCelebrate,
}) => {
  // here I can write js code and functions
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmitToday = (e) => {
    e.preventDefault();
    // we have state
    // when I click on submit new input, then this function gets triggered, within this function I am triggering setTodaysWins, which is accepting all the existing 'todayswins' that's being spread in an array (also passed in from props), the second thing being passed in is the text that's being assigned to text from the user. setTodaysWins is being passed down from today
    setTodaysWins([...todayswins, { text: inputText, id: uuid() }]);
    setInputText("");
    setCelebrate(true);
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
