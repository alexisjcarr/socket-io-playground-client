import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
// import ReactSpeedometer from "react-d3-speedometer";
import Smoothie, { TimeSeries } from "react-smoothie";
// import DataList from "./components/DataList";
import "./App.css";

const App = () => {
  const [response, setResponse] = useState([]);
  const [endpoint] = useState("https://socket-io-playground.herokuapp.com/");
  //const [time] = useState(new Date().getTime());

  //custom hook
  // const useForceUpdate = () => {
  //   const [value, set] = useState(true); //boolean state
  //   return () => set(!value); // toggle the state to force render
  // };

  // const forceUpdate = useForceUpdate();

  const ts1 = new TimeSeries({});

  useEffect(() => {
    const socket = socketIOClient(endpoint);

    socket.on("outgoing data", data => {
      setResponse(data.num);
      // console.log(data.num);
      setInterval(() => {
        ts1.append(new Date().getTime(), data.num);
      }, 1000);
    });
  }, [response, endpoint, ts1]);

  // const flow = {
  //   duration: 200
  // };

  console.log("response: ", response);

  return (
    <div style={{ margin: "0 auto" }}>
      <Smoothie
        responsive
        height={300}
        series={[
          {
            data: ts1,
            strokeStyle: { g: 255 },
            fillStyle: { g: 255 },
            lineWidth: 4
          }
        ]}
      />
    </div>
  );
};

export default App;
