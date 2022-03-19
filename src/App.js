import React, {useEffect, useState} from "react";
import "./App.css";
import Card from "./components/Card";
import Detail from "./components/Detail";
import Search from "./components/Search";

function App() {
    const [detail, setDetail] = useState(null);
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        await fetch("https://api.openbrewerydb.org/breweries")
            .then((response) => response.json())
            .then((receiveddata) => {
                setData(receiveddata);
                setFilteredData(receiveddata);
            });
    };

    return (
        <div className="App">
            {detail && <Detail data={detail} setDetail={setDetail}/>}
            {!detail && <div className="details">
                <Search data={data} setFilteredData={setFilteredData}/>
                <div className="cards">
                    {filteredData.map(d => <Card key={d.id} data={d} setDetail={setDetail}/>)}
                </div>
            </div>}
        </div>
    );
}

export default App;
