FROM node:14-slim as builder

RUN npm install -g @angular/cli@11.2.11

WORKDIR /app
COPY fsg-scores/ .

RUN npm ci && ng build --prod

FROM nginx:1.15

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist/fsg-scores/ /usr/share/nginx/html/
RUN chown -R nginx /usr/share/nginx/html/

EXPOSE 80
