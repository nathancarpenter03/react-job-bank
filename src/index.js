// Load React
import React from 'react';
import ReactDOM from 'react-dom';

// Load components
import Routes from './Routes';

// GLobal Config (can switch beetween local and ngrok/heroku)
// window.apiHost = 'http://localhost:3001';
// window.apiHost = 'http://c6b17635.ngrok.io';

// Render root component
ReactDOM.render(
    <Routes />,
    document.getElementById('root')
);