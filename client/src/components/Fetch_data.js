import React, {Component} from 'react';
import Map from './Map';
import MaterialChart from './MaterialChart';
import SizeChart from './SizeChart';

class FetchData extends Component {
	constructor() {
		super();

        this.state = {
            geoJSON: {},
            mapJSON: {}
        }
        
        this.handleReset = this.handleReset.bind(this)
	}

	getData = async (name) => { 
		const url = `http://localhost:4000/api/assets`;

		try {
			//fetch response from api
			const response = await fetch(url);
            const data = await response.json();

            this.setState({geoJSON: data, mapJSON: data});
		} catch(err) {
			console.log(err)
		}
    }

    filterMaterial = (name) => {
        const filteredData = this.state.geoJSON.features.filter(item => item.properties.material === name ? item : false);

        const newobj = {
            type: "FeatureCollection",
            totalFeatures: filteredData.length,
            features: filteredData
        }

        this.setState({mapJSON: newobj});
    }

    filterSize = (category) => {
        const filteredData = this.state.geoJSON.features.filter(item => {
            if (category === '0-50' && item.properties.area_ < 50) {
                return item;
            }

            if (category === '50-200' && item.properties.area_ >= 50 && item.properties.area_ < 200) {
                return item;
            }

            if (category === '200-526' && item.properties.area_ >= 200) {
                return item;
            }

            return false;
        });

        const newobj = {
            type: "FeatureCollection",
            totalFeatures: filteredData.length,
            features: filteredData
        }

        this.setState({mapJSON: newobj});
    }

    handleReset = () => this.setState({mapJSON: this.state.geoJSON});
    
    componentDidMount() {
        this.getData();
    }

	render() {
		return (
            <div className='chart'>
                <h1 className="title">Boat ramps in Australia's Gold Coast</h1>
                <Map data={this.state.mapJSON} />

                <button className="button" onClick={this.handleReset}>reset map</button>

                <div className="chart__holders">
                    <MaterialChart data={this.state.geoJSON} filter={this.filterMaterial} />
                    <SizeChart data={this.state.geoJSON} filter={this.filterSize} />
                </div>
            </div>
		);
	}
}

export default FetchData;