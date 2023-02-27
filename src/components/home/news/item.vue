<template>
    <a href="#" class="news__card">
        <div class="news__card__cover-container">
            <img :src="poster" :alt="title" class="news__card__cover-image">
        </div>  
        <div class="news-card__main">
            <div class="news-card__row news-card__row--title">
                {{ title }}
            </div>
            <div class="news-card__row news-card__row--preview">
                {{ content }}
            </div>

        </div>  
    </a>
</template>

<script>
export default {
    props: {
        title: String,
        content: String,
        poster: String,
    }
}
</script>


<style scoped>
.news__card {
    background-color: var(--navigation-color);
    border-radius: 4px;
}
.news-card__main {
    text-align: left;
    padding: 12px;
}
.news__card__cover-image {
    border-radius: 4px 4px 0px 0px;
    width: 100%;
    height: auto;
}
.news-card__row--title {
    font-weight: 700;
    margin-bottom: 12px;
}
</style>