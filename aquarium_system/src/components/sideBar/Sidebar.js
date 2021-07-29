import AquariumNameComponent from "./AquariumNameComponent";
import React, {useState, useEffect} from 'react';

import "./Sidebar.css"

const Sidebar = (props) =>
{
    const [aquariumInfo, setAquariumInfo] = useState([]);

    let uri = "http://localhost:8080/tim/aquariums/all";
    
    async function fetchUserInfoHandler()
    {
        const response = await fetch(uri);
        const data = await response.json();
        setAquariumInfo(data);
    }

    useEffect(() => 
    {
        fetchUserInfoHandler();
    }, [])


    const changeData = (name) => 
    {
        props.onAquarium(name);
    }



// Need to do an onClick in the component so when it's cicked sends info to App.js which then updates aquariumName
    return(
        <div className="sidebar">
            <div className="sideBarHeader">
                <h1>My Aquariums</h1>
            </div>
            
            {
            aquariumInfo.map(info =>
            {
                return(
                    <AquariumNameComponent name={info.name} onNameSelected={changeData}></AquariumNameComponent>
                    )
            })
            }
        </div>
    )
}

export default Sidebar; 