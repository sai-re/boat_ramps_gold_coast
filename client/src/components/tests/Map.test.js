import React from 'react';
import { shallow } from 'enzyme';
import Map from '../Map';

jest.mock('../Map.tsx');

it("runs without crashing", () => {
    const wrapper = shallow(<Map />);
    const component = wrapper.find("#map-js");
    expect(component.length).toBe(1);
});

it("runs init map on component update", () => {
    const props = { totalFeatures: 1 };

    const wrapper = shallow(<Map {...props} />);

    const spy = jest.spyOn(wrapper.instance(), 'initMap');

    wrapper.setProps({ totalFeatures: 2 });

    expect(spy).toBeCalled();
});