import { h } from "@stencil/core";
import { createProviderConsumer } from '@stencil/state-tunnel';
export default createProviderConsumer({
    dark: false,
    light: false
}, (subscribe, child) => h("context-consumer", { subscribe: subscribe, renderer: child }));
