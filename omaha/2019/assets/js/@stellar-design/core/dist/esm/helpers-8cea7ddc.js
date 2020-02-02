// forEach method, could be shipped as part of an Object Literal/Module
// assert for testing
const assert = function (condition, message) {
    if (!condition) {
        throw message || "Assertion failed!";
    }
    return (condition);
};
const delay = function (ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};

export { assert as a, delay as d };
