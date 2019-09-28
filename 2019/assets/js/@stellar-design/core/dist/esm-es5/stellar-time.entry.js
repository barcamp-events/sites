import { r as registerInstance } from './core-8f5ef0c7.js';
import { m as moment } from './moment-b6827264.js';
var Time = /** @class */ (function () {
    function Time(hostRef) {
        registerInstance(this, hostRef);
        this.format = "MMMM Do YYYY, h:mm:ss a";
        this.relative = false;
    }
    Time.prototype.componentWillLoad = function () {
        this.prepareResult();
    };
    Time.prototype.prepareResult = function () {
        this.instance = moment(this.value);
        if (this.relative) {
            this.result = this.instance.fromNow();
        }
        else {
            this.result = this.instance.format(this.format);
        }
    };
    Time.prototype.render = function () {
        return this.result;
    };
    Object.defineProperty(Time, "watchers", {
        get: function () {
            return {
                "value": ["prepareResult"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Time, "style", {
        get: function () { return "stellar-time{all:inherit}"; },
        enumerable: true,
        configurable: true
    });
    return Time;
}());
export { Time as stellar_time };
