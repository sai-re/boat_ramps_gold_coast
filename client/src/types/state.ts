//type for properties coming from api call 
export interface MapProperties {
    type: string,
    totalFeatures: number,
    features: any[]
};

//type for root state
export interface AppState {
    geoJSON: MapProperties,
    mapJSON: MapProperties
};