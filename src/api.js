
export const getRadarData = (cb) => {
    fetch('radar.txt')
        .then(response => {
            return response.text();
        })
        .then(body => {
            cb(body);
        });
};

