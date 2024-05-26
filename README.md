

# Blogr

Blogr is a feature-rich social media application that supports user interaction, content sharing, and community building.

## Features

- **Content Creation**: Users can create and share content on the platform.
- **User Authentication**: The application supports user sign-up/sign-in via email or social media accounts.
- **Profile Management**: This includes user onboarding and the ability for users to update their profiles.
- **Multi-level Comment System**: Users can comment on posts, and these comments can also have replies, creating a multi-level (threaded) discussion.
- **User Search Functionality**: Users can search for other users on the platform.
- **Community Creation and Management**: Users can create and manage communities, which are groups of users who share common interests.

## Technologies Used

- Next.js
- TypeScript
- Clerk
- Zod
- Tailwind CSS
- Shadcn
- MongoDB
- Uploadthing
- React Hook Form
- Vercel


## Development Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/royaals/Blogr.git
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```
3. copy the `.env.example` file to `.env.local`:   
   ```bash
   cp .env.example .env.local
   ```
4. Insert your credentials into the environment variables in the `.env.local` file.

5. Start the development server:
   ```bash
   npm run dev
   ```
### Using Docker for Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/royaals/Blogr.git


2. Install the dependencies:
   ```bash
   npm install
   ```
   
3. Insert your credentials into the environment variables in the `docker-compose.yml` file.   

4. Run the Docker Compose command to start the development server:
   ```bash
   docker-compose up --build
   ```





