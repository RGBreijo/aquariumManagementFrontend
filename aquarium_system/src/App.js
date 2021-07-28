import WaterTestComponent from "./components/waterTest/waterTestComponent"
import SideBar from "./components/sideBar/Sidebar";
import "./App.css"
import FooterComponent from "./components/footer/FooterComponent"


function App() {
  return (
    <div>
      <div className="placeComponents"> 
        <SideBar></SideBar>
        <div className="dataComponents">
          <WaterTestComponent aquariumName="myAquarium"></WaterTestComponent>
        </div>
    
       </div>
       <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
