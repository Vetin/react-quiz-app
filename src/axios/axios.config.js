import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'https://react-quizapp-788ae.firebaseio.com',
});

export { axios };
