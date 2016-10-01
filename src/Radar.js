import React from 'react';
import R from 'ramda';
import { connect } from 'react-redux';

import './Radar.css';

const RadarItem = ({ name, status, tags, notes }) => {
    let tagText = 'No tags';
    if (tags) tagText = tags.join(' | ');
    return (
        <div className={"radar-item border-" + status } title={tagText} >
            { name }
        </div>
    );
};

const statusMap = {
    preferred: 1,
    accepted: 2,
    experimental: 3,
    outoffavor: 4
};

const byStatus = (a,b) => statusMap[a.status] - statusMap[b.status];

const RadarCategory = ({ categoryName, data}) => {
    return (
        <div className="radar-category">
            <div className="radar-category-title">
                { categoryName }
            </div>
            <div>
                { data
                    .sort(byStatus)
                    .map((item, idx) => <RadarItem key={idx} {...item} />)
                }
            </div>
        </div>
    );
}

const Radar = ({ radarData }) => {
    return (
        <div className="radar">
            { Object.keys(radarData).map(
                catKey => <RadarCategory
                    key={catKey}
                    categoryName={catKey}
                    data={radarData[catKey]} />
            )}
        </div>
    );
};

const filterByTags = (radarData, tags) => {
    const selectedTagNames = tags
        .filter(t => t.selected)
        .map(t => t.name);
    if (selectedTagNames.length === 0) return radarData;

    const filterItemsByTags = items =>
        items.filter((item) => item.tags && R.any(tag => R.contains(tag, item.tags))(selectedTagNames));

    return Object.keys(radarData).reduce((p, c) => {
        p[c] = filterItemsByTags(radarData[c]);
        return p;
    },
    {});
}

const filterByText = (data, filterText) => {
    const matchText = items =>
        items.filter(item => item.name.toLowerCase().indexOf(filterText) !== -1);

    return Object.keys(data).reduce((p, c) => {
        p[c] = matchText(data[c]);
        return p;
    },
    {});
}

const filterData = ({ radarData, tags, filterText }) => {
    return filterByText(filterByTags(radarData, tags), filterText);
};

const mapStateToProps = state => {
    return {
        radarData: filterData(state)
    };
}

export default connect(
    mapStateToProps
)(Radar);

