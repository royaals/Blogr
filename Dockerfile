# Stage 1: Install dependencies
FROM node:18 AS deps
WORKDIR /app
COPY package*.json ./
RUN npm install

# Stage 2: Build the TypeScript application
FROM node:18 AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Stage 3: Run the application
FROM node:18 AS runner
WORKDIR /app

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
CMD [ "npm", "run", "dev" ]
