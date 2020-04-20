import React from 'react';
import classes from './Layout.module.css';
import Navigation from '../../compoents/Naviigation/Navigation';

export default (props) => (
  <div className={classes.Layout}>
    <Navigation />
    <main>{props.children}</main>
  </div>
);
