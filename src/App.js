import React from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import Quiz from './containers/Quiz/Quiz';
import Auth from './containers/Auth/Auth';
import CreateQuiz from './containers/CreateQuiz';
import QuizList from './containers/QuizList';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={QuizList} exact />
        <Route path="/auth" component={Auth} />
        <Route path="/quiz/:id" component={Quiz} />
        <Route path="/create" component={CreateQuiz} />
      </Switch>
    </Layout>
  );
}

export default App;
