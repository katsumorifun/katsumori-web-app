<script setup>

</script>

<template>
  <footer>
    <div class="content">
        <div class="footer__about">
            <h1 class="footer__project-name">Katsumori</h1>
            <p>Оригинальная платформа с возможностью просмотра аниме, чтением манги и ранобэ, а так же огромной библиотекой визуальных новелл</p>
        </div>
        <div class="footer__widget">
            <h3 class="footer__title">Навигация</h3>
            <ul class="footer__links">
                <li class="footer_link"><a href="#">Главная</a></li>
                <li class="footer_link"><a href="#">Аниме</a></li>
                <li class="footer_link"><a href="#">Манга</a></li>
                <li class="footer_link"><a href="#">Ранобэ</a></li>
                <li class="footer_link"><a href="#">Визуальные новеллы</a></li>
            </ul>
        </div>
        <div class="footer__widget">
            <h3 class="footer__title">О проекте</h3>
            <ul class="footer__links">
                <li class="footer_link"><a href="#">Разработчики</a></li>
                <li class="footer_link"><a href="#">Дорожная карта</a></li>
            </ul>
        </div>
        <div class="footer__widget footer__widget--social">
            <div class="footer__links">
                <li class="footer_link footer__link--social">
                    <a href="#">
                        <font-awesome-icon icon="fa-brands fa-telegram" class="icon" />
                    </a>
                </li>

                <li class="footer_link footer__link--social">
                    <a href="#">
                        <font-awesome-icon icon="fa-brands fa-vk" class="icon" />
                    </a>
                </li>

                <li class="footer_link footer__link--social">
                    <a href="#">
                        <font-awesome-icon icon="fa-brands fa-discord" class="icon" />
                    </a>
                </li>

                <li class="footer_link footer__link--social">
                    <a href="#">
                        <font-awesome-icon icon="fa-brands fa-github" class="icon" />
                    </a>
                </li>
            </div>
        </div>
    </div>
    <div class="footer__copyright">
        2023 | Все права защищены Katsumori.
    </div>
  </footer>
</template>

<style scoped>
    footer {
        border-top: 1px solid #282828;
        background-color: var(--navigation-color);
    }
    .footer__copyright {
        background-color: var(--с-focus);
        text-align: center;
        padding: 6px 0 6px 0;
    }
    footer > .content {
        padding: 74px 6% 74px 6%;
        display: flex;
        justify-content: space-evenly;
    }
    .footer__project-name {
        text-align: left;
        color: var(--с-focus);
        text-transform: uppercase;
        padding-bottom: 14px;
    }
    @media(min-width: 855px) {
        footer > .content > .footer__about > p {
            max-width: 264px;
        }
    }
    .footer__widget {
        flex: 1 1 auto;
        margin: 0 0 0 68px;
    } 
    .footer__title {
        text-align: left;
    }
    .footer__links {
        margin: 0;
        padding: 0;
    }
    .footer__links > .footer_link {
        list-style-type: none;
        padding: 0;
        margin-top: 14px;
    }
    .footer__links > .footer_link > a{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
    }
    .footer__link--social {
        display: inline;
        margin-left: 24px;
    }
    .footer__link--social .icon {
        width: 58px;
        height: 58px;
    }

    .footer__widget--social > .footer__links {
        display: flex;
        justify-content: flex-start;
    }

    @media(min-width: 855px) {
        .footer__widget--social > .footer__links {
            flex-wrap: wrap;
        }
    }

    @media(max-width: 854px) {
        footer > .content {
            flex-wrap: wrap;
            padding-top: 24px;
            padding-bottom: 24px;
        }
        .footer__widget {
            flex: auto;
            margin: 0;
        }
        footer > .content > .footer__about {
            margin-top: 0;
            padding-bottom: 34px;
            width: 100%;
        }
        .footer__widget {
            width: 100%;
            padding-bottom: 32px;
        }
        .footer__widget--social {
            padding-bottom: 0;
        }
        .footer__widget--social > .footer__links {
            justify-content: space-around;
        }
    }
</style>
