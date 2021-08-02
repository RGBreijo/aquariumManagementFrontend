import "./FishDataComponent.css"


const FishDataComponent = (props) => 
{
    return(
        <div className="fishDataContainer"> 
            <div> 
                <p class="fishActualName">{props.name}</p>
            </div>

            <div> 
                <p class="fishActualQuantity">{props.quantity}</p>
            </div>
            
        </div>
    )
}

export default FishDataComponent; 