<script>
import { mapActions } from 'vuex';
export default {
    data() {
        return {
            filter: {
                status: [
                    {
                        "status_id": 1,
                        "selected": 0,
                        "name_jp": "",
                        "name_en": "announced",
                        "name_ru": "Анонсировано"
                    },
                    {
                        "status_id": 2,
                        "selected": 0,
                        "name_jp": "",
                        "name_en": "ongoing",
                        "name_ru": "Выходит"
                    },
                    {
                        "status_id": 3,
                        "selected": 0,
                        "name_jp": "",
                        "name_en": "finished",
                        "name_ru": "Вышло"
                    },
                ],
                genres: [
                    {
                        "id": 1,
                        "selected": 0,
                        "name_jp": "少年",
                        "name_en": "Shounen",
                        "name_ru": "Сёнен",
                        "title": "Аниме, манга и ранобэ, рассчитанные на особую целевую аудиторию — мальчиков и юношей в возрасте от 12 до 18 лет. Манга этого типа публикуется в специализированных журналах (аудиторию определяют сами издатели), занимающих 38,4% рынка"
                    },
                    {
                        "id": 2,
                        "selected": 0,
                        "name_jp": "少年愛",
                        "name_en": "Shounen Ai",
                        "name_ru": "Сёнен-ай",
                        "title": "Разновидность аниме и манги, поджанр сёдзё, посвящённый идеализированной любви между юношами или мужчинами, для которого целевой аудиторией являются женщины. Фокусируется на романтических отношениях, а не сексуальных.",
                    },
                    {
                        "id": 3,
                        "selected": 0,
                        "name_jp": "青年",
                        "name_en": "Seinen",
                        "name_ru": "Сейнен",
                        "title": "Аниме и манга, рассчитанные на особую целевую аудиторию — молодых мужчин от 18 лет и старше. Манга этого типа публикуется в специализированных сэйнэн-журналах (аудиторию определяют сами издатели). В редких случаях произведение в жанре сэйнэн нацелено на категорию бизнесменов в возрасте до 40 лет."
                    },
                    {
                        "id": 4,
                        "selected": 0,
                        "name_jp": "少女",
                        "name_en": "Shoujo",
                        "name_ru": "Сёдзё",
                        "title": "",
                    },
                    {
                        "id": 5,
                        "selected": 0,
                        "name_jp": "少女愛",
                        "name_en": "Shoujo Ai",
                        "name_ru": "Сёдзё-ай",
                        "title": "",
                    },
                    {
                        "id": 6,
                        "selected": 0,
                        "name_jp": "女性",
                        "name_en": "Josei",
                        "name_ru": "Дзёсей",
                        "title": "",
                    },
                    {
                        "id": 7,
                        "selected": 0,
                        "name_jp": "ジェンダーベンダー",
                        "name_en": "Gender Bender",
                        "name_ru": "Смена пола",
                        "title": "",
                    },
                    {
                        "id": 8,
                        "selected": 0,
                        "name_jp": "コメディ",
                        "name_en": "Comedy",
                        "name_ru": "Комедия",
                        "title": "",
                    },
                    {
                        "id": 9,
                        "selected": 0,
                        "name_jp": "ロマンス",
                        "name_en": "Romance",
                        "name_ru": "Романтика",
                        "title": "",
                    },
                    {
                        "id": 10,
                        "selected": 0,
                        "name_jp": "学校",
                        "name_en": "School",
                        "name_ru": "Школа",
                        "title": "",
                    },
                    {
                        "id": 11,
                        "selected": 0,
                        "name_jp": "アクション",
                        "name_en": "Action",
                        "name_ru": "Экшен",
                        "title": "",
                    },
                    {
                        "id": 12,
                        "selected": 0,
                        "name_jp": "冒険",
                        "name_en": "Adventure",
                        "name_ru": "Приключения",
                        "title": "",
                    },
                    {
                        "id": 13,
                        "selected": 0,
                        "name_jp": "車",
                        "name_en": "Cars",
                        "name_ru": "Машины",
                        "title": "",
                    },
                    {
                        "id": 14,
                        "selected": 0,
                        "name_jp": "狂気",
                        "name_en": "Dementia",
                        "name_ru": "Безумие",
                        "title": "",
                    },
                    {
                        "id": 15,
                        "selected": 0,
                        "name_jp": "悪魔",
                        "name_en": "Demons",
                        "name_ru": "Демоны",
                        "title": "",
                    },
                    {
                        "id": 16,
                        "selected": 0,
                        "name_jp": "ドラマ",
                        "name_en": "Drama",
                        "name_ru": "Драма",
                        "title": "",
                    },
                    {
                        "id": 17,
                        "selected": 0,
                        "name_jp": "エッチ",
                        "name_en": "Ecchi",
                        "name_ru": "Эччи",
                        "title": "",
                    },
                    {
                        "id": 18,
                        "selected": 0,
                        "name_jp": "素晴らしい",
                        "name_en": "Fantasy",
                        "name_ru": "Фантастика",
                        "title": "",
                    },
                    {
                        "id": 19,
                        "selected": 0,
                        "name_jp": "ゲーム",
                        "name_en": "Game",
                        "name_ru": "Игры",
                        "title": "",
                    },
                    {
                        "id": 20,
                        "selected": 0,
                        "name_jp": "ハーレム",
                        "name_en": "Harem",
                        "name_ru": "Гарем",
                        "title": "",
                    },
                    {
                        "id": 21,
                        "selected": 0,
                        "name_jp": "歴史的",
                        "name_en": "Historical",
                        "name_ru": "Историческое",
                        "title": "",
                    },
                    {
                        "id": 22,
                        "selected": 0,
                        "name_jp": "ホラー",
                        "name_en": "Horror",
                        "name_ru": "Ужасы",
                        "title": "",
                    },
                    {
                        "id": 23,
                        "selected": 0,
                        "name_jp": "赤ちゃん",
                        "name_en": "Kids",
                        "name_ru": "Детское",
                        "title": "",
                    },
                    {
                        "id": 24,
                        "selected": 0,
                        "name_jp": "魔法",
                        "name_en": "Magic",
                        "name_ru": "Магия",
                        "title": "",
                    },
                    {
                        "id": 25,
                        "selected": 0,
                        "name_jp": "武道",
                        "name_en": "Martial Arts",
                        "name_ru": "Боевые искусства",
                        "title": "",
                    },
                    {
                        "id": 26,
                        "selected": 0,
                        "name_jp": "毛皮",
                        "name_en": "Mecha",
                        "name_ru": "Меха",
                        "title": "",
                    },
                    {
                        "id": 27,
                        "selected": 0,
                        "name_jp": "軍隊",
                        "name_en": "Military",
                        "name_ru": "Военное",
                        "title": "",
                    },
                    {
                        "id": 28,
                        "selected": 0,
                        "name_jp": "音楽",
                        "name_en": "Music",
                        "name_ru": "Музыка",
                        "title": "",
                    },
                    {
                        "id": 29,
                        "selected": 0,
                        "name_jp": "探偵",
                        "name_en": "Mystery",
                        "name_ru": "Детектив",
                        "title": "",
                    },
                    {
                        "id": 30,
                        "selected": 0,
                        "name_jp": "パロディー",
                        "name_en": "Parody",
                        "name_ru": "Пародия",
                        "title": "",
                    },
                    {
                        "id": 31,
                        "selected": 0,
                        "name_jp": "警察",
                        "name_en": "Police",
                        "name_ru": "Полиция",
                        "title": "",
                    },
                    {
                        "id": 32,
                        "selected": 0,
                        "name_jp": "心理学",
                        "name_en": "Psychological",
                        "name_ru": "Психологическое",
                        "title": "",
                    },
                    {
                        "id": 33,
                        "selected": 0,
                        "name_jp": "武士",
                        "name_en": "Samurai",
                        "name_ru": "Самураи",
                        "title": "",
                    },
                    {
                        "id": 34,
                        "selected": 0,
                        "name_jp": "素晴らしい",
                        "name_en": "Sci-Fi",
                        "name_ru": "Фантастика",
                        "title": "",
                    },
                    {
                        "id": 35,
                        "selected": 0,
                        "name_jp": "日常生活",
                        "name_en": "Slice of Life",
                        "name_ru": "Повседневность",
                        "title": "",
                    },
                    {
                        "id": 36,
                        "selected": 0,
                        "name_jp": "スペース",
                        "name_en": "Space",
                        "name_ru": "Космос",
                        "title": "",
                    },
                    {
                        "id": 37,
                        "selected": 0,
                        "name_jp": "スポーツ",
                        "name_en": "Sports",
                        "name_ru": "Спорт",
                        "title": "",
                    },
                    {
                        "id": 38,
                        "selected": 0,
                        "name_jp": "スーパーパワー",
                        "name_en": "Super Power",
                        "name_ru": "Супер силы",
                        "title": "",
                    },
                    {
                        "id": 39,
                        "selected": 0,
                        "name_jp": "超自然的",
                        "name_en": "Supernatural",
                        "name_ru": "Сверхъестественное",
                        "title": "",
                    },
                    {
                        "id": 40,
                        "selected": 0,
                        "name_jp": "吸血鬼",
                        "name_en": "Vampire",
                        "name_ru": "Вампиры",
                        "title": "",
                    },
                    {
                        "id": 41,
                        "selected": 0,
                        "name_jp": "スリラー",
                        "name_en": "Thriller",
                        "name_ru": "Триллер",
                        "title": "",
                    },
                    {
                        "id": 42,
                        "selected": 0,
                        "name_jp": "変態",
                        "name_en": "Hentai",
                        "name_ru": "Хентай",
                        "title": "",
                    },
                    {
                        "id": 43,
                        "selected": 0,
                        "name_jp": "やおい",
                        "name_en": "Yaoi",
                        "name_ru": "Яой",
                        "title": "",
                    },
                    {
                        "id": 44,
                        "selected": 0,
                        "name_jp": "百合",
                        "name_en": "Yuri",
                        "name_ru": "Юри",
                        "title": "",
                    },
                    {
                        "id": 45,
                        "selected": 0,
                        "name_jp": "ショタコン",
                        "name_en": "Shotacon",
                        "name_ru": "Сётакон",
                        "title": "",
                    },
                    {
                        "id": 46,
                        "selected": 0,
                        "name_jp": "特撮",
                        "name_en": "Tokusatsu",
                        "name_ru": "Токусацу",
                        "title": "",
                    },
                    {
                        "id": 47,
                        "selected": 0,
                        "name_jp": "黙示録を投稿する",
                        "name_en": "Post apocalyptic",
                        "name_ru": "Пост апокалипсис",
                        "title": "",
                    },
                    {
                        "id": 48,
                        "selected": 0,
                        "name_jp": "スチームパンク",
                        "name_en": "Steampunk",
                        "name_ru": "Стимпанк",
                        "title": "",
                    },
                    {
                        "id": 49,
                        "selected": 0,
                        "name_jp": "オタク",
                        "name_en": "Otaku",
                        "name_ru": "Откаку",
                        "title": "",
                    },
                    {
                        "id": 50,
                        "selected": 0,
                        "name_jp": "魔法少女",
                        "name_en": "Makho-shodze",
                        "name_ru": "Махо-сёдзе",
                        "title": "",
                    },
                    {
                        "id": 51,
                        "selected": 0,
                        "name_jp": "サイバーパンク",
                        "name_en": "Cyberpunk",
                        "name_ru": "Кибербанк",
                        "title": "",
                    },
                    {
                        "id": 52,
                        "selected": 0,
                        "name_jp": "幻の泥棒",
                        "name_en": "Phantom thieves",
                        "name_ru": "Кайто",
                        "title": "",
                    },
                    {
                        "id": 53,
                        "selected": 0,
                        "name_jp": "郁二",
                        "name_en": "Ikuji",
                        "name_ru": "Икудзи",
                        "title": "",
                    },
                    {
                        "id": 54,
                        "selected": 0,
                        "name_jp": "アイドル",
                        "name_en": "idol",
                        "name_ru": "Айдолы",
                        "title": "",
                    },
                    {
                        "id": 55,
                        "selected": 0,
                        "name_jp": "女性 ",
                        "name_en": "Josei",
                        "name_ru": "Дзёсэй",
                        "title": "",
                    }
                ],
            },

            query: {
                
            }
        }
    },
    watch: {
        filter: {
            handler(list) {
                let params = ""

                for (let filter in list) {
                    list[filter].forEach((element) => {

                        if (filter === 'status') {
                            if (element.selected == 0) {
                                params = params.replace('!' + element.name_en + ',', '')
                            }
                            if (element.selected == 1) {
                                params += element.name_en + ","
                            }
                            if (element.selected == 2) {
                                params += "!" + element.name_en + ","
                            }
                        }

                        if (filter === 'genres') {
                            if (element.selected == 0) {
                                params = params.replace(params += "!" + element.id + ",", '')
                            }
                            if (element.selected == 1) {
                                params += element.id + ","
                            }
                            if (element.selected == 2) {
                                params += "!" + element.id + ","
                            }
                        }

                    })

                    if (params.length > 0) {
                        this.query[filter] = params.slice(0, -1)
                    }
                    params = ""
                }

                this.$router.replace({ name: "animes", query: this.query })
            },
            deep: true
        },

        query: {
            handler(query) {
                this.getAnimeList(query)
            },
            deep: true
        }
    },
    methods: {
        select(status) {
            switch (status.selected) {
                case 0:
                    status.selected = 1
                    break;
                case 1:
                    status.selected = 2
                    break;
                case 2:
                    status.selected = 0
                    break;
            }
        },
        reset() {
            this.query = ""
            this.$router.replace({ name: "animes", query: this.query })
        },
        ...mapActions(["getAnimeList"]),
    },
    mounted() {
        let query = this.$route.query

        for(let name in query) {
            this.filter[name].forEach(function(element) {
                if(element.name_en == query[name]) {
                    if(query[name].indexOf('!', 0) == -1) {
                        element.selected = 1
                    }

                    // if(query[name].indexOf('!', 0) != -1) {
                    //     element.selected = 2
                    // }
                }
            })
        }
    },
}

