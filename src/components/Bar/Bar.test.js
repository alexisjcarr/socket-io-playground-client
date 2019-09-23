import React from "react";
import { render, cleanup } from "@testing-library/react";

import Bar from "./Bar";

describe("<Bar />", () => {
  let originalWarning, originalError;

  beforeEach(() => {
    originalWarning = console.warn;
    originalError = console.error;
    console.error = jest.fn();
    console.warn = jest.fn(); // temporarily sets console.warn to a jest function
  });

  afterEach(() => {
    cleanup();
    console.warn = originalWarning; // turns it back into the original error after test runs
    console.error = originalError;
  });

  it("matches snapshot", () => {
    expect(render(<Bar />)).toMatchSnapshot();
  });
});
