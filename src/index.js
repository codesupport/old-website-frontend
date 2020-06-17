import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Home from "./components/pages/Home";
import Community from "./components/pages/Community";
import Resources from "./components/pages/Resources";
import Profile from "./components/pages/Profile";

import "../node_modules/uikit/dist/css/uikit.min.css";
import "./css/style.css";
import LoginPage from "./components/pages/LoginPage";

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/community" component={Community} />
                <Route exact path="/resources" component={Resources} />
                <Route exact path="/login" component={LoginPage} />
                <Route path="/profile/:alias" component={Profile} />
            </Switch>
        </BrowserRouter>
    );
}

ReactDOM.render(<Router />, document.querySelector("#app"));