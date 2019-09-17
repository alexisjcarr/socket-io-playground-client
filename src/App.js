import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import Smoothie, { TimeSeries } from "react-smoothie";
import BarChart from "./components/BarChart";

import "./App.css";

const App = () => {
  const [endpoint] = useState("https://just-for-practice.herokuapp.com/");
  //const [values, setValues] = useState([]);
  // const [layout] = { width: 1000, height: 500, title: "A Fancy Plot" };

  const count = {
    "[-100, -90]": 0,
    "(-90, -80]": 0,
    "(-80, -70]": 0,
    "(-70, -60]": 0,
    "(-60, -50]": 0,
    "(-50, -40]": 0,
    "(-40, -30]": 0,
    "(-30, -20]": 0,
    "(-20, -10]": 0,
    "(-10, 0]": 0,
    "(0, 10]": 0,
    "(10, 20]": 0,
    "(20, 30]": 0,
    "(30, 40]": 0,
    "(40, 50]": 0,
    "(50, 60]": 0,
    "(60, 70]": 0,
    "(70, 80]": 0,
    "(80, 90]": 0,
    "(90, 100]": 0
  };

  // console.log("count: ", Object.keys(count));
  // console.log("count values: ", Object.values(count));

  const ts1 = new TimeSeries({});

  useEffect(() => {
    const socket = socketIOClient(endpoint);

    socket.on("data", data => {
      setInterval(() => {
        ts1.append(data.timestamp, data.value);
      }, 1000);

      switch (true) {
        case data.value <= -90:
          count["[-100, -90]"] += 1;
          break;
        case data.value <= -80:
          count["(-90, -80]"] += 1;
          break;
        case data.value <= -70:
          count["(-80, -70]"] += 1;
          break;
        case data.value <= -60:
          count["(-70, -60]"] += 1;
          break;
        case data.value <= -50:
          count["(-60, -50]"] += 1;
          break;
        case data.value <= -40:
          count["(-50, -40]"] += 1;
          break;
        case data.value <= -30:
          count["(-40, -30]"] += 1;
          break;
        case data.value <= -20:
          count["(-30, -20]"] += 1;
          break;
        case data.value <= -10:
          count["(-20, -10]"] += 1;
          break;
        case data.value <= 0:
          count["(-10, 0]"] += 1;
          break;
        case data.value <= 10:
          count["(0, 10]"] += 1;
          break;
        case data.value <= 20:
          count["(10, 20]"] += 1;
          break;
        case data.value <= 30:
          count["(20, 30]"] += 1;
          break;
        case data.value <= 40:
          count["(30, 40]"] += 1;
          break;
        case data.value <= 50:
          count["(40, 50]"] += 1;
          break;
        case data.value <= 60:
          count["(50, 60]"] += 1;
          break;
        case data.value <= 70:
          count["(60, 70]"] += 1;
          break;
        case data.value <= 80:
          count["(70, 80]"] += 1;
          break;
        case data.value <= 90:
          count["(80, 90]"] += 1;
          break;
        case data.value <= 100:
          count["(90, 100]"] += 1;
          break;
        default:
          break;
      }

      //setValues(Object.values(count));
      // setValues([...values, Object.values(count)]);
    });
  }, [endpoint, ts1, count]);

  return (
    <div style={{ margin: "0 auto" }}>
      <Smoothie
        responsive
        // streamDelay={5000}
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
      <BarChart count={count} />
      {/* <Plot
          data={[{ type: "bar", x: Object.keys(count), y: Object.values(count) }]}
          layout={this.state.layout}
          onInitialized={figure => this.setState(figure)}
          onUpdate={figure => this.setState(figure)}
        /> */}
    </div>
  );
};

export default App;