</script>


<template>
    <div class="catalog-sidebar">
        <div class="sidebar-header">
            <div class="caption">
                <p class="caption-title">Фильтр</p>
            </div>
        </div>

        <div class="sidebar-main">
            <div class="sidebar-widget">
                <div class="sidebar-widget_button">
                    <button class="btn btn-focus btn-text-center btn-100" @click="reset()">Сбросить</button>
                </div>

                <div class="sidebar-widget_input">
                    <div class="caption">
                        <p class="caption-title">Статус</p>
                    </div>
                    <ul>
                        <li v-for="status in filter.status" :key="status.status_id" :title="status.name_ru"
                            v-bind:class="{ selected: status.selected == 1, un_selected: status.selected == 2 }">
                            <label>
                                <input type="checkbox" @click="select(status)"><span>{{ status.name_ru }}</span>
                            </label>
                        </li>
                    </ul>
                </div>

                <div class="sidebar-widget_input">
                    <div class="caption">
                        <p class="caption-title">Жанры</p>
                    </div>
                    <ul>
                        <li v-for="genre in filter.genres" :key="genre.id" :title="genre.name_ru"
                            v-bind:class="{ selected: genre.selected == 1, un_selected: genre.selected == 2 }">
                            <label>
                                <input type="checkbox" @click="select(genre)"><span>{{ genre.name_ru }}</span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.catalog-sidebar .sidebar-header {
    display: none;
}

