import { h } from './core-8f5ef0c7.js';
import { c as createProviderConsumer } from './index-9ff8bd5c.js';
var Tunnel = createProviderConsumer({
    dark: false,
    light: false
}, function (subscribe, child) { return h("context-consumer", { subscribe: subscribe, renderer: child }); });
export { Tunnel as T };
