import React from "react";

import Today from "./today";
// import Past from "./past";

function Home() {
  return (
    <div>
      {/* turn into a component */}
      <h3>Welcome back ABC</h3>
      <h4>You've been tracking your wins for X days</h4>
      <Today />
      {/* <Past /> */}
    </div>
    //   {/* // if today show today
    // // if past show past
    // // maybe use router for this */}
  );
}

export default Home;
