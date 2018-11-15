import React, { Component } from 'react';
import Table from '../../Components/Table/Table';
import '../../Root.css';

class Root extends Component {
  state = {
    data: [
      { id: 'abc123', name: 'John Doe' },
      { id: 'abc234', name: 'Jan Doe' },
      { id: 'abc345', name: 'Jane Doe' },
      { id: 'abc456', name: 'Josh Doe' },
      { id: 'abc567', name: 'Joe Doe' },
      { id: 'abc678', name: 'Jill Doe' },
      { id: 'abc123', name: 'John Doe' },
      { id: 'abc234', name: 'Jan Doe' },
      { id: 'abc345', name: 'Jane Doe' },
      { id: 'abc456', name: 'Josh Doe' },
      { id: 'abc567', name: 'Joe Doe' },
      { id: 'abc678', name: 'Jill Doe' },
      { id: 'abc123', name: 'John Doe' },
      { id: 'abc234', name: 'Jan Doe' },
      { id: 'abc345', name: 'Jane Doe' },
      { id: 'abc456', name: 'Josh Doe' },
      { id: 'abc567', name: 'Joe Doe' },
      { id: 'abc678', name: 'Jill Doe' },
      { id: 'abc123', name: 'John Doe' },
      { id: 'abc234', name: 'Jan Doe' },
      { id: 'abc345', name: 'Jane Doe' },
      { id: 'abc456', name: 'Josh Doe' },
      { id: 'abc567', name: 'Joe Doe' },
      { id: 'abc678', name: 'Jill Doe' },
      { id: 'abc123', name: 'John Doe' },
      { id: 'abc234', name: 'Jan Doe' },
      { id: 'abc345', name: 'Jane Doe' },
      { id: 'abc456', name: 'Josh Doe' },
      { id: 'abc567', name: 'Joe Doe' },
      { id: 'abc678', name: 'Jill Doe' },
      { id: 'abc123', name: 'John Doe' },
      { id: 'abc234', name: 'Jan Doe' },
      { id: 'abc345', name: 'Jane Doe' },
      { id: 'abc456', name: 'Josh Doe' },
      { id: 'abc567', name: 'Joe Doe' },
      { id: 'abc678', name: 'Jill Doe' }
    ],
    head: ['id', 'name']
  };

  newTable = null;

  addCustomerHandler = () => {
    return (
      <div>
        <Table tableData={this.state.data} tableHead={this.state.head} />
      </div>
    );
  };

  render() {
    const { data, head } = this.state;
    return (
      <div className="Root">
        <h1>Hello</h1>
        <br />
        <br />
        <Table tableData={data} tableHead={head} />
        <button onClick={this.addCustomerHandler}>Add Customer</button>
        {this.newTable}
      </div>
    );
  }
}

export default Root;
