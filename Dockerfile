FROM node:lts as build
WORKDIR /app
COPY package.json yarn.lock ./
RUN npm install --no-cache
COPY . ./
RUN npm run build
RUN find ./build -type f | xargs gzip -k

FROM nginx
RUN mkdir -p /run/nginx/
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/local/nginx/html/
EXPOSE 80
CMD ["nginx","-g","daemon off;"]
