<script>
import { mapGetters, mapActions } from 'vuex';
import tag from './ui/Tag.vue'

export default {
  computed: mapGetters(['animeSearchList']),
  components: {
    tag,
  },
  methods: {
    search(value) {
      if (value === "") {
        this.loading = 0
      } else {
        this.loading = 1
        this.searchAnime(value)
      }
    },
    ...mapActions(['searchAnime']),
  },

  data() {
    return {
      loading: 0, // 0 - false, 1 - loading, 2 - loaded, 3 - not found
      text: '',
      result: null
    }
  },

  watch: {
    animeSearchList: {
      handler(item) {
        if (item) {
          this.loading = 2
          this.result = item.slice(0, 3)
        }
      },
      deep: true
    },
    text: {
      handler(value) {
        this.search(value)
      },
    }
  },
}
</script>

<template>
  <div class="header-search"><label class="search-line">
      <div class="icon-inline">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
      </div>
      <div class="lazy-search">
        <input placeholder="Поиск..." type="search" v-model="text">
      </div>
    </label>
    <div class="search-popup" :class="{ open: loading > 0 }">
      <div class="message" v-if="loading === 1">Идет поиск..</div>
      <!-- <div class="message" v-if="loading === 3">Ничего не найдено</div> -->

      <div class="search-items" v-else>
        <div class="search-header">
          <span>Результаты</span>

          <a href="#" class="show-more">
            Больше результатов
          </a>
        </div>

        <div class="search-item" v-for="anime in result">
          <div class="search-item__header">
            <h4 class="search-item__title">{{ anime.title_ru }} / {{ anime.title_en }}</h4>

            <div class="tags">
              <tag>повседневность</tag>
              <tag>романтика</tag>
            </div>

            <p>Оценка: {{ anime.mal_score }}</p>
          </div>
          <img src="https://dev.katsumori.fun/storage/anime/preview/5.jpg" :alt="anime.title_en"
            class="search-item__poster">
        </div>

      </div>
    </div>
  </div>
</template>


<style>
.search-popup {
  margin-top: 5px;
  position: absolute;
  width: 100%;
  max-height: 500px;
  border-radius: 4px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  justify-content: right;
  background-color: #1f2631;
  z-index: 150;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-transform: scale(0);
  transform: scale(0);
  -webkit-transition: all .05s ease-out .2s;
  transition: all .05s ease-out .2s
}

.search-line {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  max-width: 600px;
  width: 100%;
  height: inherit;
  border-radius: 4px;
  overflow: hidden;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background: #1f2631;
  font-family: Roboto;
  font-weight: bold;
  font-size: 16px;
  background: var(--bg-color);
  padding-right: 14px;
}

.search-popup>.loading {
  padding: 10px
}

.search-popup>.message {
  padding: 10px;
  color: hsla(0, 0%, 100%, .6);
  font-size: 14px
}

.search-popup>.search-items>.search-header {
  background-color: rgba(0, 0, 0, .1);
  border-bottom: 1px solid rgba(61, 64, 74, .4);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding: 15px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  margin-bottom: 12px;
}

.search-popup>.search-items>.search-header>span {
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  margin-left: 8px
}

.search-popup>.search-items>.search-header>.show-more {
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.5;
  text-align: right
}

.search-popup>.search-items>.search-item {
  margin: 0 12px 10px 12px;
  display: flex;
  justify-content: space-between;
}

.search-popup>.search-items>.search-item .search-item__title {
  text-align: left;
  margin-bottom: 10px;
}
.search-popup>.search-items>.search-item .tags {
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
}

.search-popup>.search-items>.search-item>.search-item__poster {
  border-radius: 8px;
  height: 100%;
  width: auto;
  max-width: 114px;
}

.search-popup.open {
  -webkit-transition: all .03s ease-out;
  transition: all .03s ease-out;
  -webkit-transform: scale(1);
  transform: scale(1)
}
.page-header>.header-search {
  position: relative;
  width: 100%;
  height: 42px;
  margin-left: 15px;
  z-index: 1;
}

@media(min-width:575px) {
  .page-header>.header-search {
    max-width: 600px;
  }
}

@media(max-width:575px) {
  .search-popup {
    width: 99vw;
  }
  .page-header>.header-search {
    margin-left: 0;
  }
}

.lazy-search {
  width: 100%;
}</style>