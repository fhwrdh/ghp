import React from 'react';
import { connect } from 'react-redux';
import { toggleLegend } from './actions';
import Legend from './Legend';

import './Header.css';
import 'font-awesome/css/font-awesome.css';
import logo from './new-cj-logo-icon.svg';

const LegendArrow = ({ legendVisible, onClick }) =>
    <div className="legend-arrow" onClick={onClick}>
        <i className={"fa fa-angle-double-" + (legendVisible ? 'up' : 'down')} aria-hidden="true"></i>
    </div>;

const Header = ({ legendVisible, toggleLegend }) => {
    return (
        <div className="header">
            <div className="header-left">
                <img src={logo} className="header-logo" alt="logo" />
                <span className="header-title">CJ Technology Radar</span>
            </div>
            <div className="header-right">
                <div className="status-button border-preferred-solid">
                    <div className="status-button-inner bg-preferred-solid">
                        Preferred
                    </div>
                </div>
                <div className="status-button">
                    <div className="status-button-inner bg-accepted-solid">
                        Accepted
                    </div>
                </div>
                <div className="status-button">
                    <div className="status-button-inner bg-experimental-solid">
                        Experimental

                    </div>
                </div>
                <div className="status-button">
                    <div className="status-button-inner bg-outoffavor-solid">
                        Out of Favor
                    </div>
                </div>
                <LegendArrow legendVisible={legendVisible} onClick={toggleLegend} />
                { legendVisible && <Legend/> }
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        legendVisible: state.legendVisible
    };
};

const mapDispatchToProps  = dispatch => {
    return {
        toggleLegend: () => dispatch(toggleLegend())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);


