import React from "react";
import { render, cleanup } from "@testing-library/react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from "./App";
import Line from "../Line";
import Bar from "../Bar";
import Form from "../Form";

configure({ adapter: new Adapter() });

describe("<App />", () => {
  let wrapper;
  let originalWarning, originalError;

  beforeEach(() => {
    wrapper = shallow(<App />);

    // Handles error/warning messages
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
    expect(render(<App />)).toMatchSnapshot();
  });

  it("contains <Line />", () => {
    expect(wrapper.find(Line)).toBeTruthy();
  });

  it("contains <Bar />", () => {
    expect(wrapper.find(Bar)).toBeTruthy();
  });

  it("contains <Form />", () => {
    expect(wrapper.find(Form)).toBeTruthy();
  });
});
