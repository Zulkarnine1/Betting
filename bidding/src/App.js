import React from "react";
import Header from "./components/Header";
import User from "./pages/User";
import BetPage from "./pages/BetPage";
import Home from "./pages/Home";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Message from "./components/Message";
import history from "./history";

function App() {
  return (
    <Router history={history}>
      <Header />
      <Message />
      <Switch>
        <Route exact path="/" component={Home} />
        <ProtectedRoute exact path="/user" component={User} />
        <Route exact path="/bet" component={BetPage} />
        <Redirect from="*" to="/404" />
      </Switch>
    </Router>
  );
}

export default App;
