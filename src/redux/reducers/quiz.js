import {
  FETCH_QUIZES_START,
  FETCH_QUIZES_SUCCESS,
  FETCH_QUIZES_ERROR,
  UPDATE_CURRENT_QUESTION,
  FINISH_QUIZ,
  UPDATE_POINTS,
  RESET_QUIZ,
  FETCH_QUIZ_SUCCESS,
  RESTART_QUIZ,
} from '../../redux/actions/actions.types';

const initState = {
  quizes: [],
  loading: false,
  error: null,
  quiz: [],
  isFinish: false,
  currentQuestion: 0,
  points: 0,
};

export default (state = initState, action) => {
  switch (action.type) {
    case FETCH_QUIZES_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_QUIZES_SUCCESS:
      return {
        ...state,
        quizes: action.quizes,
        loading: false,
      };
    case FETCH_QUIZES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case FETCH_QUIZ_SUCCESS:
      return {
        ...state,
        quiz: action.quiz,
        loading: false,
      };
    case UPDATE_CURRENT_QUESTION:
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
      };
    case FINISH_QUIZ:
      return {
        ...state,
        isFinish: true,
      };
    case UPDATE_POINTS:
      return {
        ...state,
        points: state.points + 1,
      };
    case RESTART_QUIZ:
      return {
        ...state,
        isFinish: false,
        currentQuestion: 0,
        points: 0,
      };
    default:
      return state;
  }
};
