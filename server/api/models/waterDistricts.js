let mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model(
  'WaterDistrict',
  new Schema({
    name: String,
    pswId: String,
    systemType: String,
    systemTypeAbrev: String
  })
);
