import { useState, useEffect } from "react";

import socketIOClient from "socket.io-client";
import { toast } from "react-toastify";

// NOTE: Were this app to grow, I would have group the custom hooks in files that pertained to their functionality (i.e. auth related hooks would be in their own file).

/*=== useSocket takes in the websocket server URL (which I deployed using Heroku) and returns the barData and data for the line chart ===*/

export const useSocket = serverURL => {
  const [endpoint] = useState(serverURL);
  const [data_, setData] = useState([]);
  const [correctedBarData, setCorrectedBarData] = useState();
  // there was a strange bug where after setBarData ran, a numeric element was added to the state. I used this hook after every setBarData call to keep the state at the same length.

  // I know it's good practice to keep state relatively flat, but this was the format that the Recharts API requires for bar charts.
  const [barData, setBarData] = useState([
    {
      name: "[-100, -90]",
      value: 0
    },
    {
      name: "(-90, -80]",
      value: 0
    },
    {
      name: "(-80, -70]",
      value: 0
    },
    {
      name: "(-70, -60]",
      value: 0
    },
    {
      name: "(-60, -50]",
      value: 0
    },
    {
      name: "(-50, -40]",
      value: 0
    },
    {
      name: "(-40, -30]",
      value: 0
    },
    {
      name: "(-30, -20]",
      value: 0
    },
    {
      name: "(-20, -10]",
      value: 0
    },
    {
      name: "(-10, 0]",
      value: 0
    },
    {
      name: "(0, 10]",
      value: 0
    },
    {
      name: "(10, 20]",
      value: 0
    },
    {
      name: "(20, 30]",
      value: 0
    },
    {
      name: "(30, 40]",
      value: 0
    },
    {
      name: "(40, 50]",
      value: 0
    },
    {
      name: "(50, 60]",
      value: 0
    },
    {
      name: "(60, 70]",
      value: 0
    },
    {
      name: "(70, 80]",
      value: 0
    },
    {
      name: "(80, 90]",
      value: 0
    },
    {
      name: "(90, 100]",
      value: 0
    }
  ]);

  useEffect(() => {
    const socket = socketIOClient(endpoint);
    socket.on("data", data => {
      // console.log("client connected");

      data.timestamp = new Date().toTimeString().split(" ")[0];

      setData(prevData => [...prevData, data]);

      switch (true) {
        case data.value <= -90:
          setBarData(prevData => [...prevData, barData[0].value++]);
          setCorrectedBarData(
            barData.filter(element => typeof element === "object")
          );
          break;
        case data.value <= -80:
          setBarData(prevData => [...prevData, barData[1].value++]);
          setCorrectedBarData(
            barData.filter(element => typeof element === "object")
          );
          break;
        case data.value <= -70:
          setBarData(prevData => [...prevData, barData[2].value++]);
          setCorrectedBarData(
            barData.filter(element => typeof element === "object")
          );
          break;
        case data.value <= -60:
          setBarData(prevData => [...prevData, barData[3].value++]);
          setCorrectedBarData(
            barData.filter(element => typeof element === "object")
          );
          break;
        case data.value <= -50:
          setBarData(prevData => [...prevData, barData[4].value++]);
          setCorrectedBarData(
            barData.filter(element => typeof element === "object")
          );
          break;
        case data.value <= -40:
          setBarData(prevData => [...prevData, barData[5].value++]);
          setCorrectedBarData(
            barData.filter(element => typeof element === "object")
          );
          break;
        case data.value <= -30:
          setBarData(prevData => [...prevData, barData[6].value++]);
          setCorrectedBarData(
            barData.filter(element => typeof element === "object")
          );
          break;
        case data.value <= -20:
          setBarData(prevData => [...prevData, barData[7].value++]);
          setCorrectedBarData(
            barData.filter(element => typeof element === "object")
          );
          break;
        case data.value <= -10:
          setBarData(prevData => [...prevData, barData[8].value++]);
          setCorrectedBarData(
            barData.filter(element => typeof element === "object")
          );
          break;
        case data.value <= 0:
          setBarData(prevData => [...prevData, barData[9].value++]);
          setCorrectedBarData(
            barData.filter(element => typeof element === "object")
          );
          break;
        case data.value <= 10:
          setBarData(prevData => [...prevData, barData[10].value++]);
          setCorrectedBarData(
            barData.filter(element => typeof element === "object")
          );
          break;
        case data.value <= 20:
          setBarData(prevData => [...prevData, barData[11].value++]);
          setCorrectedBarData(
            barData.filter(element => typeof element === "object")
          );
          break;
        case data.value <= 30:
          setBarData(prevData => [...prevData, barData[12].value++]);
          setCorrectedBarData(
            barData.filter(element => typeof element === "object")
          );
          break;
        case data.value <= 40:
          setBarData(prevData => [...prevData, barData[13].value++]);
          setCorrectedBarData(
            barData.filter(element => typeof element === "object")
          );
          break;
        case data.value <= 50:
          setBarData(prevData => [...prevData, barData[14].value++]);
          setCorrectedBarData(
            barData.filter(element => typeof element === "object")
          );
          break;
        case data.value <= 60:
          setBarData(prevData => [...prevData, barData[15].value++]);
          setCorrectedBarData(
            barData.filter(element => typeof element === "object")
          );
          break;
        case data.value <= 70:
          setBarData(prevData => [...prevData, barData[16].value++]);
          setCorrectedBarData(
            barData.filter(element => typeof element === "object")
          );
          break;
        case data.value <= 80:
          setBarData(prevData => [...prevData, barData[17].value++]);
          setCorrectedBarData(
            barData.filter(element => typeof element === "object")
          );
          break;
        case data.value <= 90:
          setBarData(prevData => [...prevData, barData[18].value++]);
          setCorrectedBarData(
            barData.filter(element => typeof element === "object")
          );
          break;
        case data.value <= 100:
          setBarData(prevData => [...prevData, barData[19].value++]);
          setCorrectedBarData(
            barData.filter(element => typeof element === "object")
          );
          break;
        default:
          setBarData(prevData => prevData);
          break;
      }
    });

    return () => socket.close(); // effect cleanup
  }, [endpoint, data_, barData, correctedBarData]);

  return [data_, correctedBarData];
};

/*=== useThreshold allowed for me to abstract away both the controlled form component behavior and the programmatic rendering of the toast. Returns the controlled form functions, the threshold, toast and user input. ===*/

export const useThreshold = data => {
  const [threshold, setThreshold] = useState();
  const [input, setInput] = useState("");

  const handleThresholdSubmit = event => {
    event.preventDefault();
    setThreshold(Number(input));
    setInput("");
  };

  const handleChange = event => {
    setInput(event.target.value);
  };

  useEffect(() => {
    if (data.length > 1) {
      if (
        Math.abs(data[data.length - 1].value) > 0 &&
        Math.abs(data[data.length - 1].value) > threshold
      ) {
        toast.error(
          `${data[data.length - 1].value} exceeds the specified threshold range of -${threshold} to ${threshold}`
        );
      }
    }
  }, [data, threshold]);

  return [threshold, handleChange, handleThresholdSubmit, toast, input];
};
