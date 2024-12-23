import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        {/* Add other routes here */}
      </Switch>
    </Router>
  );
}

export default App;


