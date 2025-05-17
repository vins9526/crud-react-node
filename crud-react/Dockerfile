# Stage 1: Build
FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Runtime
FROM node:20-alpine
WORKDIR /app

# First install serve globally
RUN npm install -g serve

# Then copy build artifacts
COPY --from=builder /app/build ./build

# Health check (optional)
HEALTHCHECK --interval=30s --timeout=3s \
  CMD curl -f http://localhost:3000 || exit 1

# Run serve
CMD ["serve", "-s", "build", "-l", "3000"]
