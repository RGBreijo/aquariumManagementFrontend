import AquariumNameComponent from "./AquariumNameComponent";
import "./Sidebar.css"

const Sidebar = () =>
{
    return(
        <div className="sidebar">
            <div className="sideBarHeader">
                <h1>My Aquariums</h1>
            </div>
            <AquariumNameComponent></AquariumNameComponent>
            <AquariumNameComponent></AquariumNameComponent>
            <AquariumNameComponent></AquariumNameComponent>
        </div>
    )
}

export default Sidebar; 