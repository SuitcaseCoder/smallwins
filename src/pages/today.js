import React, { useState } from "react";

import Winform from "../components/winform";
import TodayWins from "../components/TodayWins";
import Celebrate from "../components/celebrate";

function Today() {
  // note to self - moved this to here from app.js
  const [inputText, setInputText] = useState("");
  //   for my array of objects, which will list out the list of wins for today
  const [todayswins, setTodaysWins] = useState([]);

  const [celebrate, setCelebrate] = useState(false);

  return (
    <div>
      <h1>{inputText}</h1>
      {/* todayswins={todayswins} can just the same be newlyAddedSmallWin={todayswins} */}
      <Winform
        inputText={inputText}
        todayswins={todayswins}
        setTodaysWins={setTodaysWins}
        setInputText={setInputText}
        // setting celebrate to true after submit but passing in the function down to the form when submit is clicked
        setCelebrate={setCelebrate}
      />
      <TodayWins todayswins={todayswins} setTodaysWins={setTodaysWins} />
      {celebrate ? <Celebrate /> : null}
    </div>
  );
}

export default Today;
