import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { toggleTag } from './actions';

import './Tag.css';

const Tag = ({ name, selected, onClick }) => {
    const classes = {
        tag: true,
        'tag-selected': selected
    };
    return (
        <div className={classnames(classes)} onClick={() => onClick(name)} >
            {name}
        </div>
    );
}

const TagList = ({ tags, onToggleTag }) => {
    return (
        <div>
            {tags.map(t => <Tag key={t.name} {...t} onClick={onToggleTag} />)}
        </div>
    );

}

const mapStateToProps = state => {
    return {
        tags: state.tags
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onToggleTag: tagName => dispatch(toggleTag(tagName))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TagList);

