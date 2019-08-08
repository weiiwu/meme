import React, { Component } from "react";
import Dashboard from "./components/dashboard/Dashboard";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Dashboard />
        </div>
      </Router>
    );
  }
}

export default App;
