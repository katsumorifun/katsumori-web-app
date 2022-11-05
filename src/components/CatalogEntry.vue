<script>
export default {
  props: {
    status: String,
    type: String,
    themes: Array,
    genres: Array,
    name_en: String,
    name_ru: String,
    image_url: String, 
  }
}
</script>

<template>
  <div class="item">
    <div class="card-main">
      <div class="poster">
        <!-- <img v-lazy-load-img :data-src="poster_url" alt="poster"> -->
        <img :src="image_url" alt="poster">
      </div>
      <!-- <div class="rating">
                        <p>10 \ 10</p>
                    </div> -->
      <div class="desc">
        <div class="desc__header">
          <div class="main__footer">
              <p class="title">{{name_ru}} / {{name_en}}</p>
            </div>

            <div class="card-main_info">Статус: {{status}}</div>
            <div class="card-main_info">Тип: {{type}}</div>
            <div class="card-main_info" v-if="themes.length > 0">
              Темы: <span class="tag" v-for="theme in themes">{{theme.name}}</span>
            </div>
            <div class="card-main_info" v-if="genres.length > 0">
              Жанры: <span class="tag" v-for="genre in genres">{{genre.name}}</span>
            </div>
        </div>

        <div class="desc__footer">
          <a href="#" class="btn btn-focus">подробнее</a>
        </div>

        
      </div>
    </div>

    <div class="footer">
      <p class="title">{{name_ru}} / {{name_en}}</p>
    </div>
  </div>
</template>