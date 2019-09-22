import React from "react";
import { render } from "@testing-library/react";

import Line from ".";

describe("<Line />", () => {
  it("matches snapshot", () => {
    const originalError = console.warn;
    console.warn = jest.fn();
    expect(render(<Line />)).toMatchSnapshot();
    console.warn = originalError;
  });
});
