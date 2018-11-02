(function() {
  // pull in the model
  let Water = require('../server/api/models/waterDistricts');
  let head = 1;
  let count = 0;

  function WaterModel(object) {
    this.name = object.name;
    this.pswId = object.pswId;
    this.systemType = object.systemType;
    this.systemTypeAbrev = this.systemType.split('')[0];
  }

  function createModel(data) {
    count++;
    // Skip Header Object
    if (head === 1) {
      head--;
      return;
    }

    return new Water(new WaterModel(data));
  }

  if ('undefined' !== typeof exports) {
    if ('undefined' !== typeof module && module.exports) {
      module.exports = createModel;
    }
  }
})();
