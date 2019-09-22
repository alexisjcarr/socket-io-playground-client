import React from "react";
import { useSocket, useThreshold } from "../../hooks";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import LineGraph from "../Line";
import BarGraph from "../Bar";
import Form from "../Form";

import "./App.scss";

const App = () => {
  const [data, barData] = useSocket("https://just-for-practice.herokuapp.com/");
  const [
    threshold,
    handleChange,
    handleThresholdSubmit,
    toast,
    input
  ] = useThreshold(data);

  return (
    <div className="App">
      <ToastContainer
        position={toast.POSITION.BOTTOM_RIGHT}
        hideProgressBar={true}
      />
      <div className="Graphs">
        <div className="Graph">
          <LineGraph data={data} threshold={threshold} />
        </div>
        <div className="Graph">
          <BarGraph data={barData} />
        </div>
      </div>

      <div className="form">
        <Form
          data={data}
          threshold={threshold}
          handleThresholdSubmit={handleThresholdSubmit}
          handleChange={handleChange}
          input={input}
        />
      </div>
    </div>
  );
};

export default App;
