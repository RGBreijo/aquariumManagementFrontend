import AquariumNameComponent from "./AquariumNameComponent";
import "./Sidebar.css"

const Sidebar = () =>
{
    return(
        <div className="sidebar">
            <AquariumNameComponent></AquariumNameComponent>
            <AquariumNameComponent></AquariumNameComponent>
            <AquariumNameComponent></AquariumNameComponent>
        </div>
    )
}

export default Sidebar; 