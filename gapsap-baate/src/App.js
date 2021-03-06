import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "antd/dist/antd.css";
import "font-awesome/css/font-awesome.min.css";

import Home from "./Home";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Home} />
            </Switch>
        </Router>
    );
}

export default App;
    