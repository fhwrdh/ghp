import React from 'react';
import { connect } from 'react-redux';
import { updateFilter } from './actions';

import './Filter.css';

const Filter = ({ onFilterChange }) => {
    return (
        <div className="filter">
            <div className="filter-title">Filter</div>
            <input
                ref={(i) => {i.focus()}}
                className="filter-input"
                type="text"
                onChange={(event) => onFilterChange(event.target.value)}/>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        onFilterChange: (filterText) => {
            dispatch(updateFilter(filterText));
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Filter);
