'use strict';

const Q = require('@nmq/q/server');
Q.start();

const db = new Q('file')

db.monitorEvent('save');
db.monitorEvent('error')


