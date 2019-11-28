import React from 'react';
import './App.css';
import Login from './components/login/login'
import Chat from './components/chat/chat';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route path="/chat" component={Chat} />
            <Route path="/" component={Login} />
        </Switch>
      </Router>
    </div>
    
  );
}

export default App;
