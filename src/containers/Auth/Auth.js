import React, { Component } from 'react';
import classes from './Auth.module.css';
import Input from '../../compoents/UI/Input';
export default class Auth extends Component {
  state = {
    form: {
      login: '',
      password: '',
    },
    formError: {
      login: {
        text: '',
        isValid: false,
      },
      password: {
        text: '',
        isValid: false,
      },
    },
  };

  changeInput(e) {
    const value = e.target.value;
    const type = e.target.name;

    const form = { ...this.state.form };
    form[type] = value;
    this.setState({ form });
  }

  errorHandler(type) {
    const formError = { ...this.state.formError };
    formError[type].text = '';
    this.setState({ formError });
  }

  changeToValid(type) {
    const formError = { ...this.state.formError };
    formError[type].isValid = true;
    this.setState({ formError });
  }

  emitError(type) {
    const formError = { ...this.state.formError };
    formError[type].text = `Field ${type} is required`;
    this.setState({ formError });
  }

  loginHandler() {
    const validArr = [];
    Object.values(this.state.formError).forEach((el) =>
      validArr.push(el.isValid)
    );
    if (validArr.every((el) => el === true)) {
      console.log('nice');
    }
  }

  authHandler(e) {
    console.log('auth');
  }

  render() {
    return (
      <div className={classes.Auth}>
        <div>
          <h1>Auth page</h1>

          <form className={classes.AuthForm}>
            <Input
              placeholder="Login"
              onChange={(e) => this.changeInput(e)}
              value={this.state.form.login}
              name="login"
              error={this.state.formError.login.text}
              errorHandler={(type) => this.errorHandler(type)}
              emitError={(type) => this.emitError(type)}
              validField={(type) => this.changeToValid(type)}
            />
            <Input
              placeholder="Password"
              onChange={(e) => this.changeInput(e)}
              value={this.state.form.password}
              name="password"
              error={this.state.formError.password.text}
              errorHandler={(type) => this.errorHandler(type)}
              emitError={(type) => this.emitError(type)}
              validField={(type) => this.changeToValid(type)}
            />

            <div className={classes.btnRow}>
              <button type="button" onClick={this.authHandler}>
                Sign up
              </button>
              <button type="button" onClick={this.loginHandler.bind(this)}>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
