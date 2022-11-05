import animeApi from '@/api/anime';

// actions
const actions = {
    async getAnimeList(ctx) {
      let request = await animeApi.getAnime()

      ctx.commit('updateAnimesList', request.data.data)
    }
  };
  
  // mutations
  const mutations = {
    updateAnimesList(state, animes){
      state.animes = animes;
  },
  };
  
  // initial state
  const state = {
    animes: [],
  };

  // getters
  const getters = {
    animeList(state){
        return state.animes;
    }
}
  
export default {
    state,
    actions,
    mutations,
    getters,
};