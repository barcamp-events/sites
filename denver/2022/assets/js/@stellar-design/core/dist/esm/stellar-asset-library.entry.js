import { r as registerInstance, h, H as Host, g as getElement } from './core-36452501.js';

const AssetLibrary = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return h(Host, { class: "overflow-auto db", style: { "max-height": "75vh" } }, h("stellar-grid", { style: { "--grid-width": "125px" } }, this.icons.map((icon) => {
            return (h("stellar-code", { codeString: `<stellar-asset name="${icon.icons[this.kind]}" class="fs4 center w-50"></stellar-asset>` }));
        })));
    }
    get element() { return getElement(this); }
};

export { AssetLibrary as stellar_asset_library };
