'use strict';

const core = require('./core-1d4780c4.js');
const index$1 = require('./index-9d31ce96.js');

const ActiveRouter = index$1.createProviderConsumer({
    historyType: 'browser',
    location: {
        pathname: '',
        query: {},
        key: ''
    },
    titleSuffix: '',
    root: '/',
    routeViewsUpdated: () => { }
}, (subscribe, child) => (core.h("context-consumer", { subscribe: subscribe, renderer: child })));

exports.ActiveRouter = ActiveRouter;
