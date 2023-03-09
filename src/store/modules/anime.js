import animeApi from '@/api/anime';
import { isObject } from '@vue/shared';

// actions
const actions = {
  async getAnimeList(ctx, params) {
    let request = await animeApi.getAnime(params)
    ctx.commit('updateAnimesList', request.data)
  },
  async lazyPageAnimeList(ctx, params) {
    let request = await animeApi.getAnime(params)
    ctx.commit('lazyAnimesList', request.data)
  },
  async searchAnime(ctx, value) {
    let request = await animeApi.searchAnime(value)
    ctx.commit('updateAnimesSearch', request.data)
  },
};

// mutations
const mutations = {
  updateAnimesList(state, animes) {
    state.animes = animes.data
    state.animesMeta = animes.meta
  },
  updateAnimesSearch(state, animes) {
    state.search = animes
  },
  lazyAnimesList(state, animes) {
    state.animes = state.animes.concat(animes.data)
  },
};

// initial state
const state = {
  animes: [],
  animesMeta: [],
  search: [],
};

// getters
const getters = {
  animeList(state) {
    return state.animes;
  },
  animeSearchList(state) {
    return state.search;
  },
  animeMeta(state) {
    return state.animesMeta;
  }
}

export default {
  state,
  actions,
  mutations,
  getters,
};