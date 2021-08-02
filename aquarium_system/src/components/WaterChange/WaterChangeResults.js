
import Moment from 'moment';
import React, {useState} from 'react';
import "./WaterChangeResults.css"

const WaterChangeResults = (props) =>
{

    let dateFormatted = Moment(props.date).format('MMMM Do YYYY');

    return(
        <div> 
        <p className="waterChangeData">{dateFormatted}</p>
        </div>
    )
}

export default WaterChangeResults;