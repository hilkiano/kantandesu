import React, { useState } from "react";
import ReactDOM from "react-dom";
import theme from "./ui/Theme";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./ui/Header";
import Homepage from "./Homepage";
import Cheatsheet from "./Cheatsheet";
import Quiz from "./Quiz";

function App() {
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Header value={value} setValue={setValue} />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Homepage {...props} setValue={setValue} />}
          />
          <Route
            exact
            path="/cheatsheet"
            render={(props) => <Cheatsheet {...props} setValue={setValue} />}
          />
          <Route
            exact
            path="/quiz"
            render={(props) => <Quiz {...props} setValue={setValue} />}
          />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

if (document.getElementById("root")) {
  ReactDOM.render(<App />, document.getElementById("root"));
}
