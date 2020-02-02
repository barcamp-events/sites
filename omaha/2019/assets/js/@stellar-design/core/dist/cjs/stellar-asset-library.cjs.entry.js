'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-1d4780c4.js');

const AssetLibrary = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.icons = [];
        this.kind = 0;
    }
    componentWillLoad() {
        this.fetchIcons();
    }
    async fetchIcons() {
        const response = await fetch("https://unpkg.com/ionicons/dist/ionicons/data.json");
        const data = await response.json();
        this.icons = data.icons;
    }
    render() {
        return core.h(core.Host, { class: "overflow-auto db", style: { "max-height": "75vh" } }, core.h("stellar-grid", { style: { "--grid-width": "125px" } }, this.icons.map((icon) => {
            return (core.h("stellar-code", { codeString: `<stellar-asset name="${icon.icons[this.kind]}" class="fs4 center w-50"></stellar-asset>` }));
        })));
    }
    get element() { return core.getElement(this); }
};

exports.stellar_asset_library = AssetLibrary;
