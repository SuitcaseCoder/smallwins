import React from "react";
import OneSmallWin from "./OneSmallWin";

const TodayWins = ({ todayswins, setTodaysWins, newWins }) => {
  console.log('todayswins frontend: (which I believe is coming from the backend)');
  console.log(todayswins);
  return (
    // <div className="today-wins-container">
    //   {/* example from: https://www.robinwieruch.de/react-hooks-fetch-data */}
    //   <ul className="todays-wins">
    //      {todayswins.map((win) => (
    //       <OneSmallWin
    //         win={win}
    //         todayswins={todayswins}
    //         setTodaysWins={setTodaysWins}
    //         key={win.id}
    //         win_title={win.win_title}
    //       />
    //     ))} 
    //   </ul>
    // </div>

    <div className="today-wins-container">
    {/* example from: https://www.robinwieruch.de/react-hooks-fetch-data */}
    <ul className="todays-wins">
        <OneSmallWin
          win={todayswins}
          todayswins={todayswins}
          setTodaysWins={setTodaysWins}
          key={todayswins.id}
          win_title={todayswins.win_title}
          newWins={newWins}
        />
    </ul>
  </div>
  );
};

export default TodayWins;
