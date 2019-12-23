import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Index from "./components/pages/Index";
import Community from "./components/pages/Community";
import Navigation from "./components/molecules/Navigation";

function Router() {
    return (
        <BrowserRouter>
            <Navigation/>
            <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/community" component={Community} />
            </Switch>
        </BrowserRouter>
    );
}

ReactDOM.render(<Router />, document.querySelector("#app"));