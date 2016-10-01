import React from 'react';
import R from 'ramda';
import { connect } from 'react-redux';

import './Radar.css';

const RadarItem = ({ name, status, tags, notes }) => {
    let tagText = 'No tags';
    if (tags) tagText = tags.join(' | ');
    return (
        <div className={"radar-item " + status } title={tagText} >
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

const filterData = ({ radarData, tags }) => {
    const selectedTagNames = tags
        .filter(t => t.selected)
        .map(t => t.name);
    if (selectedTagNames.length === 0) return radarData;

    const filterItemsByTags = items => {
        return items.filter((item) => {
            return item.tags && R.any(tag => R.contains(tag, item.tags))(selectedTagNames);
        });
    }

    return Object.keys(radarData).reduce((p, c) => {
        p[c] = filterItemsByTags(radarData[c]);
        return p;
    },
    {});
};

const mapStateToProps = state => {
    return {
        radarData: filterData(state)
    };
}

export default connect(
    mapStateToProps
)(Radar);

