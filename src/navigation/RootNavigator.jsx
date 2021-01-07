import React from 'react';
import routes from "./routes";
import { Route, Switch } from "react-router";
import { HashRouter } from "react-router-dom";

export const RootNavigator = () => {
    return (
        <HashRouter>
            <Switch>
                {Object.keys(routes).map((routeName)=>
                    <Route
                        key={routeName}
                        name={routeName}
                        path={routes[routeName].route}
                        component={routes[routeName].component}
                        exact
                    />
                )}
            </Switch>
        </HashRouter>
    )
}

