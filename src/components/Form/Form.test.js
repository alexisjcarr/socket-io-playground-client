import React from "react";
import { render, cleanup, fireEvent, act } from "@testing-library/react";

import Form from "./Form";

describe("<Form />", () => {
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
    expect(render(<Form />)).toMatchSnapshot();
  });

  it("should submit user input threshold", () => {
    const spy = jest.fn();
    const { getByText } = render(<Form handleThresholdSubmit={spy} />);
    expect(spy).not.toBeCalled();
    fireEvent.click(getByText("Submit"));
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
