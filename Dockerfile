# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the app dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Set environment variables
ENV NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
ENV CLERK_SECRET_KEY=
ENV NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
ENV NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
ENV NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
ENV NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding
ENV MONGODB_URL=
ENV UPLOADTHING_SECRET=
ENV UPLOADTHING_APP_ID=
ENV NEXT_CLERK_WEBHOOK_SECRET=

# Expose port 3000 for the app
EXPOSE 3000

# Define the command to run the app
CMD [ "npm", "run", "dev"  ]
