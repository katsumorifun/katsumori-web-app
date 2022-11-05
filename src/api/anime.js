import axios from 'axios';

const BASE_URL = '/v1/anime';

const anime = {
  getAnime(args) {
    return axios.get(BASE_URL, {
      params: { ...args },
    });
  },
};

export default anime;