import React from 'react';
import './Homepage.css'

function Frame() {
    return (
        <div>
            <div className="mainBox">
            <div className="h1e">
                    <h2>CONTAMINATION ZONE</h2>
                    </div>
            <iframe src="https://maps.mapmyindia.com/corona?containment_zone_gradient" title="myFrame" width="400px" height="600px"></iframe>

            </div>
            <br></br>
            <br></br>
        </div>
    )
}

export default Frame;
