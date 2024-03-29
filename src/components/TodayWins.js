import React from "react";
import OneSmallWin from "./OneSmallWin";

const TodayWins = ({ todayswins, setTodaysWins, newWins, setNewWins}) => {
  // console.log('newWins in todaywins');
  console.log("newwins ", newWins);

  return (
    <div className="today-wins-container">
    {/* example from: https://www.robinwieruch.de/react-hooks-fetch-data */}
    <ul className="todays-wins">
        <OneSmallWin
          win={newWins}
          todayswins={todayswins}
          setTodaysWins={setTodaysWins}
          key={newWins.id}
          // win_title={newWins}
          newWins={newWins}
          setNewWins={setNewWins}
        />
    </ul>
  </div>
  );
};

export default TodayWins;
