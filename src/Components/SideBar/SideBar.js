import React from 'react';
import PropTypes from 'prop-types';

const SideBar = ({ ...props }) => {
  const { classes, link, call } = props;

  console.log(classes, link, call);
  return <div />;
};

SideBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default SideBar;
