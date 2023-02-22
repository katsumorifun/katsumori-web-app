echo -en "\033[37;1;41m creating dist directory \033[0m \n"
mkdir dist
echo -en "\033[37;1;41m docker starting \033[0m \n"
docker-compose up -d --build
echo -en "\033[37;1;41m npm building \033[0m \n"
docker-compose run --rm npm install
docker-compose run --rm npm run build