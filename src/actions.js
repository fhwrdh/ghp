export const SET_TAGS = 'SET_TAGS';
export const SET_RADAR_DATA = 'SET_RADAR_DATA';
export const TOGGLE_TAG = 'TOGGLE_TAG';
export const UPDATE_FILTER = 'UPDATE_FILTER';

export function setRadarData(radarData) {
    return { type: SET_RADAR_DATA, radarData }
};

export const setTags = (tags) => {
    return { type: SET_TAGS, tags };
}

export function toggleTag(tagName) {
    return { type: TOGGLE_TAG, tagName };
}

export function updateFilter(filterText) {
    return { type: UPDATE_FILTER, filterText };
}

