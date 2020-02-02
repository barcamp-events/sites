/**
 *
 * Sound Math stuff
 *
 * Based on https://codepen.io/prakhar625/pen/zddKRj?editors=0010s
 *
*/
export declare function fractionate(val: number, minVal: number, maxVal: number): number;
export declare function modulate(val: number, minVal: number, maxVal: number, outMin: number, outMax: number): number;
export declare function avg(arr: number[]): number;
export declare function max(arr: number[]): number;
export declare function analyzeSound(dataArray: number[]): {
    lowerAvg: number;
    lowerAvgFr: number;
    lowerMax: number;
    lowerMaxFr: number;
    overallAvg: number;
    upperAvg: number;
    upperAvgFr: number;
    upperMax: number;
    upperMaxFr: number;
};
