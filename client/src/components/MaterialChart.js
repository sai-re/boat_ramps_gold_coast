import React from 'react';
import BarChart from './BarChart';

function MaterialChart(props) {

    const getChartData = () => {
        //array to hold all materials
        const materialsArr = []
        //filter api data and push materials to array
        props.data.features.map(item => materialsArr.push(item.properties.material));
        //object to hold material type and count
        let materials = {};
        
        materialsArr.forEach(item => {
            //loop over all materials, if type exists increment value
            if (materials.hasOwnProperty(item)) {
                materials[item]++
            } else {
                materials[item] = 1;
            }
        });
        //get keys and values from object
        const materialNames = Object.keys(materials);
        const materialValues = Object.values(materials);
        //build new array to hold object properties in a format google charts accepts
        const chartData = [['Name', 'Materials']];

        for (let i = 0; i < materialNames.length; i++) {
            chartData.push([materialNames[i], materialValues[i]])
        }

        return <BarChart 
                    chartData={chartData} 
                    title='Ramps per Construction Material'
                    filter={props.filter}
                    color='#3366cc'
                />
    }

    return(
        <div className="chart">
            {/* call chart if props exists */}
            {Object.keys(props.data).length !== 0 ? getChartData() : null}
        </div>
    )
}

export default MaterialChart;