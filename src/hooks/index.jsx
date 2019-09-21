import { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";

export const useSocket = serverURL => {
  const [endpoint] = useState(serverURL);
  const [data_, setData] = useState([]);
  const [correctedBarData, setCorrectedBarData] = useState();
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
      console.log("client connected");

      data.timestamp = new Date().toTimeString().split(' ')[0];

      console.log(data);

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

    // console.log(correcbarData);

    return () => socket.close(); // prevents the spazzing out
  }, [endpoint, data_, barData, correctedBarData]);

  return [data_, correctedBarData];
};
