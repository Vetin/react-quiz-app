import { axios } from '../../axios/axios.config';
import {
  FETCH_QUIZES_START,
  FETCH_QUIZES_SUCCESS,
  FETCH_QUIZES_ERROR,
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

export const fetchQuizesStart = () => ({
  type: FETCH_QUIZES_START,
});
export const fetchQuizesSuccess = (quizes) => ({
  type: FETCH_QUIZES_SUCCESS,
  quizes,
});
export const fetchQuizesError = (error) => ({
  type: FETCH_QUIZES_ERROR,
  error,
});
