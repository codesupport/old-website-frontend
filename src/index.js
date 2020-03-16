import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Navigation from "./components/molecules/Navigation";
import Index from "./components/pages/Index";
import Community from "./components/pages/Community";
import Resources from "./components/pages/Resources";
import Profile from "./components/pages/Profile";

import "./css/style.scss";

function Router() {
    return (
        <BrowserRouter>
            <Navigation />
            <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/community" component={Community} />
                <Route exact path="/resources" component={Resources} />
                <Route path="/profile/:alias" component={Profile} />
            </Switch>
        </BrowserRouter>
    );
}

ReactDOM.render(<Router />, document.querySelector("#app"));