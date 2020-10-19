import React, { Component } from 'react';
import { MapProperties } from '../types/state';

class Map extends Component<Props> {
    initMap = () => {
        //declare element with html element type
        const el = document.getElementById("map-js") as HTMLElement;

        const options: MapOptions = {
            center: {
                lat: -27.9959656,
                lng: 153.2879044,
            },
            zoom: 9
        };

        //create map and pass in geojson data
        const map = new window.google.maps.Map(el, options);
        map.data.addGeoJson(this.props.data);
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

//types for mapJSON as props
interface Props {
    data: MapProperties
};

//types for google options
interface MapOptions {
    center: {
        lat: number,
        lng: number
    },
    zoom: number
};

export default Map;