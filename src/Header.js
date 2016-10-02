import React from 'react';
import { connect } from 'react-redux';
import { toggleLegend, updateStatusFilter } from './actions';
import Legend from './Legend';

import './Header.css';
import 'font-awesome/css/font-awesome.css';
import logo from './new-cj-logo-icon.svg';

const LegendArrow = ({ legendVisible, onClick }) =>
    <div className="legend-arrow" onClick={onClick}>
        <i className={"fa fa-angle-double-" + (legendVisible ? 'up' : 'down')} aria-hidden="true"></i>
    </div>;


const Header = ({ legendVisible, toggleLegend, statusFilter, updateStatusFilter }) => {
    return (
        <div className="header">
            <div className="header-left">
                <img src={logo} className="header-logo" alt="logo" />
                <span className="header-title">CJ Technology Radar</span>
            </div>
            <div className="header-right">

                <div
                    className={ "status-button " + ((statusFilter === 'preferred') ? 'active' : '') }
                    onClick={() => updateStatusFilter('preferred')}>
                    <div className="status-button-inner bg-preferred-solid">
                        Preferred
                    </div>
                </div>

                <div
                    className={ "status-button " + ((statusFilter === 'accepted') ? 'active' : '') }
                    onClick={() => updateStatusFilter('accepted')}>
                    <div className="status-button-inner bg-accepted-solid">
                        Accepted
                    </div>
                </div>

                <div
                    className={ "status-button " + ((statusFilter === 'experimental') ? 'active' : '') }
                    onClick={() => updateStatusFilter('experimental')}>
                    <div className="status-button-inner bg-experimental-solid">
                        Experimental

                    </div>
                </div>

                <div
                    className={ "status-button " + ((statusFilter === 'outoffavor') ? 'active' : '') }
                    onClick={() => updateStatusFilter('outoffavor')}>
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
        legendVisible: state.legendVisible,
        statusFilter: state.statusFilter
    };
};

const mapDispatchToProps  = dispatch => {
    return {
        toggleLegend: () => dispatch(toggleLegend()),
        updateStatusFilter: (statusFilter) => dispatch(updateStatusFilter(statusFilter))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);


