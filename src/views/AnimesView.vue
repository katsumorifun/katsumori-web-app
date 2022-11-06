<script>
  import animeFilter from '../components/AnimeFilter.vue'
  import animeEntry from '../components/CatalogEntry.vue'
  import {mapGetters, mapActions} from 'vuex';

  export default {
    components: {
      animeFilter,
      animeEntry
    },
    mounted() {
    this.getAnimeList({limit: 15});
    },
    computed: mapGetters(['animeList']),
    methods: mapActions(["getAnimeList"]),
  }
</script>

<template>
  <section class="anime main">
    <div class="container">
        <div class="header">
          <div class="caption">
            <p class="caption-title caption-title-md">Аниме</p>
          </div>
        </div>

        <div class="items-list card-grid">
          <animeEntry 
            v-for="anime in animeList"
            :status="anime.status"
            :type="anime.type"
            :themes="anime.themes"
            :genres="anime.genres"
            :name_en="anime.title_en"
            :name_ru="anime.title_ru"
            :image_url="anime.images.preview"
            :routeId="anime.id"
            :routeName="'anime'"
          />
        </div>

    </div>

    <div class="container">
      123
    </div>
  </section>

</template>

<style>
section.anime {
  display: flex;
}
</style>
