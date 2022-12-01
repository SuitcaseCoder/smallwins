import React from "react";
import TimeAgo from 'javascript-time-ago'

import en from 'javascript-time-ago/locale/en'

import ReactTimeAgo from 'react-time-ago'

//TIME AGO:  https://www.npmjs.com/package/react-time-ago
// // https://github.com/catamphetamine/javascript-time-ago#locales

import PastPerDay from "../components/pastperday";

TimeAgo.addDefaultLocale(en)
// format(Date.now() - 24 * 60 * 60 * 1000);

const Past = () => {
  return (
    <div>
      <h1>Past Page</h1>
      <h2><ReactTimeAgo date={Date.now() - 24 * 60 * 60 * 1000} locale="en-US" timeStyle="round"/></h2>
      <h2>DATE GOES HERE</h2>
      <ul>
        <PastPerDay />
      </ul>
    </div>
  );
};

export default Past;
