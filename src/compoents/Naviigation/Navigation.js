import React, { useState } from 'react';
import classes from './Navigation.module.css';

export default () => {
  const [isOpen, toggleChange] = useState(false);

  const toggleHandler = () => {
    toggleChange(!isOpen);
  };

  const toggleCls = [classes.btnMenu, 'fa'];
  const menuCls = [classes.menu];
  if (isOpen) {
    toggleCls.push(classes.open);
    toggleCls.push('fa-times');
  } else {
    toggleCls.push('fa-bars');
    menuCls.push(classes.menuClose);
  }
  const Menu = (props) => (
    <ul className={props.class}>
      <li>
        <a href="">a</a>
      </li>
      <li>
        <a href="">bars</a>
      </li>
      <li>
        <a href="">ca</a>
      </li>
      <li>
        <a href="">d</a>
      </li>
    </ul>
  );
  return (
    <div>
      <i className={toggleCls.join(' ')} onClick={toggleHandler}></i>
      {isOpen ? <Menu class={menuCls.join(' ')} /> : null}
    </div>
  );
};
