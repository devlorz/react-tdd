import React from "react";
import { render } from "react-testing-library";
import "dom-testing-library/extend-expect";
import Joke from "../joke";

test("Joke Component receives props and then renders text", () => {
  const { getByTestId } = render(<Joke text="the funniest joke." />);

  expect(getByTestId("joke-text")).toHaveTextContent("the funniest joke.");
});

test("JokeGenerator Component fetches random jokes and render it", () => {
  const { getByText } = render(<JokeGenerator />);
  expect(getByText("You haven't loaded jokes yet")).toBeInTheDOM();
});
