<template>
    <section class="coming-anime">
        <div class="caption">
            <div class="caption-button">
                <button-component class="btn--focus">
                    подробнее
                </button-component>
            </div>
            <h1 class="caption-title caption-title-md caption-title-left">Сейчас на экранах</h1>
        </div>

        <Splide :options="options" class="slider">
            <SplideSlide v-for="item in items" :key="item.id" v-if="items">
                <img :src="item.images.preview" :alt="item.title_en" class="slider-item__image">
            </SplideSlide>

            <SplideSlide v-for="i in 5" :key="i">
                <img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIj4KCTxjaXJjbGUgY2xhc3M9ImRvdCIgY3g9IjEwMCIgY3k9IjIwMCIgcj0iMzAiIC8+Cgk8Y2lyY2xlIGNsYXNzPSJkb3QiIGN4PSIyMDAiIGN5PSIyMDAiIHI9IjMwIiAvPgoJPGNpcmNsZSBjbGFzcz0iZG90IiBjeD0iMzAwIiBjeT0iMjAwIiByPSIzMCIgLz4KCTxzdHlsZT4KCQlAa2V5ZnJhbWVzIGJsaW5rIHsgNTAlIHsgZmlsbDogdHJhbnNwYXJlbnQgfX0KCgkJLmRvdCB7CgkJCWFuaW1hdGlvbjogMXMgYmxpbmsgaW5maW5pdGU7CgkJCWZpbGw6IGdyZXk7CgkJfQoJCS5kb3Q6bnRoLWNoaWxkKDIpIHsgYW5pbWF0aW9uLWRlbGF5OiAyNTBtcyB9CgkJLmRvdDpudGgtY2hpbGQoMykgeyBhbmltYXRpb24tZGVsYXk6IDUwMG1zIH0KCTwvc3R5bGU+Cjwvc3ZnPgo="
                    alt="loading">
            </SplideSlide>
        </Splide>
    </section>
</template>


<style scoped>
.slider-item__image {
    border-radius: 8px;
}

.slider {
    background-color: var(--navigation-color);
    border-radius: 16px;
    padding: 18px 18px 28px 18px;
}

@media(max-width: 492px) {
    .splide__slide img {
        width: 95%;
    }

    .slider {
        padding: 18px 6px 38px 16px;
    }
}
</style>



<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { defineComponent } from 'vue';
import '@splidejs/vue-splide/css';
import buttonComponent from '../../ui/Button.vue'

export default{
    props: {
        items: Object,
    },

    components: { 
        Splide,
        SplideSlide,
        buttonComponent,
    },

    data() {
        return {
            options: {
                perPage: 5,
                rewind: true
            },
            width: window.innerWidth,
        }
    },
    methods: {
        updateWidth() {
            this.width = window.innerWidth;
            this.updateOptions()
        },
        updateOptions() {
            if (this.width > 1222) {
                this.options.perPage = 5
            }
            if (this.width <= 1221) {
                this.options.perPage = 4
            }
            if (this.width <= 992) {
                this.options.perPage = 3
            }
            if (this.width <= 754) {
                this.options.perPage = 2
            }
            if (this.width <= 492) {
                this.options.perPage = 2
            }
        }
    },
    created() {
        this.updateOptions()
        window.addEventListener('resize', this.updateWidth);
    },
}

</script>