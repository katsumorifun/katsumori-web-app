# Katsumori-web-app
Фронтенд проекта Katsumori.

# О проекте

Katsumori - это платформа с возможностью просмотра аниме, чтением манги и ранобэ, а так же огромной библиотекой визуальных новелл.

Сайт состоит из двух частей - бэкенда(PHP + Laravel) и фронтенда (VUE.JS).

## Рекомендованный IDE

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

# Локальная разработка

### Установка зависимостей
```sh
npm install
```

### Сборка и запуск в режиме разработчика
```sh
npm run dev
```

# Запуск внутри Docker контейнера (используется в проде)

### Минификация скриптов и запуск Docker контейнера
```sh
./docker-start.sh
```

### Остановить Docker контейнер
```sh
./docker-stop.sh
```