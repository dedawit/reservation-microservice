# Development Stage
FROM node:alpine AS development

WORKDIR /usr/src/app

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install pnpm and dependencies
RUN npm install -g pnpm && pnpm install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the application (if needed)
RUN pnpm build

# Production Stage
FROM node:alpine AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install production dependencies
RUN npm install -g pnpm && pnpm install --frozen-lockfile --prod

# Copy the built application from the development stage
COPY --from=development /usr/src/app/dist ./dist

# Start the application
CMD ["node", "dist/apps/auth/main"]