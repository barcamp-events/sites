import { r as registerInstance, e as createEvent, g as getElement } from './core-36452501.js';

const Chart = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.apikey = "92674815cd1092788c3539587f077d61";
        this.TimeState = (time) => ({
            0: "night", 1: "night", 2: "night", 3: "night", 4: "night", 5: "night",
            6: "dawn", 7: "dawn", 8: "dawn", 9: "dawn", 10: "dawn", 11: "dawn",
            12: "day", 13: "day", 14: "day", 15: "day", 16: "day", 17: "day",
            18: "dusk", 19: "dusk", 20: "dusk", 21: "dusk", 22: "dusk", 23: "dusk",
        })[time] || '';
        this.timeChange = createEvent(this, "timeChange", 7);
        this.weatherChange = createEvent(this, "weatherChange", 7);
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
    get element() { return getElement(this); }
    static get watchers() { return {
        "time": ["handleTime"],
        "weather": ["handleWeather"],
        "timeState": ["handleTimeState"],
        "weatherState": ["handleWeatherState"]
    }; }
};

export { Chart as stellar_context };
