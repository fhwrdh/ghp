import R from 'ramda';

const concatIfExists = (prev, curr) => R.concat(prev, curr.tags ? curr.tags : []);

export const parseTags = radarData => {
    return R.pipe(
        R.values,
        R.flatten,
        R.reduce(concatIfExists, []),
        R.uniq,
        R.sortBy(R.toLower),
        R.map(t => ({ name: t, selected: false }))

    )(radarData);
};
export const parseRadar = text => {
    const radarData = {};

    let currentCategory;
    let currentItem = {};
    text.split('\n').forEach((line, index) => {
        if(line.indexOf("[") === 0) {
            currentCategory=line.substr(1, line.length-2);
            radarData[currentCategory] = [];
        }
        else if(line.length > 0 && line[0] !== ' ') {
            currentItem = {};
            currentItem.name = line;
            radarData[currentCategory].push(currentItem);
        }
        else if(line.trim().indexOf("status:") === 0) {
            currentItem.status = line.trim().replace("status:", "").trim();
        }
        else if(line.trim().indexOf("notes:") === 0) {
            currentItem.notes = line.trim().replace("notes:", "").trim();
        }
        else if(line.trim().indexOf("tags:") === 0) {
            currentItem.tags = line.trim().replace("tags:", "").trim().split(",");
            currentItem.tags = currentItem.tags.map(t => t.trim() );

        }
    });
    return radarData;
}

