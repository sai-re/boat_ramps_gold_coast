//type for properties coming from api call 
export type MapProperties = {
    type: string,
    totalFeatures: number,
    features: any[]
}

//type for root state
export type AppState = {
    geoJSON: MapProperties,
    mapJSON: MapProperties
}