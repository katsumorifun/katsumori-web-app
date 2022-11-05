<script lang="js">
import animeEntry from '../components/CatalogEntry.vue'
import {mapGetters, mapActions} from 'vuex';

export default {
  components: {
    animeEntry 
  },
  mounted() {
    this.getAnimeList();
  },
  computed: mapGetters(['animeList']),
  methods: mapActions(["getAnimeList"]),
}
</script>

<template>
  <section class="home main">
    <div class="activity">
      <div class="container">
        <div class="header">
          <div class="caption">
            <p class="caption-title caption-title-md">Новости проекта</p>
          </div>
        </div>

        <div class="cards">
          <div class="card">
            <div class="card__header">
              <p class="title">Моб Психо 100 - 3</p>
              <p class="description"> Добавлена 5 серия</p>
            </div>
            <div class="card__footer padding">
              <a href="#" class="title">
                Подробнее
              </a>
            </div>
          </div>

          <div class="card">
            <div class="card__header">
              <p class="title">Обновление сайта v0.2</p>
              <p class="description"> Добавлен новый фильтр</p>
            </div>
            <div class="card__footer padding">
              <a href="#" class="title">
                Подробнее
              </a>
            </div>
          </div>

          <div class="card">
            <div class="card__footer">
              <a href="#" class="title">
                Вся активность
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="left">
      <div class="container">
        <div class="header">
          <div class="caption">
            <div class="caption-button">
              <a class="btn btn-focus">Подробнее</a>
            </div>
            <p class="caption-title caption-title-md">Популярное аниме</p>
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
        <div class="header">
          <div class="caption">
            <p class="caption-title caption-title-md">Популярная манга</p>
          </div>
        </div>
      </div>
    </div>
    <div>

    </div>
  </section>

</template>
  
<style>
.home {
  display: flex;
}

.home>.activity>.container>.cards {
  margin-right: 20px;
}

.home>.left {
  display: grid;
  width: 100%;
}

.home>.activity>.container>.cards>.card {
  width: 348px;
}
@media (max-width: 775px) {
  .home>.activity>.container>.cards>.card {
    width: 100%;
  }
  .home>.activity>.container>.cards {
    margin-right: 0;
  }
  .home>.activity {
    width: 100%;
  }
}

.home>.activity.cards>.title {
  text-align: left;
}

@media (max-width: 775px) {
  .home {
    flex-direction: column;
    align-items: center;
  }
}

.card {
  background: var(--color-background-block);
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: .6rem;
  border-left: 14px solid var(--c-status-danger);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

.card>.card__header>.title {
  margin: 0;
  padding: 0;
}

.card>.card__header>.description {
  color: #9590A0;
  margin: 8px 0 0px 0;
}

.card>.card__footer.padding {
  padding-top: 24px;
}
</style>
  