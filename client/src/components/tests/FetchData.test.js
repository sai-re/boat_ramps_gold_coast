import React from 'react';
import { shallow } from 'enzyme';

import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../../js/reducers/index';
import thunk from "redux-thunk";
import ConnectedFetchData, { FetchData } from '../FetchData';

it("renders without crashing", () => {
    const wrapper = shallow(<FetchData />);
    const component = wrapper.find(".chart__container");
    expect(component).toHaveLength(1);
});

describe("has actions from redux as props", () => {
    const store = createStore(rootReducer, applyMiddleware(thunk));
    const wrapper = shallow(<ConnectedFetchData store={store} />).dive().dive();
    const props = wrapper.instance().props;

    it("has getData action", () => {
        expect(props.getData).toBeInstanceOf(Function);
    });

    it("has filterMaterial action", () => {
        expect(props.filterMaterial).toBeInstanceOf(Function);
    });

    it("has filterSize action", () => {
        expect(props.filterSize).toBeInstanceOf(Function);
    });

    it("has resetMap action", () => {
        expect(props.resetMap).toBeInstanceOf(Function);
    });
});

describe("component props test", () => {
    const getDataMock = jest.fn();
    const resetMapMock = jest.fn();

    const props = {
        getData: getDataMock,
        resetMap: resetMapMock
    };

    const wrapper = shallow(<FetchData {...props} />);

    it("runs getData action on component mount", () => {
        wrapper.instance().componentDidMount();
        const callCount = getDataMock.mock.calls.length;
        expect(callCount).toBeGreaterThan(1);
    });
    
    it("runs action on reset", () => { 
        const wrapper = shallow(<FetchData {...props} />);
        const button = wrapper.find(".button");
        button.simulate("click");
    
        const callCount = resetMapMock.mock.calls.length;
        expect(callCount).toBe(1);
    });
});