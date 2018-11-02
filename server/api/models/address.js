let mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = addressSchema = new Schema({
  address: {
    street: {
      type: String,
      trim: true,
      lowercase: true
    },
    city: {
      type: String,
      trim: true,
      lowercase: true
    },
    state: {
      type: String,
      trim: true,
      lowercase: true
    },
    zipCode: Number,
    county: {
      type: String,
      trim: true,
      lowercase: true
    },
    geo: {
      lat: String,
      lon: String
    }
  }
});
