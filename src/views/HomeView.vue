<script lang="js">
import animeEntry from '../components/CatalogEntry.vue'
import newsComponent from '../components/home/news/index.vue'
import activityComponent from '../components/home/activity/index.vue'
import sliderComponent from '../components/home/slider/index.vue'
import buttonComponent from '../components/ui/Button.vue'
import WarningComponent from '../components/ui/Warn.vue'


import { mapGetters, mapActions } from 'vuex';

export default {
  components: {
    animeEntry,
    newsComponent,
    activityComponent,
    sliderComponent,
    buttonComponent,
    WarningComponent,
  },
  mounted() {
    this.getAnimeList();
  },
  computed: mapGetters(['animeList']),
  methods: mapActions(["getAnimeList"]),
  data() {
    return {
      news: [
        {
          title: 'Обновление сайта | v0.1',
          content: 'content',
          poster: 'https://i.ibb.co/TBfzQ5c/1.png',
        },
        {
          title: 'title',
          content: 'content',
          poster: 'https://i.ibb.co/TBfzQ5c/1.png',
        }
      ]
    }
  }
}
</script>

<template>
  <section class="main">
    <warning-component class="warning--danger"> 
      На данный момент сайт находится на стадии разработки. Вы посещаете не финальную версию сайта проекта
    </warning-component>

    <slider-component :items="animeList" />
    <section class="popular-manga">
      <div class="caption">
        <div class="caption-button">
          <!-- <a class="btn btn-focus">Подробнее</a> -->
          <button-component class="btn--focus">
            подробнее
          </button-component>
        </div>
        <h1 class="caption-title caption-title-md caption-title-left">Популярная манга</h1>
      </div>
      <div class="dev">
        <p class="dev__title">
          Раздел находится в разработке
        </p>
      </div>
    </section>
    <section class="popular-ranobe">
      <div class="caption">
        <div class="caption-button">
          <button-component class="btn--focus">
            подробнее
          </button-component>
        </div>
        <h1 class="caption-title caption-title-md caption-title-left">Популярное ранобэ</h1>
      </div>
      <div class="dev">
        <p class="dev__title">
          Раздел находится в разработке
        </p>
      </div>
    </section>
    <section class="site-activity">
      <news-component :news="news" />
      <activity-component />
    </section>
    <div>
    </div>
  </section>
</template>
  
<style>
.site-activity {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.site-activity>.activity {
  flex: auto;
  margin-left: 26px;
}

@media(max-width: 1199px) {
  .site-activity>.news {
    width: 100%;
    margin: 0;
    padding: 0;
  }

  .site-activity>.activity {
    margin: 0 0 14px 0;
  }
}

@media(min-width: 1199px) {
  .news__card__cover-image {
    max-width: 820px;
  }
}

.dev {
  text-align: center;
  background-color: var(--color-background-block);
  line-height: 200px;
  vertical-align: middle;
  border-radius: 16px;
}
</style>
  