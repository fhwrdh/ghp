import React from 'react';
import './Legend.css';

const Legend = () => {
    return (
        <div className="legend">
            <div>
                <div className="legend-entry border-preferred">Preferred</div>
                <div className="legend-entry border-accepted">Accepted</div>
                <div className="legend-entry border-experimental">Experimental</div>
                <div className="legend-entry border-outoffavor">Out of Favor</div>
            </div>
        </div>
    );
}


export default Legend;
