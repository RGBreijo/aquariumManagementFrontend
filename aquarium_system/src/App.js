import WaterTestComponent from "./components/waterTest/waterTestComponent"
import SideBar from "./components/sideBar/Sidebar";
import "./App.css"
import FooterComponent from "./components/footer/FooterComponent"
import React, {useState} from 'react';
import WaterChangeComponent from "./components/WaterChange/WaterChangeComponent"

function App() 
{

  const [aquariumName, setAquariumName] = useState("myAquarium");

  const changeAquarium = (name) =>
  {
    setAquariumName(name);
    console.log("At the top");
  }

  return (
    <div>
      <div className="placeComponents"> 
        <SideBar onAquarium={changeAquarium}></SideBar> 
        <div className="dataComponents">
          <WaterTestComponent aquariumName={aquariumName}></WaterTestComponent>
          <WaterChangeComponent aquariumName={aquariumName}></WaterChangeComponent>
        </div>
    
       </div>
       <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
