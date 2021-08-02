import WaterTestComponent from "./components/waterTest/waterTestComponent"
import SideBar from "./components/sideBar/Sidebar";
import "./App.css"
import FooterComponent from "./components/footer/FooterComponent"
import React, {useState} from 'react';
import WaterChangeComponent from "./components/WaterChange/WaterChangeComponent"
import FishComponent from "./components/Fish/FishComponent"

function App() 
{

  const [aquariumName, setAquariumName] = useState("myAquarium");

  const changeAquarium = (name) =>
  {
    setAquariumName(name);
  }

  return (
    <div>
      <div className="placeComponents"> 
        <SideBar onAquarium={changeAquarium}></SideBar> 
        <div className="dataComponents">
          <div className="innerContainer"> 
          <WaterTestComponent aquariumName={aquariumName}></WaterTestComponent>
          <WaterChangeComponent aquariumName={aquariumName}></WaterChangeComponent>
          <FishComponent aquariumName={aquariumName}></FishComponent>
          </div>
        </div>
    
       </div>
       <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
