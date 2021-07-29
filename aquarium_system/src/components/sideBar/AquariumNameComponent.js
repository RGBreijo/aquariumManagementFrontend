import React, {useState} from 'react';

import "./aquariumName.css"

const AquariumNameComponent = (props) =>
{   
    // Put onclick here because having problems putting it in parent. 
    const sideBarClicked = () => 
    {
        props.onNameSelected(props.name);
        // Check the color if it's no the correct color 
    }

    return(
        <div>
                <p className="aquariumName" onClick={sideBarClicked}>{props.name}</p>  
        </div> 
    )
}

export default AquariumNameComponent; 