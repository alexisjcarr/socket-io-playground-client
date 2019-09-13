import React from "react";
import Data from "./Data";

const DataList = ({ data }) => {
  return (
    <>
      {data.map((data, id) => (
        <Data data={data} key={id} />
      ))}
    </>
  );
};

export default DataList;
