'use strict'

const Q = require('@nmq/q/client');

const db = new Q('file')

db.subscribe('save', (payload) => console.log(payload));
db.subscribe('error', (payload) => console.error(payload));