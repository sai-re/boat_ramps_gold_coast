import React from 'react';
import BarChart from './BarChart';

function SizeChart(props) {

    const getChartData = () => {
        //array to hold all area values
        const areaArr = []
        //filter api data and push area values to array
        props.data.features.map(item => areaArr.push(item.properties.area_));
        //object to hold area value category and count
        let areaCount = {};
        //values for each category
        let category1 = 0;
        let category2 = 0;
        let category3 = 0;
        //loop over array, if area value is within range of category, increment count
        areaArr.forEach(size => {
            if (size < 50) {
                areaCount['0-50'] = category1++
            } else if (size >= 50 && size < 200) {
                areaCount['50-200'] = category2++
            } else {
                areaCount['200-526'] = category3++
            }
        });

        //get keys and values from object
        const sizeCategory = Object.keys(areaCount);
        const sizeValues = Object.values(areaCount);
        //build new array to hold object properties in a format google charts accepts
        const chartData = [['Name', 'Size']];

        for (let i = 0; i < sizeCategory.length; i++) {
            chartData.push([sizeCategory[i], sizeValues[i]])
        }

        return <BarChart 
                    chartData={chartData} 
                    title='Ramps per Size Category'
                    filter={props.filter}
                    color='#268f69'
                />
    }

    return(
        <div className="chart">
            {/* call chart if props exists */}
            {Object.keys(props.data).length !== 0 ? getChartData() : null}
        </div>
    ) 
}

export default SizeChart;