export class Chart {
    constructor() {
        this.apikey = "92674815cd1092788c3539587f077d61";
        this.TimeState = (time) => ({
            0: "night", 1: "night", 2: "night", 3: "night", 4: "night", 5: "night",
            6: "dawn", 7: "dawn", 8: "dawn", 9: "dawn", 10: "dawn", 11: "dawn",
            12: "day", 13: "day", 14: "day", 15: "day", 16: "day", 17: "day",
            18: "dusk", 19: "dusk", 20: "dusk", 21: "dusk", 22: "dusk", 23: "dusk",
        })[time] || '';
    }
    componentWillLoad() {
        if (this.time) {
            this.handleTime();
        }
        if (this.weather) {
            this.handleWeather();
        }
    }
    handleTime() {
        var now = new Date();
        this.timeState = this.TimeState(now.getHours());
    }
    handleWeather() {
        let icon;
        if (sessionStorage.weather !== undefined) {
            icon = sessionStorage.weather;
        }
        else {
            navigator.geolocation.getCurrentPosition(async (position) => {
                var lat = position.coords.latitude;
                var lng = position.coords.longitude;
                var url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${this.apikey}/${lat},${lng}`;
                const result = await fetch(url);
                const json = await result.json();
                sessionStorage.weather = json.currently.icon.toLowerCase();
                icon = json.currently.icon.toLowerCase();
                this.weatherState = icon;
            }, () => {
            });
        }
        this.weatherState = icon;
    }
    handleTimeState() {
        this.timeChange.emit(this.timeState);
        document.querySelector('html').setAttribute('time', this.timeState);
    }
    handleWeatherState() {
        this.weatherChange.emit(this.weatherState);
        document.querySelector('html').setAttribute('weather', this.weatherState);
    }
    static get is() { return "stellar-context"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "time": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "time",
            "reflect": false
        },
        "weather": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "weather",
            "reflect": false
        },
        "apikey": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "apikey",
            "reflect": false,
            "defaultValue": "\"92674815cd1092788c3539587f077d61\""
        }
    }; }
    static get states() { return {
        "timeState": {},
        "weatherState": {}
    }; }
    static get events() { return [{
            "method": "timeChange",
            "name": "timeChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "weatherChange",
            "name": "weatherChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get elementRef() { return "element"; }
    static get watchers() { return [{
            "propName": "time",
            "methodName": "handleTime"
        }, {
            "propName": "weather",
            "methodName": "handleWeather"
        }, {
            "propName": "timeState",
            "methodName": "handleTimeState"
        }, {
            "propName": "weatherState",
            "methodName": "handleWeatherState"
        }]; }
}
