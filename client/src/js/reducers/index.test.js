import rootReducers from './index';
import { RESET, DATA_LOADED, FILTER_MATERIAL, FILTER_SIZE } from "../constants/action-types";

describe("root reducer", () => {
    it("should render initial state", () => {
        const initialState = {
            geoJSON: {
                type: "",
                totalFeatures: 0,
                features: []
            },
            mapJSON: {
                type: "",
                totalFeatures: 0,
                features: []
            }
        };

        expect(rootReducers(undefined, {})).toEqual(initialState);
    });

    it("add data to store", () => {
        const data = {
            type: "",
            totalFeatures: 106,
            features: []
        };

        const results = rootReducers({}, { type: DATA_LOADED, payload: data });

        expect(results.geoJSON).toEqual(data);
    });

    it("should filter by material", () => {
        const state = {
            geoJSON: {
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
            }
        };

        const results = rootReducers(state, { type: FILTER_MATERIAL, material: 'Earth' }).mapJSON.features;
        const endState = [{ properties: { material: 'Earth' }}];

        expect(results).toEqual(endState);
    });

    it("should filter by size", () => {
        const state = {
            geoJSON: {
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
            }
        };

        const results = rootReducers(state, { type: FILTER_SIZE, category: '50-200' }).mapJSON.features;
        const endState = [{ properties: { area_: 60 }}];

        expect(results).toEqual(endState);
    });

    it("should reset state to intial state", () => {
        const state = {
            geoJSON: {
                type: "",
                totalFeatures: 0,
                features: []
            },
            mapJSON: {
                type: "",
                totalFeatures: 0,
                features: []
            }
        };

        const results = rootReducers(state, { type: RESET });

        expect(results).toEqual(state);
    });
});