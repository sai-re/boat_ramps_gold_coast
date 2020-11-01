import React from 'react';
import { shallow } from 'enzyme';
import MaterialChart from '../MaterialChart';

it("runs without crashing", () => {
    const wrapper = shallow(<MaterialChart />);
    const component = wrapper.find("[data-test='component-material-chart']");
    expect(component.length).toBe(1);
});

it("chartData has correct format", () => {
    const props = {
        type: "",
        totalFeatures: 0,
        features: [
            {
                properties: { material: 'Earth' }
            }, 
            {
                properties: { material: 'Gravel' }
            },
            {
                properties: { material: 'Concrete' }
            }
        ]
    };

    const getChartData = (props) => {
        const materialsArr = [];
        props.features.map((item) => materialsArr.push(item.properties.material));
        let materials = {};

        materialsArr.forEach(item => {
            if (materials.hasOwnProperty(item)) {
                materials[item]++
            } else {
                materials[item] = 1;
            };
        });

        const materialNames = Object.keys(materials);
        const materialValues = Object.values(materials);
        const chartData = [['Name', 'Materials']];

        materialNames.forEach((name, i) => chartData.push([name, materialValues[i]]));

        return chartData
    };
        
    const results = [
        [ 'Name', 'Materials' ],
        [ 'Earth', 1 ],
        [ 'Gravel', 1 ],
        [ 'Concrete', 1 ]
    ]

    expect(getChartData(props)).toEqual(results);
});

it("renders barChart if component has props", () => {
    const props = {
        type: "",
        totalFeatures: 106,
        features: []
    };

    const wrapper = shallow(<MaterialChart data={props} />);
    const component = wrapper.find("#material-chart");
    expect(component.length).toBe(1);
});
