import { MapProperties } from './state'

type filter = (name: string) => void;

//type for props coming to Material and Size components
export type ChartProps = {
    data: MapProperties,
    filter: filter
}

//type for props coming to bar chart component
export type BarChartProps = {
    chartData: (string|number)[][],
    title: string,
    color:string,
    filter: filter
}