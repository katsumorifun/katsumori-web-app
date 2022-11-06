import animeApi from '@/api/anime';

// actions
const actions = {
    async getAnimeList(ctx, params) {
      let request = await animeApi.getAnime(params)
      ctx.commit('updateAnimesList', request.data)
    }
  };
  
  // mutations
  const mutations = {
    updateAnimesList(state, animes){
      state.animes = animes
  },
  };
  
  // initial state
  const state = {
    animes: [],
    animesMeta: [],
  };

  // getters
  const getters = {
    animeList(state){
        return state.animes.data;
    },
    animeMeta(state){
      return state.animes.meta;
  }
}
  
export default {
    state,
    actions,
    mutations,
    getters,
};