import React from 'react';
import BarChart from './BarChart';

import { ChartProps } from '../types/props';
import { Materials, ChartData} from '../types/charts';

function MaterialChart(props: ChartProps) {
    const getChartData = () => {
        //array to hold all materials
        const materialsArr:string[] = [];
        //filter api data and push materials to array
        props.data.features.map((item:any) => materialsArr.push(item.properties.material));
        //object to hold material type and count
        let materials: Materials = {} as Materials;

        materialsArr.forEach(item => {
            //loop over all materials, if type exists increment value
            if (materials.hasOwnProperty(item)) {
                materials[item]++
            } else {
                materials[item] = 1;
            };
        });

        //get keys and values from object
        const materialNames = Object.keys(materials);
        const materialValues = Object.values(materials);
        //build new array to hold object properties in a format google charts accepts
        const chartData:ChartData = [['Name', 'Materials']];

        for (let i = 0; i < materialNames.length; i++) {
            chartData.push([materialNames[i], materialValues[i]])
        }

        return <BarChart 
                    chartData={chartData} 
                    title='Ramps per Construction Material'
                    filter={props.filter}
                    color='#0090b9'
                />
    };

    return(
        <div className="chart">
            {/* call chart if props exists */}
            {Object.keys(props.data).length !== 0 ? getChartData() : null}
        </div>
    );
};

export default MaterialChart;