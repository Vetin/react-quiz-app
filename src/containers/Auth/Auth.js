import React, { Component } from 'react';
import classes from './Auth.module.css';
import Input from '../../compoents/UI/Input';
import axios from 'redaxios';
export default class Auth extends Component {
  state = {
    form: {
      email: '',
      password: '',
    },
    formError: {
      email: {
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

  async loginHandler() {
    const validArr = [];
    Object.values(this.state.formError).forEach((el) =>
      validArr.push(el.isValid)
    );
    if (validArr.every((el) => el === true)) {
      try {
        const { email, password } = this.state.form;
        const data = {
          email,
          password,
        };
        const resp = await axios.post(
          'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDyPVaUxC29xMukG6bt2RJZC71mkReIQdY',
          data
        );
        console.log(resp.data);
      } catch (error) {
        console.log(error);
      }
    }
  }

  async authHandler() {
    try {
      const { email, password } = this.state.form;
      const data = {
        email,
        password,
      };
      const resp = await axios.post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDyPVaUxC29xMukG6bt2RJZC71mkReIQdY',
        data
      );
      console.log(resp.data);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className={classes.Auth}>
        <div>
          <h1>Auth page</h1>

          <form className={classes.AuthForm}>
            <Input
              placeholder="Email"
              onChange={(e) => this.changeInput(e)}
              value={this.state.form.email}
              name="email"
              error={this.state.formError.email.text}
              errorHandler={(type) => this.errorHandler(type)}
              emitError={(type) => this.emitError(type)}
              validField={(type) => this.changeToValid(type)}
            />
            <Input
              placeholder="Password"
              onChange={(e) => this.changeInput(e)}
              value={this.state.form.password}
              name="password"
              type="password"
              error={this.state.formError.password.text}
              errorHandler={(type) => this.errorHandler(type)}
              emitError={(type) => this.emitError(type)}
              validField={(type) => this.changeToValid(type)}
            />

            <div className={classes.btnRow}>
              <button type="button" onClick={this.authHandler.bind(this)}>
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
