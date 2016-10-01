import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
import { parseRadar, parseTags } from './radarParser';
import techRadarReducer from './reducers';
import { getRadarData } from './api';
import { setRadarData, setTags } from './actions';

import './index.css';

/*
store: {
    tags: [
        {
            name: 'javascript'
            selected: true
        },
        ...
    ],
    filterText: '',
    radarData: {
        ...
    }
}
*/
const store = createStore(
    techRadarReducer,
    window.devToolsExtension && window.devToolsExtension()
);

const loadRadarData = () => {
    getRadarData((data) => {
        const radarData = parseRadar(data);
        store.dispatch(setRadarData(radarData));
        store.dispatch(setTags(parseTags(radarData)));
    });
}

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
    loadRadarData()
);

