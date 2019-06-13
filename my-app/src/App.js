import React from 'react';
// import { Router, Route, Switch } from "react-router";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Counter from './Counter';
import logo from './logo.svg';
import './App.css';

function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function App() {
  return (
    <div>
      <div className="App-header"><h1>Hook Demos</h1></div>
      
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about/">About</Link>
              </li>
              <li>
                <Link to="/users/">Users</Link>
              </li>
            </ul>
          </nav>

          <Route path="/" exact component={Index} />
          <Route path="/about/" component={About} />
          <Route path="/users/" component={Counter} />
        </div>
      </Router>
    </div>
    
  );
}

export default App;
