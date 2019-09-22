import React from "react";
import { render } from "@testing-library/react";

import Bar from ".";

describe("<Bar />", () => {
  it("matches snapshot", () => {
    const originalError = console.warn;
    console.warn = jest.fn();
    expect(render(<Bar />)).toMatchSnapshot();
    console.warn = originalError;
  });
});
