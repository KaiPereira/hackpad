# -- Build stage: compile the Vite/React website --
FROM node:20-slim AS build

RUN corepack enable && corepack prepare pnpm@9.10.0 --activate

WORKDIR /app/website
COPY website/package.json website/pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY website/ ./
RUN pnpm build

# -- Production stage: run the Express API + serve static files --
FROM node:20-slim

RUN corepack enable && corepack prepare pnpm@10.12.1 --activate

WORKDIR /app

COPY api/package.json api/pnpm-lock.yaml ./api/
RUN cd api && pnpm install --frozen-lockfile --prod

COPY api/ ./api/
COPY --from=build /app/website/dist ./website/dist

ENV NODE_ENV=production
EXPOSE 3000

CMD ["node", "api/server.js"]
