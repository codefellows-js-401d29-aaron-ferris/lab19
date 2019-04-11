'use strict';

const Q = require('@nmq/q/client');
const fs = require('fs');
const util = require('util')


/**
 * readit converts readfile into a promise
 * makes loadfile into a testable function
 */
const readit= util.promisify(fs.readFile)
const loadFile = (file) => readit(file)

/**
 * writeit converts readfile into a promise
 * makes saveFile into a testable function
 */
const writeit = util.promisify(fs.writeFile);
const saveFile = (file, buffer) => writeit(file, buffer)

/**
 * convertBufffer turns the information given into readable stuff in upper cse
 */
const convertBuffer = (buffer) =>Buffer.from(buffer.toString().trim().toUpperCase())



/**
 * puts out an event that speaks and throws an error
 */
const throwError = (err) => {
  Q.publish('file', 'error', err)
}

/**
 * puts out an event that is a saved status
 */
const savedStatus = (file) => {
  Q.publish('file', 'save', `${file} was modified`)
  socket.emit('speak', `saved ${file} was modified` );
}




const alterFile = (file) => {
  loadFile(file)
    .then((buffer) =>{ convertBuffer(buffer)})
    .then((buffer)=> { saveFile(file,buffer)})
    .then( (success) => { savedStatus(file)} )
    .catch( (error) => throwError(error) );
  
};



let file = process.argv.slice(2).shift();
alterFile(file);
