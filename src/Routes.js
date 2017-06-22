// Load React
import React from 'react';

// import apps

// Load React Router

import { Router, Route, browserHistory } from 'react-router';

// Load page view components
import App from './components/App';
import Home from './components/Home';
import Jobseeker from './components/Jobseeker';
import Employer from './components/Employer';

// Configure routes
class Routes extends React.Component {
    render() {
        return <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
                <Route path="/" component={App} />
                <Route path="/home" component={Home} />
                <Route path="/jobseeker" component={Jobseeker} />
                <Route path="/employer" component={Employer} />
            </Router>
    }
}

export default Routes;

// <Route path="/nav" component={Nav} />