FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM pierrezemb/gostatic
COPY --from=build /app/dist /srv/http/
CMD ["-port", "8043", "-https-promote", "-enable-logging"]