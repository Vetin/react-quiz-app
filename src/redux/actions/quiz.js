import { axios } from '../../axios/axios.config';
import {
  FETCH_QUIZES_START,
  FETCH_QUIZES_SUCCESS,
  FETCH_QUIZES_ERROR,
  FETCH_QUIZ_SUCCESS,
  UPDATE_POINTS,
  UPDATE_CURRENT_QUESTION,
  FINISH_QUIZ,
  RESTART_QUIZ,
} from './actions.types';

export const fetchQuizes = () => async (dispatch) => {
  dispatch(fetchQuizesStart());
  try {
    const resp = await axios.get('/quizes.json');
    const quizes = [];
    Object.keys(resp.data).forEach((key, index) => {
      quizes.push({
        id: key,
        name: `Quiz ${index + 1}`,
      });
    });
    dispatch(fetchQuizesSuccess(quizes));
  } catch (error) {
    dispatch(fetchQuizesError(error));
  }
};

export const fetchQuizById = (id) => async (dispatch) => {
  try {
    dispatch(fetchQuizesStart());
    const resp = await axios.get(`/quizes/${id}.json`);
    const quiz = resp.data;
    dispatch(fetchQuizSuccess(quiz));
  } catch (error) {
    dispatch(fetchQuizesError(error));
  }
};

export const fetchQuizesStart = () => ({
  type: FETCH_QUIZES_START,
  loading: true,
});

export const fetchQuizesSuccess = (quizes) => ({
  type: FETCH_QUIZES_SUCCESS,
  quizes,
});

export const fetchQuizesError = (error) => ({
  type: FETCH_QUIZES_ERROR,
  error,
});

export const restartQuiz = () => ({
  type: RESTART_QUIZ,
});

export const finishQuiz = () => ({
  type: FINISH_QUIZ,
});

export const updatePoints = () => ({
  type: UPDATE_POINTS,
});

export const updateCurrentQuestion = () => ({
  type: UPDATE_CURRENT_QUESTION,
});

export const fetchQuizSuccess = (quiz) => {
  console.log(quiz);
  return {
    type: FETCH_QUIZ_SUCCESS,
    quiz,
  };
};
