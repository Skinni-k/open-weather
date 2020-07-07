import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import IndividualDay from './Components/Each Day/IndividualDay';
import Error from "./Components/Error/Error";

function App() {
  return (
       <Router>
        <div className="App">
          <Header />
          <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/id=:id" exact component={IndividualDay} />
          <Route component={Error} />
          </Switch>
        </div>
       </Router>
  );
}

export default App;
