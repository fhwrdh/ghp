import React from 'react';
import R from 'ramda';
import classnames from 'classnames';
import Collapsible from 'react-collapsible';
import { connect } from 'react-redux';

import './Radar.css';

const RadarItemTitle = ({ name, status, extraClass }) => {
    const classes = {
        'radar-item': true,
        'radar-item-title': true
    };
    classes['border-'+status] = true;
    if (extraClass) classes[extraClass] = true;

    return (
        <div className={classnames(classes)}>{name}</div>
    );
};

const RadarItemGutsSection = ({ title, body }) => {
    return (
        <div className="guts-section">
            <div className="guts-section-title">{ title }</div>
            <div className="guts-section-body">{ body }</div>
        </div>
    );
}
const RadarItemTags = ({ tags }) =>
    <RadarItemGutsSection title="tags" body={ tags.join(', ')} />;

const RadarItemNotes = ({ notes }) =>
    <RadarItemGutsSection title="notes" body={notes} />;

const RadarItemGuts = ({ status, tags, notes }) => {
    const classes = { 'radar-item-guts': true };
    classes['border-'+status] = true;
    classes['bg-'+status] = true;

    if (!tags) tags = ['none'];
    return (
        <div className={classnames(classes)}>
            { <RadarItemTags tags={tags} />}
            { notes && <RadarItemNotes notes={notes} /> }
        </div>
    );
}

const RadarItem = ({name, status, tags, notes}) => {
    const title = <RadarItemTitle name={name} status={status} />;
    const titleOpened = <RadarItemTitle name={name} extraClass={"bg-" + status} status={status} />;

    return (
        <Collapsible
            trigger={title}
            triggerWhenOpen={titleOpened}
            transitionTime={0}>
            <RadarItemGuts name={name} status={status} tags={tags} notes={notes} />
        </Collapsible>
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
const filterByStatus = (data, statusFilter) => {
    console.log('filter:', statusFilter);
    if (!statusFilter) return data;

    const matchStatusFilter = items =>
        items.filter(item => item.status.toLowerCase() === statusFilter);

    return Object.keys(data).reduce((p, c) => {
        p[c] = matchStatusFilter(data[c]);
        return p;
    },
    {});
}

const filterData = ({ radarData, tags, filterText, statusFilter }) => {
    return filterByStatus( filterByText( filterByTags(radarData, tags), filterText), statusFilter);
};

const mapStateToProps = state => {
    return {
        radarData: filterData(state)
    };
}

export default connect(
    mapStateToProps
)(Radar);

