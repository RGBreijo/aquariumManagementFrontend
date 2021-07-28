import "./WaterTestResults.css";
import React, {useState} from 'react';


const WaterTestResults = (props) =>
{

    return(
        <div className="waterTestResultContainer">
                <p className="dateContent">December 20, 2021</p>
                <p className="waterPropertie">{props.nitrateLvl}</p>
                <p className="waterPropertie">{props.nitriteLvl}</p>
                <p className="waterPropertie">{props.phLvl}</p>
                <p className="waterPropertie">{props.ammoniaLvl}</p>
        </div>
    )
}

export default WaterTestResults;