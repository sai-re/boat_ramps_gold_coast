import React from 'react';
import { shallow } from 'enzyme';
import SizeChart from '../SizeChart';

it("runs without crashing", () => {
    const wrapper = shallow(<SizeChart />);
    const component = wrapper.find("[data-test='component-size-chart']");
    expect(component.length).toBe(1);
});

it("chartData has correct format", () => {
    const props = {
        type: "",
        totalFeatures: 0,
        features: [
            {
                properties: { area_: 10 }
            }, 
            {
                properties: { area_: 60 }
            },
            {
                properties: { area_: 300 }
            }
        ]
    };

    const getChartData = () => {
        //array to hold all area values
        const areaArr = [];

        //filter api data and push area values to array
        props.features.map((item) => areaArr.push(item.properties.area_));

        //object to hold area value category and count
        let areaCount = {};

        //values for each category
        let category1 = 0;
        let category2 = 0;
        let category3 = 0;

        //loop over array, if area value is within range of category, increment count
        areaArr.forEach(size => {
            if (size < 50) {
                areaCount['0-50'] = category1 += 1;
            } else if (size >= 50 && size < 200) {
                areaCount['50-200'] = category2 += 1;
            } else {
                areaCount['200-526'] = category3 += 1;
            };
        });

        //get keys and values from object
        const sizeCategory = Object.keys(areaCount);
        const sizeValues = Object.values(areaCount);

        //build new array to hold object properties in a format google charts accepts
        const chartData = [['Name', 'Size']];

        sizeCategory.forEach((name, i) => chartData.push([name, sizeValues[i]]));

        return chartData
    };
        
    const results = [
        [ 'Name', 'Size' ],
        [ '0-50', 1 ],
        [ '50-200', 1 ],
        [ '200-526', 1 ]
    ]

    expect(getChartData(props)).toEqual(results);
});

it("renders barChart if component has props", () => {
    const props = {
        type: "",
        totalFeatures: 106,
        features: []
    };

    const wrapper = shallow(<SizeChart data={props} />);
    const component = wrapper.find("#size-chart");
    expect(component.length).toBe(1);
});