<script>
import animeEntry from '../components/CatalogEntry.vue'
import animeFilter from '../components/Filter.vue'

import { mapGetters, mapActions } from 'vuex';

export default {
  components: {
    animeFilter,
    animeEntry,
  },
  mounted() {
    this.getAnimeList({ limit: 16 });
  },
  computed: mapGetters(['animeList', 'animeMeta']),
  methods: mapActions(["getAnimeList"]),
  data() { 
    return {
      openFilter: false,
    }
  }
}
</script>

<template>
  <section class="main">
    <div class="catalog">
      <div class="content">
        <div class="catalog-main">
          <div class="caption">
            <p class="caption-title caption-title-md" v-if="animeMeta">Каталог аниме <span class="caption-count">{{animeMeta.to}} тайтлов</span></p>
            <p class="caption-footer">Тайтлы отсортированы по рейтингу</p>
          </div>
          <div class="items-list card-grid">
            <animeEntry v-for="anime in animeList" :status="anime.status" :type="anime.type" :themes="anime.themes"
              :genres="anime.genres" :name_en="anime.title_en" :name_ru="anime.title_ru"
              :image_url="anime.images.preview" :routeId="anime.id" :routeName="'anime'" />
          </div>
        </div>
        <animeFilter/>
      </div>

    </div>
  </section>

</template>

<style>
  .catalog >.content {
    display: grid;
    grid-template-columns: 75% 25%;
  }
  @media(min-width: 770px) {
    .catalog > .content > .catalog-sidebar .sidebar-main{
    margin-left: 1.4rem;
    }
  }

</style>
