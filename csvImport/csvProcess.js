(function csvProcessCall() {
  // access csv package
  let csv = require('fast-csv');

  // set array of mongo documents to import
  let documents = [];

  // count calls to processData Function
  let processes = 0;

  function processData(directory, fullFile) {
    processes += 1;

    // grab file name without extension
    let file = fullFile.slice(0, fullFile.indexOf('.'));
    let splitFile = file.split('');

    // capitalize the first letter of the file string
    // this is used for the call to the approrpiate import JS file.
    function properize(file) {
      return file
        .reduce((prev, curr, index) => {
          if (index === 0) {
            prev.push(curr.toUpperCase());
          } else {
            prev.push(curr);
          }
          return prev;
        }, [])
        .join('');
    }

    csv
      .fromPath(`${directory}${fullFile}`, {
        // set the headers for each file to be processed.
        headers: require('./headers')[file]
      })
      .on('data', function(data) {
        // create the document to be imported
        let document = require('./import' + properize(splitFile))(data);

        // this skips the header which is called on the first rotation of each csv call
        // since we are specifiying what the headers are, we can not skip the first row
        // the first doucment that is returned is undefined document.
        if (document !== undefined) {
          // push all documents to the documents array.
          documents.push(document);
        }
      })
      .on('end', function() {
        // to prevent calling the addToDB funciotn,
        // when csv process ends, check current count
        // if the count does not equal 1, the process should not
        // call the function.
        if (processes !== 1) {
          console.log('Ended a CSV process');
          processes -= 1;
          return;
        }

        // this is the add to database function
        require('./addToDB')(documents, documents.length);

        // log task has ended after appropriate count
        console.log('end');
      });
  }

  if ('undefined' !== typeof exports) {
    if ('undefined' !== typeof module && module.exports) {
      module.exports = processData;
    }
  }
})();
