import axios from 'axios';

const BASE_URL = '/v1/anime';

const anime = {
  getAnime(args) {
    return axios.get(BASE_URL, {
      params: { ...args },
    });
  },
  searchAnime(value) {
    return axios.get(BASE_URL+'/search/' + value);
  },
};

export default anime;