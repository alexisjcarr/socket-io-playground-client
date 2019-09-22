import React from "react";
import { render } from "@testing-library/react";

import Line from ".";

describe("<Line />", () => {
  it("matches snapshot", () => {
    expect(render(<Line />)).toMatchSnapshot();
  });
});
