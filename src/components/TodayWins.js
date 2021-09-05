import React from "react";
import OneSmallWin from "./OneSmallWin";

const TodayWins = ({ todayswins, setTodaysWins,fakeposts }) => {
  console.log('todayswins frontend: ');
  console.log(todayswins);
  return (
    <div className="today-wins-container">
      {/* example from: https://www.robinwieruch.de/react-hooks-fetch-data */}
      <ul className="todays-wins">
         {todayswins.map((win) => (
          <OneSmallWin
            win={win}
            todayswins={todayswins}
            setTodaysWins={setTodaysWins}
            key={win.id}
            win_title={win.win_title}
          />
        ))} 
      </ul>
    </div>
  );
};

export default TodayWins;
