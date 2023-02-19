echo -en "\033[37;1;41m npm building \033[0m \n"
npm run build
echo -en "\033[37;1;41m docker building \033[0m \n"
docker build -t katsumori-web-app .
echo -en "\033[37;1;41m docker starting \033[0m \n"
docker run --name katsumori-web-app -d -p 8082:80 katsumori-web-app