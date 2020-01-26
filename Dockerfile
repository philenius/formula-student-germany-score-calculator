FROM node:10-slim as builder

RUN npm install -g @angular/cli@8.3.23

WORKDIR /app
COPY fsg-scores/ .

RUN npm install && ng build --prod

FROM nginx:1.15

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist/fsg-scores/ /usr/share/nginx/html/
RUN chown -R nginx /usr/share/nginx/html/

EXPOSE 80