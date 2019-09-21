import React, { useState } from "react";
import { useSocket } from "./hooks";

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

  return (
    <div>
      <div style={styles}>
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
    </div>
  );
};

export default App;
