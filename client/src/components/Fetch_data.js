import React, {Component} from 'react';
import Map from './Map';

class FetchData extends Component {
	constructor(props) {
		super(props);

		this.state = {}
	}

	getData = async (endpoint) => { 
		const url = `http://localhost:4000/api/${endpoint}`;

		try {
			//fetch response from api
			const response = await fetch(url);
            const data = await response.json();

            this.setState({geoJSON: data});

		} catch(err) {
			console.log(err)
		}
    }
    
    componentDidMount() {
        this.getData('assets');
    }

	render() {
		return (
            <div>
                <Map data={this.state.geoJSON} />
            </div>
		);
	}
}

export default FetchData;