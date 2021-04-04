import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../containers/Home";
import Login from "../containers/Login";
import Logup from "../containers/Register";
import NotFound from "../containers/NotFound";
import Layout from "../components/Loyout";
import Player from "../containers/Player";
const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/player/:id" component={Player} />
        <Route exact path="/" component={Home} />
        <Route exact path="/logup" component={Logup} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);
export default App;
