'use strict';
/**
 * Model Finder Middleware
 * @module filewriter/server.js
 */

 /**
 * monitors evens on files and database
 * Sets them up for other files to emit and 
 */
const Q = require('@nmq/q/server');
Q.start();

const db = new Q('database')
const files = new Q('file')

db.monitorEvent('create')
db.monitorEvent('update')
db.monitorEvent('read')
db.monitorEvent('delete')
db.monitorEvent('error')

files.monitorEvent('save');
files.monitorEvent('error')


