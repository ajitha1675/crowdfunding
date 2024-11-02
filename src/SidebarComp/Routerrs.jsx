import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../Components/Home';
import AboutPage from './About';
import ContactPage from './ContactPage';
import FundraiserPage from './FundsRaiserpage';

function AppRouter() {
  return (
    <Router>
      <Switch>
        {/* Define the route for the home page */}
        <Route exact path="/" component={HomePage} />

        {/* Define the route for the about page */}
        <Route path="/about" component={AboutPage} />

        {/* Define the route for the contact page */}
        <Route path="/contact" component={ContactPage} />

        {/* Define the route for individual fundraiser pages */}
        <Route path="/fundraiser/:fundraiserId" component={FundraiserPage} />
        
        {/* Add a fallback route for 404 Not Found */}
        <Route path="*">
          <div className="text-center text-white bg-gray-800 min-h-screen flex items-center justify-center">
            <h1>404 - Page Not Found</h1>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default AppRouter;
