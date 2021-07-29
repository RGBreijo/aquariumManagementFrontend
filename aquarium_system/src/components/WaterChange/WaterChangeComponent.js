import "./WaterChangeComponent.css";
import React, {useState, useEffect} from 'react';
import WaterChangeResults from "./WaterChangeResults"


const WaterChangeComponent = (props) => 
{
    const [waterChangeDate, SetwaterChangeDate] = useState([]);

    let uri = "http://localhost:8080/tim/aquariums/" + props.aquariumName + "/waterchanges/all";
    
    async function fetchUserInfoHandler()
    {
        const response = await fetch(uri);
        const data = await response.json();
        SetwaterChangeDate(data);
    }

    useEffect(() => 
    {
        fetchUserInfoHandler();
    }, [uri])


    return(
        <div className="waterChangeContainer">
            <div className="waterChangeTitle"><h2>Water Change History</h2></div>
            <div className="waterChangeDate"><p>Date</p></div>
            {
            waterChangeDate.map(info =>
            {
                return(
                <WaterChangeResults date={info.waterChanged}></WaterChangeResults>
                )
            })
            }
        </div>
    )
}



export default WaterChangeComponent; 