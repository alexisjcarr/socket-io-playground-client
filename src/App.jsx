import React, { useState, useEffect } from "react";
import { useSocket } from "./hooks";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import LineGraph from "./components/LineGraph";
import BarGraph from "./components/BarGraph";
import Form from "./components/AddThresholdForm";

import "./App.css";

const styles = {
  display: "flex",
  flexDirection: "row"
};

const App = () => {
  const [data, barData] = useSocket("https://just-for-practice.herokuapp.com/");
  const [threshold, setThreshold] = useState(NaN);
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
          `Alert threshold!!!
          ${data[data.length - 1].value} exceeds the specified threshold range of -${threshold} to ${threshold}`
        );
      }
    }
  }, [data, threshold]);

  return (
    <>
      <div style={styles}>
        <ToastContainer
          position={toast.POSITION.BOTTOM_RIGHT}
          hideProgressBar={true}
        />
        <LineGraph data={data} threshold={threshold} />
        <Form
          data={data}
          threshold={threshold}
          handleThresholdSubmit={handleThresholdSubmit}
          handleChange={handleChange}
          input={input}
        />
      </div>
      <BarGraph data={barData} />
    </>
  );
};

export default App;
