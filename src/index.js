import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { parseRadar } from './radarParser';

import './index.css';

const render = (radarData, tags) => {
    ReactDOM.render(
      <App radar={radarData} tags={tags} />,
      document.getElementById('root')
    );
}

fetch('radar.txt')
    .then(response => {
        return response.text();
    })
    .then(body => {
        render(parseRadar(body));
    });




