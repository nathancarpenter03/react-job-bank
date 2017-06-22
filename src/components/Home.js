import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import Jobseeker from './Jobseeker';

class Home extends Component {

     constructor(props) {
        super(props)
        // Bind custom methods to object context
       
        // Set initial state
       
    }

    // React lifecycle methods


    // API methods
     

    render() {
        return (
            <div className="container">
                <h1>Job Bank App</h1>
                <Link to="/jobseeker">
                    <button className="btn btn-primary" id="btn-job-bank">I'm a Job Seeker</button>  
                </Link><br/>
                <Link to="/employer">
                    <button className="btn btn-primary" id="btn-job-bank">I'm an Employer</button>  
                </Link>
            </div>
        )
    }
}

export default Home;