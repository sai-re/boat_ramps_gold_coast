import { 
    DATA_LOADED, 
    FILTER_MATERIAL,
    FILTER_SIZE,
    RESET
} from "../constants/action-types";

export function getData() {
    return function(dispatch) {
        const request = async () => {
            const url = `http://localhost:4000/api/assets`;

            try {
                //fetch response from api
                const response = await fetch(url);
                const data = await response.json();
                
                //call dispatch to pass to reducer
                dispatch({ type: DATA_LOADED, payload: data });
            } catch(err) {
                console.log(err)
            }
        }

        return request();
    };
}

export function filterMaterial(name) {
    return {
        type: FILTER_MATERIAL,
        material: name
    }
}

export function filterSize(name) {
    return {
        type: FILTER_SIZE,
        category: name
    }
}

export function resetMap(name) {
    return {
        type: RESET,
    }
}