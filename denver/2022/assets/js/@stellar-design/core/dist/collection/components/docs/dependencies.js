import { h } from "@stencil/core";
import { createProviderConsumer } from '@stencil/state-tunnel';
export default createProviderConsumer({
    ready: false,
    package: undefined,
    collection: undefined,
    documentation: undefined,
    coverage: undefined,
    stats: undefined,
    loader: undefined,
}, (subscribe, child) => (h("context-consumer", { subscribe: subscribe, renderer: child })));
