import{r as s,h as t,H as e,g as a}from"./p-8388b2f5.js";const r=class{constructor(t){s(this,t),this.icons=[],this.kind=0}componentWillLoad(){this.fetchIcons()}async fetchIcons(){const s=await fetch("https://unpkg.com/ionicons/dist/ionicons/data.json"),t=await s.json();this.icons=t.icons}render(){return t(e,{class:"overflow-auto db",style:{"max-height":"75vh"}},t("stellar-grid",{style:{"--grid-width":"125px"}},this.icons.map(s=>t("stellar-code",{codeString:`<stellar-asset name="${s.icons[this.kind]}" class="fs4 center w-50"></stellar-asset>`}))))}get element(){return a(this)}};export{r as stellar_asset_library};