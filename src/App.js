import React from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import Quiz from './containers/Quiz/Quiz';
import Auth from './containers/Auth/Auth';
import CreateQuiz from './containers/CreateQuiz';
import QuizList from './containers/QuizList';
import Logout from './containers/Auth/Logout';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

function App(props) {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={QuizList} exact />
        <Route path="/quiz/:id" component={Quiz} exact />
        {!props.isAuth ? (
          <Route path="/auth" component={Auth} />
        ) : (
          <React.Fragment>
            <Route path="/create" component={CreateQuiz} />
            <Route path="/logout" component={Logout} />
          </React.Fragment>
        )}
        <Redirect to={'/'}></Redirect>
      </Switch>
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  isAuth: !!state.auth.token,
});

export default connect(mapStateToProps)(App);
