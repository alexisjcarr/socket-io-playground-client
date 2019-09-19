import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceLine
} from "recharts";

const LineGraph = ({ data, threshold }) => {
  return (
    <LineChart width={2000} height={800} data={data}>
      <ReferenceLine
        y={threshold}
        label="Max Threshold"
        stroke="red"
        strokeDasharray="3 3"
      />
      <ReferenceLine
        y={0 - threshold}
        label="Min Threshold"
        stroke="red"
        strokeDasharray="3 3"
      />
      <Line type="monotone" dataKey="value" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <Tooltip />
      <XAxis dataKey="timestamp" />
      <YAxis />
    </LineChart>
  );
};

export default LineGraph;
