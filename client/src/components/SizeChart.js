import React from 'react';
import BarChart from './BarChart';

function SizeChart(props) {

    const getChartData = () => {
        const areaArr = []

        props.data.features.map(item => areaArr.push(item.properties.area_));

        let areaCount = {};

        let category1 = 0;
        let category2 = 0;
        let category3 = 0;

        areaArr.forEach(size => {
            if (size < 50) {
                areaCount['0-50'] = category1++
            } else if (size >= 50 && size < 200) {
                areaCount['50-200'] = category2++
            } else {
                areaCount['200-526'] = category3++
            }
        });

        const sizeCategory = Object.keys(areaCount);
        const sizeValues = Object.values(areaCount);
        const chartData = [['Name', 'Size']];

        for (let i = 0; i < sizeCategory.length; i++) {
            chartData.push([sizeCategory[i], sizeValues[i]])
        }

        return <BarChart 
                    chartData={chartData} 
                    title='Ramps per Size Category'
                    filter={props.filter}
                    color='#b0120a'
                />
    }

    return(
        <div className="chart">
            {Object.keys(props.data).length !== 0 ? getChartData() : null}
        </div>
    ) 
}

export default SizeChart;