import React, { useState } from 'react';
import classes from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const Navigation = (props) => {
  const [isOpen, toggleChange] = useState(false);

  const toggleHandler = () => {
    toggleChange(!isOpen);
  };
  const closeMenuHandler = () => {
    toggleChange(false);
  };
  const links = [
    { to: '/', label: 'Quizes', exact: true },
    props.isAuth
      ? { to: '/logout', label: 'Logout', exact: true }
      : { to: '/auth', label: 'Login', exact: true },
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
    if (props.isAuth)
      links.unshift({
        to: '/create',
        label: 'Create quiz',
        exact: true,
      });
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

const mapPropsToState = (state) => ({
  isAuth: !!state.auth.token,
});

export default connect(mapPropsToState)(Navigation);
