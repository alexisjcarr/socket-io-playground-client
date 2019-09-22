import React from "react";
import { render } from "@testing-library/react";

import App from ".";

describe("<App />", () => {
  it("matches snapshot", () => {
    const originalError = console.warn;
    console.warn = jest.fn();
    expect(render(<App />)).toMatchSnapshot();
    console.warn = originalError;
    // warnings were annoying, so I silenced them. (https://til.hashrocket.com/posts/hrhejhqg2n-turn-off-console-error-messages-in-a-test)
  });
});
