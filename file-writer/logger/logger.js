'use strict'
/**
 * Model Finder Middleware
 * @module filewriter/logger.js
 */
const Q = require('@nmq/q/client');

/**
 * ests up for logs when an event happens
 */
const files = new Q('file')
const db = new Q('database')

files.subscribe('save', (payload) => console.log(payload));
files.subscribe('error', (payload) => console.error(payload));

db.subscribe('create', (payload) => console.log(payload))
db.subscribe('read', (payload) => console.log(payload))
db.subscribe('update', (payload) => console.log(payload))
db.subscribe('delete', (payload) => console.error(payload))
db.subscribe('error', (payload) => console.log(payload))