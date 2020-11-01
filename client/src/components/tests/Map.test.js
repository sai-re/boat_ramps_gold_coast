import React from 'react';
import { shallow } from 'enzyme';
import Map from '../Map';

it("runs without crashing", () => {
    const wrapper = shallow(<Map />);
    const component = wrapper.find("#map-js");
    expect(component.length).toBe(1);
});

// it("runs init map on component mount", () => {
//     const spy = jest.spyOn(Map.prototype, 'componentDidUpdate');
//     const wrapper = shallow(<Map />);
//     const instance = wrapper.instance();

//     const data = {
//         type: "",
//         totalFeatures: 106,
//         features: []
//     };

//     wrapper.setProps(data);
//     console.log(instance.props)

//     // expect(instance.componentDidUpdate).toHaveBeenCalledTimes(1);
// });