echo -en "\033[37;1;41m stopping docker container \033[0m \n"
docker stop katsumori-web-app
echo -en "\033[37;1;41m removing docker container \033[0m \n"
docker rm katsumori-web-app