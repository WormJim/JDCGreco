let mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model(
  'Employee',
  new Schema(
    {
      employeeId: Number,
      name: {
        firstName: {
          type: String,
          lowercase: true,
          trim: true
        },
        lastName: {
          type: String,
          lowercase: true,
          trim: true
        },
        middleName: {
          type: String,
          lowercase: true,
          trim: true
        }
      },
      emailAddress: {
        type: String,
        lowercase: true,
        trim: true
      },
      phoneNumber: {
        home: String,
        cell: String
      },
      comments: String,
      dateEntered: Date,
      active: {
        type: Boolean,
        default: true
      },
      lastModifiedBy: String
    },
    { timestamps: true }
  )
);
