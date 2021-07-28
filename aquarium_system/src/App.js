import WaterTestComponent from "./components/waterTest/waterTestComponent"
import SideBar from "./components/sideBar/Sidebar";
import "./App.css"


function App() {
  return (
    <div className="placeComponents">
      <SideBar></SideBar>
      <div className="dataComponents">
       <WaterTestComponent></WaterTestComponent>
       </div>
    </div>
  );
}

export default App;
