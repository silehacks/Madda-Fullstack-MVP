# Learning the Madda Construction Platform MVP

Welcome to the Madda Construction Platform MVP! This document will guide you through the project's architecture, components, and how to get it up and running.

## 1. Project Overview

This project is a full-stack Model-View-Presenter (MVP) for a B2B construction materials sourcing platform called "Madda." It's built with a modern architecture that separates concerns into microservices for the backend and microfrontends for the frontend.

### 1.1. Technology Stack

**Backend (Microservices):**
- **Java 17** with **Spring Boot 3.2.0**
- **Spring Security 6** + JWT authentication
- **PostgreSQL 15** with JPA/Hibernate
- **Maven** for dependency management
- **OpenAPI 3** with Swagger UI documentation

**Frontend (Microfrontends):**
- **React 18** with TypeScript
- **Module Federation** for microfrontends
- **Vite** as a build tool
- **Tailwind CSS** for styling
- **React Query** for state management
- **React Router** for routing
- **Axios** for API calls

### 1.2. Architecture

The application is divided into several independent services that communicate with each other:

- **Backend:**
  - `api-gateway`: The single entry point for all frontend requests. It routes requests to the appropriate microservice and handles cross-cutting concerns like authentication.
  - `user-service`: Manages user registration, login, and profile data.
  - `sourcing-service`: Handles the creation and management of material sourcing requests.
  - `subscription-service`: Manages user subscription plans and status.

- **Frontend:**
  - `shell`: The main application that orchestrates the other microfrontends. It provides the main layout, navigation, and routing.
  - `auth-microfrontend`: Contains the login, registration, and profile pages.
  - `sourcing-microfrontend`: Contains the pages for creating, viewing, and managing sourcing requests.
  - `subscription-microfrontend`: Contains the pages for viewing and managing subscription plans.
  - `shared-components`: A library of reusable React components that are used across the other microfrontends.

## 2. Getting Started

### 2.1. Prerequisites

- **Docker:** The easiest way to run the application is with Docker. Make sure you have Docker and Docker Compose installed.
- **Node.js:** If you want to run the frontend services manually, you'll need Node.js (v18 or later) and npm.
- **Java:** If you want to run the backend services manually, you'll need Java 17 and Maven.

### 2.2. Running the Application

**Option 1: Docker Compose (Recommended)**

This is the simplest way to get the entire application running.

1.  **Build and start the services:**
    ```bash
    docker-compose up --build -d
    ```

2.  **Access the application:**
    - **Main App:** http://localhost:3000
    - **API Gateway:** http://localhost:8080
    - **User Service Swagger UI:** http://localhost:8081/swagger-ui.html
    - **Sourcing Service Swagger UI:** http://localhost:8082/swagger-ui.html
    - **Subscription Service Swagger UI:** http://localhost:8083/swagger-ui.html

**Option 2: Manual Development**

If you prefer to run the services manually, you can use the following commands:

1.  **Start the backend services:**
    ```bash
    npm run dev:backend
    ```

2.  **Start the frontend services:**
    ```bash
    npm run dev:frontend
    ```

3.  **Access the application:**
    - **Main App:** http://localhost:3000
    - **Auth Microfrontend:** http://localhost:3001
    - **Sourcing Microfrontend:** http://localhost:3002
    - **Subscription Microfrontend:** http://localhost:3003
    - **Shared Components:** http://localhost:3004

## 3. Exploring the Codebase

### 3.1. Backend

- **`backend/api-gateway`**: The entry point for all API requests. It uses Spring Cloud Gateway to route requests to the appropriate microservice.
- **`backend/user-service`**: Handles user authentication and management.
- **`backend/sourcing-service`**: Manages sourcing requests.
- **`backend/subscription-service`**: Manages user subscriptions.

Each backend service is a standard Spring Boot application. You can explore the code in the `src/main/java` directory of each service.

### 3.2. Frontend

- **`frontend/shell`**: The main application that ties everything together. It uses Module Federation to load the other microfrontends.
- **`frontend/auth-microfrontend`**: Contains the UI for authentication.
- **`frontend/sourcing`**: Contains the UI for sourcing requests.
- **`frontend/subscription`**: Contains the UI for subscriptions.
- **`frontend/shared-components`**: A library of reusable React components.

Each frontend service is a standard React application built with Vite. You can explore the code in the `src` directory of each service.

## 4. How It Works: Key Concepts

### 4.1. Microservices

The backend is split into small, independent services. This has several advantages:

- **Scalability:** Each service can be scaled independently.
- **Resilience:** If one service fails, the others can continue to run.
- **Maintainability:** Each service is small and easy to understand.

### 4.2. Microfrontends

The frontend is also split into small, independent applications. This has similar advantages to microservices:

- **Independent Teams:** Different teams can work on different parts of the application without interfering with each other.
- **Faster Development:** Smaller codebases are easier to work with.
- **Technology Flexibility:** Different microfrontends could potentially use different technologies.

### 4.3. Module Federation

Module Federation is a feature of Webpack (and supported by Vite through a plugin) that allows a JavaScript application to dynamically load code from another application. This is the key technology that enables the microfrontend architecture.

In this project, the `shell` application uses Module Federation to load the `auth`, `sourcing`, and `subscription` microfrontends.

## 5. Next Steps

Now that you have a basic understanding of the project, here are some things you can do:

- **Explore the code:** Dive into the source code of the different services to see how they work.
- **Run the application:** Use Docker Compose to run the application and see it in action.
- **Experiment:** Try making changes to the code and see what happens.
- **Read the `Instructions.md` file:** For a more detailed breakdown of the project requirements, refer to the `Instructions.md` file in the root of the repository.