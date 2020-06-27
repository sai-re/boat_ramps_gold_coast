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

class FetchData extends Component {
	constructor() {
		super();
        
        this.handleReset = this.handleReset.bind(this)
	}

    handleReset = () => this.props.resetMap();
    
    componentDidMount() {
        this.props.getData()
    }

	render() {        
		return (
            <div className='chart'>
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

//get state from reducer
const mapStateToProps = state => {
	return { 
        geoJSON: state.geoJSON,
        mapJSON: state.mapJSON
    };
};

export default connect(mapStateToProps, {
    getData, 
    filterMaterial,
    filterSize,
    resetMap
})(FetchData);