import React, { Component } from 'react';

class Map extends Component {
    initMap = () => {
        console.log("Mock running")
    };

    componentDidUpdate(){
        this.initMap();
    };

    render() {
        return(
            <div className="map__holder">
                <div id="map-js"></div>
            </div>
        );
    };
};

export default Map;