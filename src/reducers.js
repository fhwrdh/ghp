import { combineReducers } from 'redux';
import { TOGGLE_TAG, UPDATE_FILTER, SET_RADAR_DATA, SET_TAGS } from './actions';

const radarData = (state = {}, action) => {
    switch(action.type) {
        case SET_RADAR_DATA: return action.radarData;
        default: return state;
    }
};

const filterText = (state = '', action) => {
    switch(action.type) {
        case UPDATE_FILTER:
            return action.filterText;
        default: return state;
    }
};

const tags = (state = [], action) => {
    switch(action.type) {
        case SET_TAGS:
            return action.tags;
        case TOGGLE_TAG:
            return state.map(tag => {
                if (tag.name === action.tagName) {
                    return Object.assign({}, tag, { selected: !tag.selected });
                }
                return tag;
            });
        default: return state;
    }
};

export default combineReducers({
    filterText,
    tags,
    radarData
});

