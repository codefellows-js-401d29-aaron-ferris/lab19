'use strict';

/**
 * 500 Middleware
 * @module src/error-middleware/500
 */

const Q = require('@nmq/q/client');

/**
 * Sends a JSON Formatted 404 Response
 * @param err {string} Error Text
 * @param req {object} Express Request Object
 * @param res {object} Express Response Object
 * @param next {function} Express middleware next()
 */
module.exports = (err, req, res, next) => {
  console.log('__SERVER_ERROR__', err);
  let error = { error: err.message || err };
  res.status(500)
    .json(error)
    .then(Q.publish('database','error', error))
    .end();
};