(function() {
  // pull in the model
  let Customer = require('../server/api/models/customers');
  let head = 1;
  let count = 0;

  function CustomerModel(object) {
    this.customerId = object.customerId;
    this.clientCode =
      object.clientCode.length >= 1 ? object.clientCode : 'NO CODE';
    this.company = object.company ? object.company : null;
    this.contact = {
      primary: {
        name: {
          firstName: object.firstName ? object.firstName : null,
          lastName: object.lastName ? object.lastName : null,
          middleName: object.middleName ? object.middleName : undefined
        }
      },
      secondary: {
        name: {
          firstName: object.secondaryFirst ? object.secondaryFirst : undefined,
          lastName: object.secondaryLast ? object.secondaryLast : undefined,
          middleName: object.middleName ? object.middleName : undefined
        }
      }
    };
    this.phoneNumber = {
      home: object.home ? object.home : null,
      cell: object.cell ? object.cell : undefined,
      work: {
        phone: object.work ? object.work : undefined,
        ext: object.ext ? object.ext : undefined
      },
      fax: object.fax ? object.fax : undefined
    };
    this.address = {
      street: object.street ? object.street : null,
      city: object.city ? object.city : null,
      state: object.state ? object.state : null,
      zipCode: object.zipCode ? object.zipCode : null,
      county: object.county ? object.county : null,
      geo: {
        lat: object.lat ? object.lat : undefined,
        lon: object.lon ? object.lon : undefined
      }
    };
    this.emailAddress = object.emailAddress ? object.emailAddress : null;
    this.waterDistrict = object.waterDistrict ? object.waterDistrict : null;
    this.active = object.active;
    this.sprinkler = object.sprinkler;
    this.backFlow = object.backFlow;
    this.comments = object.comments;
  }

  function createModel(data) {
    count++;
    // Skip Header Object
    if (head === 1) {
      head--;
      return;
    }

    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        let value = data[key];
        if (key === 'sprinkler' || key === 'backFlow' || key === 'active') {
          if (value === 'TRUE') {
            data[key] = true;
          } else {
            data[key] = false;
          }
        }
        if (
          key === 'customerId' ||
          key === 'lat' ||
          key === 'lon' ||
          key === 'zipCode'
        ) {
          if ('zipCode' === key && value.length > 0) {
            value = value.slice(0, value.length - 2);
          }
          data[key] = +value;
        }
      }
    }

    return new Customer(new CustomerModel(data));
  }

  if ('undefined' !== typeof exports) {
    if ('undefined' !== typeof module && module.exports) {
      module.exports = createModel;
    }
  }
})();
