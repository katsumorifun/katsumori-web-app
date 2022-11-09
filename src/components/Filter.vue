<script>
import { mapActions } from 'vuex';
export default {
    data() {
        return {
            statusList: [
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

            query: {
                status: ""
            }
        }
    },
    watch: {
        statusList: {
            handler(list) {
                let statusNames = ""

                list.forEach((element) => {
                    if(element.selected == 1) {
                        return statusNames+= element.name_en + ","
                    }
                    if(element.selected == 2) {
                        return statusNames+= "!" + element.name_en + ","
                    }
                })

                this.query['status'] = statusNames

                this.$router.replace({ name: "animes", query: {status: statusNames} })
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
            switch(status.selected) {
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
        ...mapActions(["getAnimeList"]),
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
                    <button class="btn btn-focus btn-text-center btn-100">Сбросить</button>
                </div>

                <div class="sidebar-widget_input">
                    <div class="caption">
                        <p class="caption-title">Статус</p>
                    </div>
                    <ul>
                        <li v-for="status in statusList" :key="status.status_id" :title="status.name_ru"
                            v-bind:class="{ selected: status.selected == 1, un_selected:  status.selected == 2}">
                            <label>
                                <input type="checkbox" @click="select(status)"><span>{{ status.name_ru }}</span>
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