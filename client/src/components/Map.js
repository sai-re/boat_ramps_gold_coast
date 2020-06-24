import React, {Component} from 'react';


class Map extends Component {

    constructor(props) {
        super(props)
    }

    initMap = () => {
        //create map
        const map = new window.google.maps.Map(document.getElementById("map-js"), {
            center: {
                lat: -27.9959656,
                lng: 153.2879044,
            },
            zoom: 10
        });

        map.data.loadGeoJson('http://localhost:4000/api/assets');
    }

    componentDidUpdate = () => this.initMap();

    render() {
        return(
            <div className="map__holder">
                <div id="map-js"></div>
            </div>
        )
    }
}

export default Map;