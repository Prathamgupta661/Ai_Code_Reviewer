# AI Reviewer Backend

This is the backend service for the AI Reviewer project. It provides APIs for user authentication and AI-based code review.

## Prerequisites

- Node.js
- MongoDB

## Setup

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd Backend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the `Backend` directory and add the following environment variables:
    ```properties
    GOOGLE_GEMINI_KEY='your-google-gemini-key'
    MONGO_URI='your-mongodb-uri'
    JWT_SECRET='your-jwt-secret'
    ```

## .gitignore

Create a `.gitignore` file in the `Backend` directory with the following content to ignore unnecessary files:

```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
```

4. Start the server:
    ```sh
    npm run dev
    ```

## API Endpoints

### User Authentication

- **POST /user/login**
    - Request Body: `{ email, password }`
    - Response: `{ success, message, token, email, name }`

- **POST /user/signin**
    - Request Body: `{ name, email, password }`
    - Response: `{ success, message, data }`

### AI Code Review

- **POST /ai/get-review**
    - Request Body: `{ code }`
    - Response: `review`

## License

This project is licensed under the MIT License.
