import React, {useState} from 'react';

import "./aquariumName.css"

const AquariumNameComponent = (props) =>
{

    return(
        <div>
                <p className="aquariumName">{props.name}</p>        
        </div>
    )
}

export default AquariumNameComponent; 