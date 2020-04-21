import React from 'react';
import classes from './Quiz.module.css';
import { axios } from '../../axios/axios.config';
import ActiveQuiz from '../../compoents/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../compoents/FinishedQuiz/FinishedQuiz';
import Loader from '../../compoents/UI/Loader';
class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quiz: [
        {
          question: 'Question',
          answers: ['a', 'b', 'c', 'd'],
          correctAnswer: 1,
        },
        {
          question: 'Question 2',
          answers: ['e', 'f', 'g', 'h'],
          correctAnswer: 2,
        },
        {
          question: 'Question 3',
          answers: ['i', 'j', 'k', 'l'],
          correctAnswer: 3,
        },
      ],
      isError: false,
      isFinish: false,
      currentQuestion: 0,
      points: 0,
      loading: true,
    };
  }

  async componentDidMount() {
    const id = this.props.match.params.id;
    const resp = await axios.get(`/quizes/${id}.json`);
    const quiz = resp.data;
    this.setState({ quiz, loading: false });
  }

  btnAnswerHandler = (answer) => {
    if (answer === '') {
      this.setState({
        isError: true,
      });
      setTimeout(() => this.setState({ isError: false }), 3000);
      return 'error';
    }
    const quiz = this.state.quiz;
    const current = this.state.currentQuestion;
    const answerIndex = quiz[current].answers.findIndex((el) => el === answer);

    // eslint-disable-next-line eqeqeq
    if (quiz[current].correctAnswer == answerIndex) {
      this.setState({
        points: this.state.points + 1,
      });
    }
    if (this.state.quiz.length - 1 === this.state.currentQuestion) {
      this.setState({
        isFinish: true,
      });
    } else {
      this.setState({
        currentQuestion: this.state.currentQuestion + 1,
      });
    }
  };

  restartQuiz = () => {
    this.setState({
      isFinish: false,
      currentQuestion: 0,
      points: 0,
      isError: false,
    });
  };

  render() {
    return (
      <div className={classes.Quiz}>
        {this.state.loading ? (
          <Loader />
        ) : !this.state.isFinish ? (
          <ActiveQuiz
            currentQuestion={this.state.currentQuestion + 1}
            btnHandler={(answer) => this.btnAnswerHandler(answer)}
            quiz={this.state.quiz[this.state.currentQuestion]}
            isError={this.state.isError}
            quizLen={this.state.quiz.length}
          />
        ) : (
          <FinishedQuiz
            points={this.state.points}
            totalQues={this.state.quiz.length}
            btnHandler={this.restartQuiz}
          />
        )}
      </div>
    );
  }
}

export default Quiz;
