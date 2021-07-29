import "./WaterTestResults.css";
import React, {useState} from 'react';
import Moment from 'moment';

const WaterTestResults = (props) =>
{   
    let dateFormatted = Moment(props.date).format('MMMM Do YYYY');

    return(
        <div className="waterTestResultContainer">
                <p className="dateContent">{dateFormatted}</p>
                <p className="waterPropertie">{props.nitrateLvl}</p>
                <p className="waterPropertie">{props.nitriteLvl}</p>
                <p className="waterPropertie">{props.phLvl}</p>
                <p className="waterPropertie">{props.ammoniaLvl}</p>
        </div>
    )
}

export default WaterTestResults;