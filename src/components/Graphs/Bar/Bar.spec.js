import React from "react";
import { render } from "@testing-library/react";

import Bar from ".";

describe("<Bar />", () => {
  it("matches snapshot", () => {
    expect(render(<Bar />)).toMatchSnapshot();
  });
});
