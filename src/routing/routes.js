import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "../components/Main";
import Shop from "../components/Shop";

const Routes = () => {
    return <Router>
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path={`/shop/:id`} exact component={Shop} />
        </Switch>
    </Router>

}

export default Routes;