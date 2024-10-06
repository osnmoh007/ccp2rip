FROM pierrezemb/gostatic
COPY ./dist /srv/http/
EXPOSE 8043