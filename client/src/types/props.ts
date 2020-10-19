import { MapProperties } from './state';

type filter = (name: string) => void;

//type for props coming to Material and Size components
export interface ChartProps {
    data: MapProperties,
    filter: filter
};

//type for props coming to bar chart component
export interface BarChartProps {
    chartData: (string|number)[][],
    title: string,
    color:string,
    filter: filter
};