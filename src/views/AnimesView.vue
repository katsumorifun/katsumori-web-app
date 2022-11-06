<script>
import animeFilter from '../components/AnimeFilter.vue'
import animeEntry from '../components/CatalogEntry.vue'
import { mapGetters, mapActions } from 'vuex';

export default {
  components: {
    animeFilter,
    animeEntry
  },
  mounted() {
    this.getAnimeList({ limit: 16 });
  },
  computed: mapGetters(['animeList']),
  methods: mapActions(["getAnimeList"]),
}
</script>

<template>
  <section class="main">
    <div class="catalog">

      <div class="content">
        <div class="catalog-main">
          <div class="caption">
            <p class="caption-title caption-title-md">Аниме каталог <span class="caption-count">2195 тайтлов</span></p>
            <p class="caption-footer">Тайтлы отсортированы по рейтингу</p>
          </div>
          <div class="items-list card-grid">
            <animeEntry v-for="anime in animeList" :status="anime.status" :type="anime.type" :themes="anime.themes"
              :genres="anime.genres" :name_en="anime.title_en" :name_ru="anime.title_ru"
              :image_url="anime.images.preview" :routeId="anime.id" :routeName="'anime'" />
          </div>
        </div>
        <div class="catalog-sidebar">
          <!-- <div class="sidebar-header">
            <div class="caption">
              <p class="caption-title">Фильтр</p>
            </div>
          </div> -->

          <div class="sidebar-main">
            <div class="sidebar-widget">
              <div class="sidebar-widget_button">
                <button class="btn btn-focus btn-text-center btn-100">Сбросить</button>
              </div>

              <div class="caption">
                <p class="caption-title">Жанры</p>
              </div>
              
              <div class="sidebar-widget__list">
                <label class="filter-checkbox filter-checkbox--none">
                  <span>Мистика</span>
                </label>
              </div>
            </div>

          </div>

          <div class="sidebar-footer">

          </div>
        </div>
      </div>

    </div>
  </section>

</template>

<style>
.catalog >.content {
  display: grid;
  grid-template-columns: 70% 30%;
}
.catalog > .content > .catalog-sidebar{
  margin-left: 1.4rem;
  background: var(--color-background-navigation);
  padding: 18px 24px 18px 24px;
}

.catalog >.content >.catalog-main >.caption {
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

@media(max-width: 992px) {
  .catalog>.content {
    grid-template-columns: 100%;
  }
}
.filter-checkbox {
  margin: 1em 0;
}
.sidebar-widget__list>* {
    display: block!important;
    margin-bottom: 8px;
}
.sidebar-widget_button {
  width: 100%;
  margin-bottom: 14px;
}
.filter-checkbox span:not(:empty) {
    padding-left: 26px;
}
.filter-checkbox span::before {
    content: "";
    width: 18px;
    height: 18px;
    display: block;
    border-radius: 1px;
    border: 1px solid var(--c-secondary);
    background-color: var(--c-secondary);
    text-align: center;
    left: 0;
    top: 0;
    position: absolute;
    cursor: pointer;
}
.filter-checkbox.filter-checkbox--active > span::before {
  background-color: var(--с-focus);
  opacity: 1;
  content: "";
  background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzLjc0MjggMy43NTYxQzE0LjA4NTcgNC4wOTc1NyAxNC4wODU3IDQuNjUxMjEgMTMuNzQyOCA0Ljk5MjY4TDYuNDI1NzUgMTIuMjQzOUM2LjA4Mjg1IDEyLjU4NTQgNS41MjY5IDEyLjU4NTQgNS4xODQgMTIuMjQzOUwyLjI1NzE3IDkuMzY0NjJDMS45MTQyOCA5LjAyMzE1IDEuOTE0MjggOC40Njk1MiAyLjI1NzE3IDguMTI4MDVDMi42MDAwNyA3Ljc4NjU4IDMuMTU2MDIgNy43ODY1OCAzLjQ5ODkyIDguMTI4MDVMNS44MDQ4OCAxMC4zODlMMTIuNTAxMSAzLjc1NjFDMTIuODQ0IDMuNDE0NjMgMTMuMzk5OSAzLjQxNDYzIDEzLjc0MjggMy43NTYxWiIgZmlsbD0iI2ZmZiIvPgo8L3N2Zz4K) no-repeat 50%;
  background-size: contain;
  top: 0;
  left: 0;
  width: 18px;
  height: 18px;
  transform: scale(1);
}

.sidebar-main > .sidebar-widget > .caption > .caption-title {
  
}
</style>
