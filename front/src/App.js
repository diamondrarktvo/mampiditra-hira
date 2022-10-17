import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

//on importe ici les composants views
import Home from './views/home';
import Error from './views/error';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/not-found" exact component={Error} />
        <Redirect from="*" to="/not-found" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
