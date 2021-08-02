import FishDataComponent from "./FishDataComponent"
import React, {useState, useEffect} from 'react';
import "./FishComponent.css"

const FishComponent = (props) => 
{

    const [fishInfo, setFishInfo] = useState([]);

    let uri = "http://localhost:8080/tim/aquariums/" + props.aquariumName + "/fish/all";
    
    async function fetchUserInfoHandler()
    {
        const response = await fetch(uri);
        const data = await response.json();
        setFishInfo(data);
    }

    useEffect(() => 
    {
        fetchUserInfoHandler();
    }, [uri])


    return(
        <div> 
            <div className="fishContainer">
            <div className="fishTitle"><h2>Fish Information</h2></div>
            <div className="fishProperties">
                <p className="fishNameHolder">Name</p>
                <p>Quantity</p>
            </div>
            <hr className="fishHr"></hr>
            {
            fishInfo.map(info =>
            {
                return(
                <FishDataComponent name={info.name} quantity = {info.quantity}></FishDataComponent>
                )
            })
            }
        </div>

        </div>
    )
}

export default FishComponent; 