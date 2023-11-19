FROM node:18-alpine

WORKDIR /app

COPY . /app

RUN npm install -g pnpm && \
    pnpm install && \
    pnpm build


CMD ["pnpm", "start", "-p", "80", "--hostname", "0.0.0.0"]