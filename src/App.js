import React from 'react';
import './App.css';
import { HashRouter as Router, Route } from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import IndividualDay from './Components/Each Day/IndividualDay';

function App() {
  return (
       <Router>
        <div className="App">
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/id=:id" exact component={IndividualDay} />
        </div>
       </Router>
  );
}

export default App;
