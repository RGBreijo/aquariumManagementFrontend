import WaterTestResults from "./WaterTestResults"
import "./WaterTest.css"
const WaterTestComponent = () =>
{

    return(
        <div className="WaterTestcontainer">
            <div className="waterTestHeader">
                <h1>Water Test History</h1>
            </div>
            <div className="waterTestProperties">
                <h2 className="dateHeading">Date</h2>
                <h2 className="propertiHeading">Nitrate</h2>
                <h2 className="propertiHeading">Nitrite</h2>
                <h2 className="propertiHeading">PH</h2>
                <h2 className="propertiHeading">Ammonia</h2>
            </div>
            <hr className="waterTestLine"></hr>

            <div className="WaterTestresults">
            <WaterTestResults></WaterTestResults>
            <WaterTestResults></WaterTestResults>
            <WaterTestResults></WaterTestResults>
            <WaterTestResults></WaterTestResults>
            </div>
        </div>
    )
}

export default WaterTestComponent;