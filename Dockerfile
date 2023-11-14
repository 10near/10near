FROM node:18-alpine

WORKDIR /app

COPY . /app

RUN npm install -g pnpm && \
    pnpm install && \
    pnpm build

EXPOSE 80

CMD ["pnpm", "start", "-p", "80"]
