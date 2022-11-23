import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import {RouteCustom} from '../components';

//on importe ici les composants views
import {Home, Error, Download} from './';

function Navigation() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/not-found" exact component={Error} />
        <RouteCustom path='/' exact>
          <Home />
        </RouteCustom>
        <RouteCustom path='/telechargement' exact>
          <Download />
        </RouteCustom>
        <Redirect from="*" to="/not-found" />
      </Switch>
    </BrowserRouter>
  );
}

export default Navigation;
