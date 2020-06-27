import React from 'react';
import Chart from 'react-google-charts';

function BarChart(props) {
    return(
        <Chart
            chartType="BarChart"
            className="chart--bar" 
            data={props.chartData}
            options={{
                colors: [props.color],
                title: props.title,
            }}
            chartEvents={[{
                    eventName: 'select',
                    callback: ({ chartWrapper }) => {
                        //get reference to chart
                        const chart = chartWrapper.getChart();
                        //get datapoint row and column value
                        const selection = chart.getSelection();
                        //get chart names and values
                        const dataTable = chartWrapper.getDataTable();
                        //prevents error if clicking on data point too fast
                        if (selection.length === 1) {
                            //get row index
                            const index = selection[0].row;
                            //get value from datatable using row index
                            const name = dataTable.hg[index].c[0].v;
                            //call action and pass in name
                            props.filter(name);
                        }
                    }
                }
            ]}
        />
    )
}

export default BarChart;