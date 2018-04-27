import React from "react";
import { render, Simulate, wait } from "react-testing-library";
import "dom-testing-library/extend-expect";
import Joke from "../joke";
import JokeGenerator from "../jokeGenerator";
import * as axios from "axios";
import MockAxios from "axios-mock-adapter";

const mock = new MockAxios(axios, { delayResponse: Math.random() * 500 });
afterAll(() => mock.restore());

test("Joke Component receives props and then renders text", () => {
  const { getByTestId } = render(<Joke text="the funniest joke." />);

  expect(getByTestId("joke-text")).toHaveTextContent("the funniest joke.");
});

test("JokeGenerator Component fetches random jokes and render it", async () => {
  mock.onGet().replyOnce(200, {
    value: {
      joke: "Really funny joke"
    }
  });

  const { getByText, queryByText, queryByTestId } = render(<JokeGenerator />);
  expect(getByText("You haven't loaded jokes yet")).toBeInTheDOM();

  Simulate.click(getByText("Load a random joke"));
  expect(queryByText("You haven't loaded jokes yet")).not.toBeInTheDOM();
  expect(queryByText("Loading...")).toBeInTheDOM();

  await wait(() => expect(queryByText("Loading...")).not.toBeInTheDOM());
  expect(queryByTestId("joke-text")).toBeInTheDOM();
});
