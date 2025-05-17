FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files first
COPY package*.json ./

# Install dependencies (use ci for production)
RUN npm ci --omit=dev

# Copy ALL files except those in .dockerignore
COPY . .

# Verify the file exists (debugging)
RUN ls -la /app && [ -f "/app/app.js" ] || echo "ERROR: app.js missing!"

# Health check
HEALTHCHECK --interval=30s --timeout=3s \
  CMD node -e "require('http').get('http://localhost:5000', (r) => { if (r.statusCode !== 200) throw new Error('Not healthy') })"

# Specify the correct entry point
CMD ["node", "app.js"]
