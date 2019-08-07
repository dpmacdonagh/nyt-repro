import React from "react";
import { render } from "react-dom";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import ListsOverview from "components/ListsOverview/ListsOverview";
import AppContext from "components/AppContext/AppContext";
import Layout from "./components/Layout/Layout";
import "styles/index.scss";

const App = () => {
  return (
    <AppContext>
      <Layout>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ListsOverview} />
          </Switch>
        </BrowserRouter>
      </Layout>
    </AppContext>
  );
};
render(<App />, document.getElementById("app"));
