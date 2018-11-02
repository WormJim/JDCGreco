let fs = require('fs');
let path = require('path');
let db = require('../server/config/config').database;
let mongoose = require('mongoose');
let csvProcess = require('./csvProcess');

// get file to import path and file names
let importDir = path.join(__dirname, '/importFiles/');
let importFiles = fs.readdirSync(importDir);

// connect to database
mongoose
  .connect(
    db.mongo,
    db.dbOptions
  )
  .then(function() {
    console.log('DB Connection OPEN');
    // for each file, process the data within, async
    // #### TODO change this to an event triggered by a file being uploaded via browser
    importFiles.forEach(file => {
      // create a file process for each file in the array
      // the csvProcess is a closure.
      csvProcess(importDir, file);
    });
  })
  .catch(function(err) {
    console.log(err);
  });
