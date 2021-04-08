import React from 'react';
import './App.css';
import NavigationBar from "./Components/GlobalComponents/NavigationBar";
import Home from "./Pages/Home";
import Features from "./Pages/Features";
import Contact from "./Pages/Contact";
import Demo from "./Pages/Demo";
import About from "./Pages/About";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

const App = () => {
    return (
        <Router>
            <NavigationBar/>
            <Switch>
                <Route path={"/"} exact component={Home}/>
                <Route path={"/features"} component={Features}/>
                <Route path={"/about"} component={About}/>
                <Route path={"/demo"} component={Demo}/>
                <Route path={"/contact"} component={Contact}/>
            </Switch>
        </Router>
    );
}

export default App;
