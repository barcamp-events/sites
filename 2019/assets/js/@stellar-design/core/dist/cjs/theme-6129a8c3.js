'use strict';

const core = require('./core-1d4780c4.js');
const index = require('./index-9d31ce96.js');

const Tunnel = index.createProviderConsumer({
    dark: false,
    light: false
}, (subscribe, child) => core.h("context-consumer", { subscribe: subscribe, renderer: child }));

exports.Tunnel = Tunnel;
