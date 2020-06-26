import React from 'react';
import BarChart from './BarChart';

function MaterialChart(props) {

    const getChartData = () => {
        const materialsArr = []

        props.data.features.map(item => materialsArr.push(item.properties.material));

        let materials = {};

        materialsArr.forEach(item => {
            if (materials.hasOwnProperty(item)) {
                materials[item]++
            } else {
                materials[item] = 1;
            }
        });

        const materialNames = Object.keys(materials);
        const materialValues = Object.values(materials);
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
            {Object.keys(props.data).length !== 0 ? getChartData() : null}
        </div>
    )
}

export default MaterialChart;