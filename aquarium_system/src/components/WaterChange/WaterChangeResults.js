
import Moment from 'moment';
import React, {useState} from 'react';


const WaterChangeResults = (props) =>
{

    let dateFormatted = Moment(props.date).format('MMMM Do YYYY');

    return(
        <div> 
        <p>{dateFormatted}</p>
        </div>
    )
}

export default WaterChangeResults;