.catalog-sidebar .sidebar-main {
    padding: 18px 24px 18px 24px;
}

.catalog>.content>.catalog-main>.caption {
    margin-bottom: 1rem;
    font-size: 1.2rem;
}

.filter-checkbox {
    margin: 1em 0;
}

.sidebar-widget__list>* {
    display: block !important;
    margin-bottom: 8px;
}

.sidebar-widget_button {
    width: 100%;
    margin-bottom: 14px;
}

.sidebar-widget_input>ul>li {
    list-style: none;
}

.sidebar-widget_input>ul {
    padding: 0;
}

.sidebar-widget_input input {
    display: none;
}

.sidebar-widget_input li {
    padding: 6px 12px 6px;
    margin-bottom: 8px;
}

.sidebar-widget_input li.selected {
    background: #3490dc;
    border-radius: 0.4rem;
}

.sidebar-widget_input li.un_selected {
    background: var(--c-status-danger);
    border-radius: 0.4rem;
}

@media(max-width: 769px) {
    .catalog>.content {
        grid-template-columns: 100%;
    }

    .catalog-sidebar {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 100;
        background-color: var(--color-background);
    }

    .catalog-sidebar {
        margin-left: 0;
    }

    .catalog-sidebar .sidebar-header {
        display: block;
        background-color: var(--с-focus);
        padding: 2px 0 2px 0;
    }

    .catalog-sidebar .sidebar-header>.caption {
        margin: 12px 0 0 14px;
    }

    .sidebar-widget_input>ul {
        display: flex;
        list-style: none;
        overflow: auto;
    }

    .sidebar-widget_input>ul>li {
        margin-right: 8px;
    }

    .catalog-sidebar .sidebar-main {
        padding: 1rem 8px 0 8px;
    }
}
</style>