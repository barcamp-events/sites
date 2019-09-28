import { h } from './core-36452501.js';
import { c as createProviderConsumer } from './index-9ff8bd5c.js';

const Tunnel = createProviderConsumer({
    dark: false,
    light: false
}, (subscribe, child) => h("context-consumer", { subscribe: subscribe, renderer: child }));

export { Tunnel as T };
