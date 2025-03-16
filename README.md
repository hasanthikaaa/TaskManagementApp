# Task Management App

## Overview
This project is built using **Projen** for project configuration and follows a structured folder organization to ensure clarity and modularity.

## Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [Projen](https://github.com/projen/projen)
- [Bruno API Client](https://github.com/brunoapi/bruno) (for API testing)


## Setup Instructions

1. **Clone the Repository**
    ```bash
    git clone https://github.com/hasanthikaaa/TaskManagementApp.git
    cd TaskManagementApp
    ```

2. **Install Dependencies**
    ```bash
    npm install
    ```

3. **Bootstrap Projen**
    ```bash
    npx projen
    ```

4. **Configure Environment Variables**
   Create a `.env.development` file in the root directory and provide the necessary environment variables:
    ```env
   PORT=
   NODE_ENV=
   DB_HOST=
   DB_PORT=
   DB_NAME=
   DB_USER=
   DB_PASSWORD=
    ```

5. **Run the Application**
    ```bash
    npx projen nodemon
    ```

6. **Build the Project**
    ```bash
    npx projen build
    ```

7. **Run Tests**
    ```bash
    npx projen test
    ```

## Knex Migration and Seeding
To run database migrations and seed your database, follow these steps:
### 1. Run Migrations
Run the Knex migrations to set up the database schema:
```bash
  npx knex migrate:latest
```
This will apply all the pending migrations in the migrations folder to your development database.

### 2. Seed the database
```bash
   knex seed:run --specific=users.ts
```
```bash
   knex seed:run --specific=projects.ts
```
```bash
   knex seed:run --specific=user_projects.ts
```
```bash
   knex seed:run --specific=tasks.ts
```
```bash
   knex seed:run --specific=comments.ts
```

## **Bruno API Client Testing**
    
After setting up the development environment, you can run API tests using the **Bruno API Client**.

### 1. Import the Collection
- Import the API collection from your repository into the Bruno API Client.
- **Postman**: If you don't have Bruno, you can import the same collection into **Postman**
- Navigate to the **Collections** section in Bruno and import the collection file (e.g., `my-api-collection.json`).

### 2. Configure Environment Variables in Bruno
- Set up the required environment variables in the Bruno **Environment** section:
  ```env
  baseUrl=http://localhost:3000

## Folder Structure
```plaintext
├── src
│   ├── index.ts         # The entry point of the application
│   ├── services         # Implements business logic that interacts with models
│   ├── controllers      # Manages incoming HTTP requests and provides appropriate responses
│   ├── middlewares      # Functions executed during the request lifecycle (validation, authentication, etc.)
│   ├── routes           # Defines API routes and handles HTTP request methods (GET, POST, PUT, DELETE)
│   ├── utils            # Helper functions that can be reused across the application
│   ├── models           # Database-related implementations for interacting with tables
│   └── tables           # Defines database table schemas (supporting ORM)
├── config               # Configuration files (e.g., database settings, environment variables)
│   └── env.ts           # Handles environment variables from .env
├── tests                # Contains unit tests for each method
├── migrations           # Database schemas and migration files for maintaining data consistency
├── seeding              # Files for seeding the database with initial or sample data
├── .env                 # Environment variables for the application
├── .projenrc.ts         # Projen configuration file
├── package.json         # Project metadata
├── README.md            # Project documentation
└── tsconfig.json        # TypeScript configuration
```
