import { 
    DATA_LOADED, 
    FILTER_MATERIAL,
    FILTER_SIZE, 
    RESET
} from "../constants/action-types";
import { AppActionTypes }  from '../../types/actions';
import { AppState } from '../../types/state'

//declare initial state
const InitialState: AppState = {
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

function rootReducer(state = InitialState, action:AppActionTypes):AppState {
    switch(action.type) {
        case DATA_LOADED: {
            //update store with data from api
            const newVals = {
                geoJSON: {...action.payload},
                mapJSON: {...action.payload}
            };
    
            return Object.assign({}, state, {...newVals});
        }
        case FILTER_MATERIAL: {
            //filter geojson by material name from action
            const filteredData = state.geoJSON.features.filter(item => item.properties.material === action.material ? item : false);
            //create new object with filtered array in geojson format
            const newobj = {
                type: "FeatureCollection",
                totalFeatures: filteredData.length,
                features: filteredData
            }
            //create object copy of old state and overwrite values with new data
            return Object.assign({}, state, { mapJSON: {...newobj} });
        }
        case FILTER_SIZE: {
            //filter geojson by category name from action and range
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
            //create new object with filtered array in geojson format
            const newobj = {
                type: "FeatureCollection",
                totalFeatures: filteredData.length,
                features: filteredData
            }
            //create object copy of old state and overwrite values with new data
            return Object.assign({}, state, { mapJSON: {...newobj} });
        }
        case RESET: {
            //create object copy of old state and overwrite filtered map values with initial geojson values
            return Object.assign({}, state, { mapJSON: {...state.geoJSON} });
        }
        default:
            return state;
    }
};

export default rootReducer;