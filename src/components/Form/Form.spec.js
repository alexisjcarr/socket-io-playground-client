import React from "react";
import { render } from "@testing-library/react";

import Form from ".";

describe("<Form />", () => {
  it("matches snapshot", () => {
    expect(render(<Form />)).toMatchSnapshot();
  });
});