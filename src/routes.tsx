import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import Search from "./pages/Search";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route component={Search} path="/:type?" exact />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
