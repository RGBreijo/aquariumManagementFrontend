import WaterTestResults from "./WaterTestResults"
import React, {useState} from 'react';

import "./WaterTest.css"
const WaterTestComponent = (props) =>
{

    const [aquariumInfo, setAquariumInfo] = useState([]);

    let uri = "http://localhost:8080/tim/aquariums/" + props.aquariumName + "/watertests/all";
    
    async function fetchUserInfoHandler()
    {
        const response = await fetch(uri);
        const data = await response.json();
        setAquariumInfo(data);
    }

    for(let i = 0; i < aquariumInfo.length; i++)
    {
        console.log(aquariumInfo[i].nitrateLvl);
        console.log(aquariumInfo[i].nitriteLvl);
        console.log(aquariumInfo[i].ammoniaLvl);
        console.log(aquariumInfo[i].phLvl);
        console.log("new");
    }
  

    return(
        <div className="WaterTestcontainer">
            <div className="waterTestHeader">
                <h1>Water Test History</h1>
            </div>
            <div className="waterTestProperties">
                <h2 className="dateHeading">Date</h2>
                <h2 className="propertiHeading">Nitrate</h2>
                <h2 className="propertiHeading">Nitrite</h2>
                <h2 className="propertiHeading">PH</h2>
                <h2 className="propertiHeading">Ammonia</h2>
            </div>
            <hr className="waterTestLine"></hr>

            <div className="WaterTestresults">

            {
            aquariumInfo.map(info =>
            {
                return(
                <WaterTestResults nitrateLvl={info.nitrateLvl} nitriteLvl={info.nitriteLvl} ammoniaLvl={info.ammoniaLvl} phLvl={info.phLvl}></WaterTestResults>
                )
            })
            }
            </div>
            <button onClick={fetchUserInfoHandler} >Fetch</button>
        </div>
    )
}

export default WaterTestComponent;