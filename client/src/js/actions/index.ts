import { 
    DATA_LOADED, 
    FILTER_MATERIAL,
    FILTER_SIZE,
    RESET
} from "../constants/action-types";
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AppActionTypes }  from '../../types/actions';
import { Appstate } from '../store/index';

//redux thunk middleware to make asynchronous call to api
//R=return type, S=type of root state, E=extra argument, A=action type
export const getData = (): ThunkAction<void, Appstate, null, Action<string>> => async dispatch => {
    const url = `http://localhost:4000/api/assets`;

    try {
        //fetch response from api
        const response = await fetch(url);
        const data = await response.json();

        const getData:AppActionTypes = {
            type: DATA_LOADED, 
            payload: data
        }
        
        //call dispatch to pass to reducer
        dispatch(getData);
    } catch(err) {
        console.log(err);
    };
};

//actions for filtering and reset
export function filterMaterial(name:string):AppActionTypes {
    return {
        type: FILTER_MATERIAL,
        material: name
    };
};

export function filterSize(name:string):AppActionTypes {
    return {
        type: FILTER_SIZE,
        category: name
    };
};

export function resetMap():AppActionTypes {
    return {
        type: RESET,
    };
};