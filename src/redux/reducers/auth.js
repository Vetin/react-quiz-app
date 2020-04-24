import { ADD_TOKEN, REMOVE_TOKEN } from '../actions/actions.types';

const initState = {
  token: localStorage.getItem('token'),
};
export default (state = initState, action) => {
  switch (action.type) {
    case ADD_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case REMOVE_TOKEN:
      return {
        ...state,
        token: null,
      };
    default:
      return {
        ...state,
      };
  }
};
