import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import rootReducer from '../reducers/index';
import { getData } from './index';

it("returns correct data and adds to state", () => {
    const store = createStore(rootReducer, applyMiddleware(thunk));

    return store.dispatch(getData())
    .then(() => {
        const newState = store.getState();
        expect(newState.geoJSON.totalFeatures).toBe(106);
    });
});

