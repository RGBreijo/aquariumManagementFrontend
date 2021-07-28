import AquariumNameComponent from "./AquariumNameComponent";
import React, {useState} from 'react';

import "./Sidebar.css"

const Sidebar = () =>
{
    const [aquariumInfo, setAquariumInfo] = useState([]);

    let uri = "http://localhost:8080/tim/aquariums/all";
    
    async function fetchUserInfoHandler()
    {
        const response = await fetch(uri);
        const data = await response.json();
        setAquariumInfo(data);
    }


    return(
        <div className="sidebar">
            <div className="sideBarHeader">
                <h1>My Aquariums</h1>
            </div>
            
            {
            aquariumInfo.map(info =>
            {
                return(
                    <AquariumNameComponent name={info.name}></AquariumNameComponent>
                    )
            })
            }



            <button onClick={fetchUserInfoHandler}>get</button>

        </div>
    )
}

export default Sidebar; 