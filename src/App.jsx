import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import LineGraph from "./components/LineGraph";
import BarGraph from "./components/BarGraph";
import Form from "./components/AddThresholdForm";
import getBarData from "./getBarData";

import "./App.css";

const styles = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center"
};

const App = () => {
  const [endpoint] = useState("https://just-for-practice.herokuapp.com/");
  const [data, setData] = useState([]);
  const [barData, setBarData] = useState([]);
  const [threshold, setThreshold] = useState(NaN);

  const handleThresholdChange = event => {
    setThreshold(event.target.value);
  };

  useEffect(() => {
    const socket = socketIOClient(endpoint);
    socket.on("data", data => {
      console.log("client connected");
      setBarData(prevData => [...prevData, ...getBarData(data)]);
      setData(prevData => [...prevData, data]);
    });
    return () => socket.close(); // prevents the spazzing out
  }, [endpoint, data, barData]);

  return (
    <div>
      <div>
        <LineGraph data={data} threshold={threshold} />
        {/* <BarGraph data={barData} /> */}
        <Form
          data={data}
          threshold={threshold}
          handleThresholdChange={handleThresholdChange}
        />
      </div>
    </div>
  );
};

export default App;
