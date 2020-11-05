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
    setTodaysWins([...todayswins, { text: inputText, id: uuid() }]);
    setInputText("");
    setCelebrate(true);

    setTimeout(() => {
      setCelebrate(false);
    }, 2000);
  };

  return (
    <form>
      <input
        type="text"
        placeholder="win a little ..."
        onChange={inputTextHandler}
        value={inputText}
      ></input>
      <button type="submit" onClick={handleSubmitToday}
      >
        +
      </button>
    </form>
  );
};

export default Winform;
