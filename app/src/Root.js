import React, { Component } from 'react';
import './Root.css';
import SideBar from './Components/SideBar/SideBar';

class Root extends Component {
  render() {
    return (
      <div className="Root">
        <h1>Working</h1>
        <SideBar classes="hello" link="Bye" call="Calling" />
      </div>
    );
  }
}

export default Root;
