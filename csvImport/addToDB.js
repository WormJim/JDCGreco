(function() {
  const mongoose = require('mongoose');

  function addToDB(models, docsLength, x) {
    // retry if error
    // NOT SETT YET
    if (x === 0) {
      // if errored 3 times
      // ### TODO ### set error
      // for now just return null
      return null;
    }

    models.forEach(function(model) {
      model
        .save()
        .then(function(document) {
          docsLength -= 1;
          console.log('SAVED: ' + document._id);
          if (docsLength === 0) {
            mongoose.connection.close(function(err) {
              if (err) console.error(err);
              console.log('DB Connection closed');
            });
          }
        })
        .catch(function() {
          mongoose.connection.close(function(err) {
            if (err) console.error(err);
            console.log('In Save Catch DB Connection closed');
          });
        });
    });
  }

  if ('undefined' !== typeof exports) {
    if ('undefined' !== typeof module && module.exports) {
      module.exports = addToDB;
    }
  }
})();
