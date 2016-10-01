import React, { Component } from 'react';
// import Legend from './Legend';
import TagList from './TagList';
import Radar from './Radar';
import Filter from './Filter';

import logo from './new-cj-logo-icon.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <span className="App-title">CJ Technology Radar</span>
                </div>
                <div className="App-body">
                    <div className="App-sidebar">
                        <Filter />
                        <TagList />
                    </div>
                    <div className="App-content">
                        <Radar />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

