import axios from 'redaxios';

export const auth = (data) => async (dispatch) => {
  try {
    const url = '';
    const token = await axios.post(url, data);
    dispatch(addToken(token));
  } catch (error) {
    console.log(error);
  }
};

export const addToken = () => ({
  type: ADD_TOKEN,
});
