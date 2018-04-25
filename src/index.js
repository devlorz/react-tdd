import React from "react";
import { render } from "react-dom";
import JokeGenerator from "./jokeGenerator";

const App = () => <JokeGenerator />;

render(<App />, document.getElementById("root"));
