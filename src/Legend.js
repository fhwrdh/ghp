import React from 'react';
import './Legend.css';

const Legend = () => {
    return (
        <div className="legend">

            <div className="guts-section">
                <div className="guts-section-title">preferred</div>
                <div className="guts-section-body">
                    Get wider dept. buy-in before using something other than this.
                </div>
            </div>

            <div className="guts-section">
                <div className="guts-section-title">accepted</div>
                <div className="guts-section-body">
                    Pick from any one of these.
                </div>
            </div>

            <div className="guts-section">
                <div className="guts-section-title">experimental</div>
                <div className="guts-section-body">
                    We're experimenting with it. Experiments typically have these qualities:
                    <ul>
                        <li>self-contained/isolated (wrt area of code, etc)</li>
                        <li>easy to back-out</li>
                        <li>non-business-critical spot</li>
                        <li>has a non-trival, potential benefit</li>
                    </ul>
                </div>
            </div>

            <div className="guts-section">
                <div className="guts-section-title">out of favor</div>
                <div className="guts-section-body">
                    Might see this in the code. Actively eradicate where able.
                </div>
            </div>
        </div>
    );
}


export default Legend;
