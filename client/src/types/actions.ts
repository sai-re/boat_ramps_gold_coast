import { 
    DATA_LOADED, 
    FILTER_MATERIAL,
    FILTER_SIZE,
    RESET
} from "../js/constants/action-types";

interface GetData {
    type: typeof DATA_LOADED,
    payload: any
}

interface FilterMaterial {
    type: typeof FILTER_MATERIAL,
    material: string
}

interface FilterSize {
    type: typeof FILTER_SIZE,
    category: string
}

interface ResetMap {
    type: typeof RESET
}

//create type alias for all action types
export type AppActionTypes = GetData | FilterMaterial | FilterSize | ResetMap;