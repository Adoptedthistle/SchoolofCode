import React from "react";
import { unmountComponentAtNode, render } from "react-dom";
import PigeonItem from "./PigeonItem";
import { act } from "react-dom/test-utils";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders PigeonItem with or without props", () => {
  act(() => {
    render(<PigeonItem />, container);
  });
  expect(
    container.querySelector(`.pigeon-item > div > p:nth-child(2)`).textContent
  ).toBe("name: unknown");
});
