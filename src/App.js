import React, { Component } from 'react';
import logo from './new-cj-logo-icon.svg';
import './App.css';
import Legend from './Legend';
import TagList from './TagList';

class App extends Component {
    render() {
        console.log(this.props.radar);
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <span className="App-title">CJ Technology Radar</span>
                </div>
                <div className="App-body">
                    <Legend />
                    <TagList tags={this.props.tags} />


                </div>
            </div>
        );
    }
}


export default App;

