'use strict';
/**
 * Model Finder Middleware
 * @module filewriter/appTwo.js
 */
const Q = require('@nmq/q/client');

/**
 * practice publishing events
 */
Q.publish('database','create', 'file was created')
Q.publish('database','read', 'file was read')
Q.publish('database','update', 'file was updated')
Q.publish('database','delete', 'file was deleted')
Q.publish('database','error', 'error was encountered')