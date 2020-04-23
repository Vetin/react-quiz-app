import React from 'react';
import classes from './Quiz.module.css';
import ActiveQuiz from '../../compoents/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../compoents/FinishedQuiz/FinishedQuiz';
import Loader from '../../compoents/UI/Loader';
import { connect } from 'react-redux';
import {
  fetchQuizById,
  updatePoints,
  updateCurrentQuestion,
  finishQuiz,
  restartQuiz,
} from '../../redux/actions/quiz';
class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isError: false,
    };
  }

  componentWillUnmount() {
    this.props.restartQuiz();
  }

  async componentDidMount() {
    const id = this.props.match.params.id;
    await this.props.fetchQuizById(id);
  }

  btnAnswerHandler = (answer) => {
    if (answer === '') {
      this.setState({
        isError: true,
      });
      setTimeout(() => this.setState({ isError: false }), 3000);
      return 'error';
    }
    const quiz = this.props.quiz;
    const current = this.props.currentQuestion;
    const answerIndex = quiz[current].answers.findIndex((el) => el === answer);

    // eslint-disable-next-line eqeqeq
    if (quiz[current].correctAnswer == answerIndex) {
      this.props.updatePoints();
    }
    if (this.props.quiz.length - 1 === this.props.currentQuestion) {
      this.props.finishQuis();
    } else {
      this.props.updateCurrentQuestion();
    }
  };

  restartQuiz = () => {
    console.log(this.props.isFinish);
    this.props.restartQuiz();
  };

  render() {
    return (
      <div className={classes.Quiz}>
        {this.props.loading ? (
          <Loader />
        ) : !this.props.isFinish && this.props.quiz.length > 0? (
          <ActiveQuiz
            currentQuestion={this.props.currentQuestion + 1}
            btnHandler={(answer) => this.btnAnswerHandler(answer)}
            quiz={this.props.quiz[this.props.currentQuestion]}
            isError={this.state.isError}
            quizLen={this.props.quiz.length}
          />
        ) : (
          <FinishedQuiz
            points={this.props.points}
            totalQues={this.props.quiz.length}
            btnHandler={this.restartQuiz}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  quiz: state.quiz.quiz,
  isFinish: state.quiz.isFinish,
  currentQuestion: state.quiz.currentQuestion,
  points: state.quiz.points,
  loading: state.quiz.loading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchQuizById: (id) => dispatch(fetchQuizById(id)),
  updatePoints: () => dispatch(updatePoints()),
  updateCurrentQuestion: () => dispatch(updateCurrentQuestion()),
  finishQuis: () => dispatch(finishQuiz()),
  restartQuiz: () => dispatch(restartQuiz()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);

