import { 
    DATA_LOADED, 
    FILTER_MATERIAL,
    FILTER_SIZE, 
    RESET
} from "../constants/action-types";

//declare initial state
const initialState = {
    geoJSON: {},
    mapJSON: {}
};

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case DATA_LOADED: {
            const newVals = {
                geoJSON: {...action.payload},
                mapJSON: {...action.payload}
            };
    
            return Object.assign({}, state, {...newVals});
        }
        case FILTER_MATERIAL: {
            const filteredData = state.geoJSON.features.filter(item => item.properties.material === action.material ? item : false);

            const newobj = {
                type: "FeatureCollection",
                totalFeatures: filteredData.length,
                features: filteredData
            }

            return Object.assign({}, state, { mapJSON: {...newobj} });
        }
        case FILTER_SIZE: {
            const filteredData = state.geoJSON.features.filter(item => {
                if (action.category === '0-50' && item.properties.area_ < 50) {
                    return item;
                }
    
                if (action.category === '50-200' && item.properties.area_ >= 50 && item.properties.area_ < 200) {
                    return item;
                }
    
                if (action.category === '200-526' && item.properties.area_ >= 200) {
                    return item;
                }
    
                return false;
            });

            const newobj = {
                type: "FeatureCollection",
                totalFeatures: filteredData.length,
                features: filteredData
            }

            return Object.assign({}, state, { mapJSON: {...newobj} });
        }
        case RESET: {
            return Object.assign({}, state, { mapJSON: {...state.geoJSON} });
        }
        default:
            return state;
    }
};

export default rootReducer;