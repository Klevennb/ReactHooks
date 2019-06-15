import React from 'react';
// import { Router, Route, Switch } from "react-router";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'antd/dist/antd.css';

import Counter from './Counter';
import Weather from './Weather/Weather';
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
                <Link to="/weather/">Weather</Link>
              </li>
              <li>
                <Link to="/counter/">Counter</Link>
              </li>
            </ul>
          </nav>

          <Route path="/" exact component={Index} />
          <Route path="/weather/" component={Weather} />
          <Route path="/counter/" component={Counter} />
        </div>
      </Router>
    </div>
    
  );
}

export default App;
