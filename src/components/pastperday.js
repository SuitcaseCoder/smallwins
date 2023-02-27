import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';

const PastPerDay = () => {

    const prevWins = [];

    useEffect(() => {
        // call api or anything
        console.log("past per day loaded");
            axios.get('/login')
            .then((res)=>{
                console.log(res);
                res.json();
            })
            .then((data)=>{
                console.log('prevWins: ', data)
            })
     });
    
    

    return (
        <div>
            {/* send a get request with id for X day */}
            {/* map through items returned for that day */}
            {/* return the li with each item (within map)  */}
            {/* maybe do a double map? first to map through dates and then within each date map through items */}
            <li>
                each list item for previous days go here again and again
            </li>
            <li>
                and again and again
            </li>
            <li>
                and again and again and again
            </li>
        </div>
    );
};

export default PastPerDay