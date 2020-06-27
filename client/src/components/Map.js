import React, {Component} from 'react';

class Map extends Component {

    initMap = () => {
        //create map and pass in geojson data
        const map = new window.google.maps.Map(document.getElementById("map-js"), {
            center: {
                lat: -27.9959656,
                lng: 153.2879044,
            },
            zoom: 9
        });
        
        map.data.addGeoJson(this.props.data);
    }

    componentDidUpdate(){
        this.initMap();
    }

    render() {
        return(
            <div className="map__holder">
                <div id="map-js"></div>
            </div>
        )
    }
}

export default Map;