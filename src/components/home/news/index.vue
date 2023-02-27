<template>
    <div class="news">
        <div class="caption">
            <h1 class="caption-title caption-title-md caption-title-left">Новости</h1>
        </div>

        <div class="news__content">
            <news-item 
                v-for="item in news"
                :title="item.title"
                :content="item.content"
                :poster="item.poster"
            />
        </div>
    </div>
</template>


<script>
import newsItem from './item.vue'

export default {
    components: {
        newsItem
    },
    props: {
        news: Object,
    }
}
</script>


<style>
.news__content {
    display: grid;
    grid-gap: 12px;
    margin-bottom: 12px;
}

</style>