//general
//test all component load

//behavioral
//test restet button working - correct actions
//test clicking on map sends correct action

//unit
//test components has correct props

//redux
//test redux thunk fetch
//test action creators
//test reducer function

import React from 'react';
import { shallow } from 'enzyme';
import { FetchData } from '../FetchData';

it("renders without crashing", () => {
    const wrapper = shallow(<FetchData />);
    const component = wrapper.find(".chart__container");
    expect(component).toHaveLength(1);
});