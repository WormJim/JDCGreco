(function() {
  // pull in the model
  let Employees = require('../server/api/models/employees');
  let head = 1;
  let count = 0;

  function EmployeeModel(object) {
    this.employeeId = +object.employeeId;
    this.company = object.company ? object.company : null;
    this.name = {
      name: {
        firstName: object.firstName ? object.firstName : null,
        lastName: object.lastName ? object.lastName : null
      }
    };
    this.phoneNumber = {
      home: object.home ? object.home : null,
      cell: object.cell ? object.cell : null
    };
    this.emailAddress = object.emailAddress ? object.emailAddress : null;
    this.active = object.active;
    this.comments = object.comments;
    this.dateEntered = object.dateEntered;
    this.lastModifiedBy = object.lastModifiedBy;
    this.MI = object.MI;
  }

  function createModel(data) {
    count++;
    // Skip Header Object
    if (head === 1) {
      head--;
      return;
    }

    // for (const key in data) {
    //   if (data.hasOwnProperty(key)) {
    //     let value = data[key];
    //     if (key === 'sprinkler' || key === 'backFlow' || key === 'active') {
    //       if (value === 'TRUE') {
    //         data[key] = true;
    //       } else {
    //         data[key] = false;
    //       }
    //     }
    //     if (
    //       key === 'customerId' ||
    //       key === 'lat' ||
    //       key === 'lon' ||
    //       key === 'zipCode'
    //     ) {
    //       if ('zipCode' === key && value.length > 0) {
    //         value = value.slice(0, value.length - 2);
    //       }
    //       data[key] = +value;
    //     }
    //   }
    // }

    return new Employees(new EmployeeModel(data));
  }

  if ('undefined' !== typeof exports) {
    if ('undefined' !== typeof module && module.exports) {
      module.exports = createModel;
    }
  }
})();
