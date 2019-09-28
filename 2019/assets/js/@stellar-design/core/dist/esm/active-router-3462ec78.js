import { h } from './core-8f5ef0c7.js';
import { c as createProviderConsumer } from './index-9ff8bd5c.js';

const ActiveRouter = createProviderConsumer({
    historyType: 'browser',
    location: {
        pathname: '',
        query: {},
        key: ''
    },
    titleSuffix: '',
    root: '/',
    routeViewsUpdated: () => { }
}, (subscribe, child) => (h("context-consumer", { subscribe: subscribe, renderer: child })));

export { ActiveRouter as A };
