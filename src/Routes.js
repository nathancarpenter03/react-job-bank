// Load React
import React from 'react';

// import apps

// Load React Router

import { Router, Route, browserHistory } from 'react-router';

// Load page view components
import App from './components/App';
import Home from './components/Home';


// Configure routes
class Routes extends React.Component {
    render() {
        return <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
                <Route path="/" component={App} />
                <Route path="/home" component={Home} />
            </Router>
    }
}

export default Routes;
