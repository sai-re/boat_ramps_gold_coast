import React, {Component} from 'react';
import Map from './Map';
import MaterialChart from './MaterialChart';
import SizeChart from './SizeChart';

import { connect } from "react-redux";
import { 
    getData, 
    filterMaterial,
    filterSize,
    resetMap
} from "../js/actions/index";

import { MapProperties } from '../types/state';
import { Appstate } from '../js/store';

//define types for actions coming through connect
type DispatchProps = {
    getData: () => void, 
    filterMaterial: (name:string) => void,
    filterSize: (name:string) => void,
    resetMap: () => void
}

//link both types from actions and mapstatetoprops
type Props = DispatchProps & LinkStateProps

class FetchData extends Component<Props> {
	constructor(props: Props) {
		super(props);
        
        this.handleReset = this.handleReset.bind(this)
	}

    handleReset = () => {
        if(this.props.resetMap) this.props.resetMap();
    }
    
    componentDidMount() {
        if (this.props.getData) this.props.getData();
    }

	render() {      
		return (
            <div className='chart__container'>
                <h1 className="title">Boat ramps in Australia's Gold Coast</h1>
                <Map data={this.props.mapJSON} />

                <button className="button" onClick={this.handleReset}>reset map</button>

                <div className="chart__holders">
                    <MaterialChart data={this.props.geoJSON} filter={this.props.filterMaterial} />
                    
                    <SizeChart data={this.props.geoJSON} filter={this.props.filterSize} />
                </div>
            </div>
		);
	}
}

//define type for mapStateToProps
type LinkStateProps = {
    geoJSON: MapProperties,
    mapJSON: MapProperties
}

//get state from reducer
const mapStateToProps = (state: Appstate):LinkStateProps => ({
    geoJSON: state.geoJSON,
    mapJSON: state.mapJSON
});

//connect to store and recieve state and actions as prop
export default connect(mapStateToProps, {
    getData, 
    filterMaterial,
    filterSize,
    resetMap
})(FetchData);