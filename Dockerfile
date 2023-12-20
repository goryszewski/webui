FROM node:18 as builder

WORKDIR /build

COPY ./package.json .
COPY ./package-lock.json .

RUN npm install -g @angular/cli

RUN npm install

COPY . .

RUN ng build

FROM nginx 

COPY --from=builder /build/dist/webui/browser /usr/share/nginx/html

EXPOSE 80

# export BUILDKIT_PROGRESS=plain
# docker build -t webui:1 .
# docker run --rm -p 8080:80 -it webui:1