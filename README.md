
![CF](http://i.imgur.com/7v5ASc8.png) LAB 19
=================================================

## SOCKET.IO IMPLEMENTATION

### Author: Aaron Ferris

### Links and Resources
* [PR](https://github.com/codefellows-js-401d29-aaron-ferris/lab19/pull/5)  
* [travis](https://www.travis-ci.com/codefellows-js-401d29-aaron-ferris/lab19) ![build](https://www.travis-ci.com/codefellows-js-401d29-aaron-ferris/lab19.svg?branch=master)  
  
  
#### Documentation
* [jsdoc](https://github.com/codefellows-js-401d29-aaron-ferris/lab87/tree/submission/docs)  

### Modules Changes
#### apiserver 
##### role-router
* rolesrouter add a publish create event
##### router.js
* signup method add a publish to create event
##### v1.js
* handleGetAll add  publish to read event
* handleGetOne add  publish to read event
* handlePut add  publish to update event
* handleDelete add  publish to delete event
##### 404.js
* added a publish to error event
##### 500.js
* added a publish to error event


### Modules 
#### `app.js`
##### Exported Values and Methods

###### `io.connect`
 * Connects our socket to server 3001 in localhost

###### `saveFile`
 * converts readit into a testable function
 * readit is promisified version of fs.readfile
 * takes in a file

###### `convertBuffer`
 * takes in buffer. 
 * converts it to a string and uppercase

###### `savedStatus`
 * Takes in file
 * writes to server file was saved


###### `throwErr`
 * Takes in error
 * publishes error event

###### `alterFile`
 * takes in file
 * runs loadfile
 * then runs convertbuffer
 * then runs savefile
 * then runs savedmsg
 * if error runs throwErr

###### `loadFile`
 * makes writeit into a testable function
 * writeit converts readfile into a promise
 * takes in a file destination and a buffer

 ###### `socket.on 'err'/'saved`
 * listens for error or saved to terminate app


#### `logger.js`
##### Exported Values and Methods

###### `subscribe`
* listens for one of many events and logs it.
  * files save
  * files error
  * db create
  * db read
  * db update
  * db delete
  * db error

#### `server.js`
##### Exported Values and Methods

###### `monitorEvent`
 * Monitors for one of many events
  * database create
  * database update
  * database read
  * database delete
  * database error
  * files error
  * files save

 
### Setup
#### Requirements
* run a npm i in the base folder


#### Running the app
* in base folder run in different terminals
  * `nodemon`
  * `nodemon logger.js`
  * run command to execute
  *  `node app.js _filename_`
  *  example `node app.js ./files/test.txt`
* on a error, logger shoudl console error the error
* on a success, logger should console log the file was saved
  
#### Tests
* Based on time, I didn't get to testing

#### UML
![UML](./files/uml.jpg)



