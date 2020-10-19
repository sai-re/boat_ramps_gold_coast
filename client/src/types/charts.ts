//type for chart data used in bar charts
export type ChartData = (string|number)[][];

//type for object counring area categories
export interface AreaCount {
    '0-50': number;
    '50-200': number;
    '200-526': number;
};

//type for object counting different materials
export interface Materials {
    'Bitumen': number;
    'Concrete': number;
    'Earth': number;
    'Gravel': number;
    'Interlock Conc Block': number;
    'Other': number;
};