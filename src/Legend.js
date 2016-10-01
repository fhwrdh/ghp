import React from 'react';
import './Legend.css';

const Legend = () => {
    return (
        <div className="legend">
            <div>
                <div className="legend-entry legend-preferred">Preferred</div>
                <div className="legend-entry legend-accepted">Accepted</div>
                <div className="legend-entry legend-experimental">Experimental</div>
                <div className="legend-entry legend-outoffavor">Out of Favor</div>
            </div>
        </div>
    );
}


export default Legend;
