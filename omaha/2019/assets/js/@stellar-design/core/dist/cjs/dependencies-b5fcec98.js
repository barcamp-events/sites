'use strict';

const core = require('./core-1d4780c4.js');
const index = require('./index-9d31ce96.js');

const Tunnel = index.createProviderConsumer({
    ready: false,
    package: undefined,
    collection: undefined,
    documentation: undefined,
    coverage: undefined,
    stats: undefined,
    loader: undefined,
}, (subscribe, child) => (core.h("context-consumer", { subscribe: subscribe, renderer: child })));

exports.Tunnel = Tunnel;
