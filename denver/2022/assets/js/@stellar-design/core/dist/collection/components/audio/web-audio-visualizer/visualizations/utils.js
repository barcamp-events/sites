/**
 *
 * Sound Math stuff
 *
 * Based on https://codepen.io/prakhar625/pen/zddKRj?editors=0010s
 *
*/
export function fractionate(val, minVal, maxVal) {
    return (val - minVal) / (maxVal - minVal);
}
export function modulate(val, minVal, maxVal, outMin, outMax) {
    const fr = fractionate(val, minVal, maxVal);
    const delta = outMax - outMin;
    return outMin + (fr * delta);
}
export function avg(arr) {
    const total = arr.reduce((sum, b) => (sum + b));
    return (total / arr.length);
}
export function max(arr) {
    return arr.reduce((a, b) => (Math.max(a, b)));
}
export function analyzeSound(dataArray) {
    const lowerHalfArray = dataArray.slice(0, (dataArray.length / 2) - 1);
    const upperHalfArray = dataArray.slice((dataArray.length / 2) - 1, dataArray.length - 1);
    const overallAvg = avg(dataArray);
    const lowerMax = max(lowerHalfArray);
    const lowerAvg = avg(lowerHalfArray);
    const upperMax = max(upperHalfArray);
    const upperAvg = avg(upperHalfArray);
    const lowerMaxFr = lowerMax / lowerHalfArray.length;
    const lowerAvgFr = lowerAvg / lowerHalfArray.length;
    const upperMaxFr = upperMax / upperHalfArray.length;
    const upperAvgFr = upperAvg / upperHalfArray.length;
    return {
        lowerAvg,
        lowerAvgFr,
        lowerMax,
        lowerMaxFr,
        overallAvg,
        upperAvg,
        upperAvgFr,
        upperMax,
        upperMaxFr
    };
}
