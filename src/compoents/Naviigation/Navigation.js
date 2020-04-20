import React, { useState } from 'react';
import classes from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

export default () => {
  const [isOpen, toggleChange] = useState(false);

  const toggleHandler = () => {
    toggleChange(!isOpen);
  };
  const closeMenuHandler = () => {
    toggleChange(false);
  };
  const links = [
    { to: '/', label: 'Quizes', exact: true },
    { to: '/auth', label: 'Login', exact: true },
    { to: '/create', label: 'Create quiz', exact: true },
  ];
  const toggleCls = [classes.btnMenu, 'fa'];
  const menuCls = [classes.menu];
  if (isOpen) {
    toggleCls.push(classes.open);
    toggleCls.push('fa-times');
  } else {
    toggleCls.push('fa-bars');
    menuCls.push(classes.menuClose);
  }
  const RenderLinks = () => {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <NavLink
            to={link.to}
            exact={link.exact}
            activeClassName={classes.acitve}
            onClick={closeMenuHandler}
          >
            {link.label}
          </NavLink>
        </li>
      );
    });
  };

  const Menu = (props) => (
    <ul className={props.class}>
      <RenderLinks />
    </ul>
  );
  return (
    <div>
      <i className={toggleCls.join(' ')} onClick={toggleHandler}></i>
      {isOpen ? <Menu class={menuCls.join(' ')} /> : null}
    </div>
  );
};
