import React from 'react';
import Chart from 'react-google-charts';

function BarChart(props) {
    return(
        <Chart
            chartType="BarChart" 
            width="600px" 
            height="400px" 
            data={props.chartData}
            options={{
                colors: [props.color],
                title: props.title,
            }}
            chartEvents={[{
                    eventName: 'select',
                    callback: ({ chartWrapper }) => {
                        const chart = chartWrapper.getChart();
                        const selection = chart.getSelection();
                        const dataTable = chartWrapper.getDataTable()

                        if (selection.length === 1) {
                            const index = selection[0].row;
                            const name = dataTable.hg[index].c[0].v;

                            props.filter(name);
                        }
                    }
                }
            ]}
        />
    )
}

export default BarChart;