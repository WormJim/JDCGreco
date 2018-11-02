let mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model(
  'Contact',
  new Schema(
    {
      name: {
        firstName: {
          type: String,
          trim: true,
          lowercase: true
        },
        lastName: {
          type: String,
          trim: true,
          lowercase: true
        },
        middleName: {
          type: String,
          trim: true,
          lowercase: true
        }
      },
      phoneNumber: {
        home: String,
        work: String,
        ext: String,
        cell: String,
        fax: String,
        other: [Number]
      },
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
      },
      emailAddress: String,
      comments: String,
      isPrimary: Boolean,
      active: Boolean,
      contactId: String
    },
    { timestamps: true }
  )
);
