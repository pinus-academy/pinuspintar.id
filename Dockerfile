# ------------  Stage 1  — Build ------------
FROM node:20.11.1-alpine AS builder
WORKDIR /app
COPY package*.json .
RUN npm ci
COPY . .
RUN npm run build

# ------------  Stage 2  — Run --------------
FROM node:20.11.1-alpine
WORKDIR /app
ENV NODE_ENV=production

# production deps only
COPY package*.json .
RUN npm ci --omit=dev

# app
COPY --from=builder /app/build ./build

EXPOSE 3000
CMD ["node", "build/index.js"]
