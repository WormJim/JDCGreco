let mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model(
  'Customer',
  new Schema(
    {
      customerId: {
        type: Number,
        required: true
      },
      clientCode: {
        type: String,
        required: true
      },
      company: {
        type: String,
        trim: true,
        lowercase: true
      },
      contact: {
        primary: {
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
          }
        },
        secondary: {
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
          }
        }
      },
      phoneNumber: {
        type: {
          home: {
            type: String
            // validate: {
            //   validator: function(s) {
            //     return /\d{3}=\d{3}-\d{4}/.test(s);
            //   },
            //   message: props => 'Home Phone not valide'
            // }
            // required: [true, 'User Home phone number required']
          },
          cell: {
            phone: {
              type: String
            }
          },
          work: {
            phone: {
              type: String
              // validate: {
              //   validator: function(s) {
              //     return /\d{3}=\d{3}-\d{4}/.test(s);
              //   },
              //   message: props => 'Work Phone not valide'
              // }
              // required: [true, 'User Work phone number required']
            },
            Ext: String
          },
          fax: String
          // other: [Number]
        }
        // required: true
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
      emailAddress: {
        type: String,
        trim: true,
        lowercase: true
        // required: true
      },
      waterDistrict: {
        type: String,
        trim: true,
        lowercase: true
      },
      active: {
        type: Boolean,
        required: true
      },
      sprinkler: {
        type: Boolean,
        required: true
      },
      backFlow: {
        type: Boolean,
        required: true
      },
      comments: {
        type: String,
        trim: true,
        lowercase: true
      }
    },
    { timestamps: true }
  )
);
