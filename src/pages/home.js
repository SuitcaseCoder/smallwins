import React from "react";

import Today from "./today";
// import Past from "./past";

function Home() {
  return (
    <div>
      {/* turn into a component */}
      <h3>Welcome back -- username --</h3>
      <h4>You've been tracking your wins for -- x -- days</h4>
      <Today />
      {/* <Past /> */}
    </div>
    //   {/* // if today show today
    // // if past show past
    // // maybe use router for this */}
  );
}

export default Home;
