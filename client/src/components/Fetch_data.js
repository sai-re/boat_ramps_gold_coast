import React, {Component} from 'react';

class FetchData extends Component {
	constructor(props) {
		super(props);

		this.state = {
			geoJSON: []
		}
	}

	getData = async (endpoint) => { 
		const url = `http://localhost:4000/api/${endpoint}`;

		try {
			//fetch response from api
			const response = await fetch(url);
            const data = await response.json();

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
                dfdf
            </div>
		);
	}
}

export default FetchData;