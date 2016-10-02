import React, { Component } from 'react';
// import Legend from './Legend';
import Header from './Header';
import TagList from './TagList';
import Radar from './Radar';
import Filter from './Filter';
import './App.css';
import 'font-awesome/css/font-awesome.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
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

