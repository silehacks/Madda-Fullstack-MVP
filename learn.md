# Learning the Madda Platform: A Backend-Focused Guide

Welcome to the backend of the Madda Construction Platform! This document provides a comprehensive guide to understanding, running, and presenting the backend microservices that power the Madda application.

## 1. What is a Backend?

The backend is the "engine" of any application. It's the part that users don't see directly, but it handles all the critical logic, data storage, and security. For the Madda platform, the backend is responsible for:

*   **User Management:** Registering new companies, handling logins, and securing user data.
*   **Business Logic:** Managing sourcing requests for construction materials and handling user subscriptions.
*   **Data Storage:** Securely storing all information in a database.
*   **API (Application Programming Interface):** Providing a set of rules and endpoints that the frontend (or other services) can use to communicate with it.

## 2. Microservices Architecture: The "Madda" Way

Instead of building one single, monolithic backend application, the Madda platform uses a **microservices architecture**. This means the backend is broken down into several smaller, independent services that work together.

**Why Microservices?**
*   **Isolation:** Each service runs independently. If one service has a problem, it doesn't crash the entire system.
*   **Scalability:** We can scale up specific services that are under heavy load without scaling the whole application.
*   **Maintainability:** Each service is smaller and easier to understand, develop, and update.

### 2.1. The Madda Backend Services

The Madda backend consists of four distinct microservices:

1.  **API Gateway (`api-gateway`)**
    *   **Purpose:** The single entry point for all incoming requests. It acts as a gatekeeper, receiving requests and forwarding them to the correct internal service.
    *   **Key Responsibilities:**
        *   **Routing:** Directs traffic (e.g., `/api/v1/auth/*` goes to the `user-service`).
        *   **Security:** Checks for a valid JWT (JSON Web Token) on protected endpoints.
        *   **CORS:** Manages Cross-Origin Resource Sharing to allow frontend applications to communicate with it.
    *   **Port:** `8080`

2.  **User Service (`user-service`)**
    *   **Purpose:** Handles all user-related operations.
    *   **Key Responsibilities:**
        *   User registration and login.
        *   JWT generation upon successful login.
        *   Manages user profile data.
    *   **Port:** `8081`
    *   **Swagger UI:** `http://localhost:8081/swagger-ui.html`

3.  **Sourcing Service (`sourcing-service`)**
    *   **Purpose:** Manages the core business logic of creating and viewing material sourcing requests.
    *   **Key Responsibilities:**
        *   Creating new sourcing requests.
        *   Listing all sourcing requests for the marketplace.
        *   Retrieving requests for a specific user.
    *   **Port:** `8082`
    *   **Swagger UI:** `http://localhost:8082/swagger-ui.html`

4.  **Subscription Service (`subscription-service`)**
    *   **Purpose:** Manages user subscription plans and status.
    *   **Key Responsibilities:**
        *   Listing available subscription plans.
        *   Allowing users to subscribe to a plan.
        *   Checking a user's current subscription status.
    *   **Port:** `8083`
    *   **Swagger UI:** `http://localhost:8083/swagger-ui.html`

## 3. How to Run the Backend

To run the backend services, you will need:
*   Java 17
*   Maven 3.8 or higher

Follow these steps to start the entire backend infrastructure.

### Step 1: Set the JWT Secret

The services use a shared secret to sign and validate JWTs. Open your terminal and set it as an environment variable.

```bash
export JWT_SECRET="404E635266556A586E3272357538782F413F4428472B4B6250645367566B5970"
```
**Note:** This variable is only set for your current terminal session. If you open a new terminal, you must set it again.

### Step 2: Start the Services

Open four separate terminal windows or tabs. In each terminal, run one of the following commands. It's recommended to run them in this order.

**Terminal 1: API Gateway**
```bash
mvn -f backend/api-gateway/pom.xml spring-boot:run
```

**Terminal 2: User Service**
```bash
mvn -f backend/user-service/pom.xml spring-boot:run
```

**Terminal 3: Sourcing Service**
```bash
mvn -f backend/sourcing-service/pom.xml spring-boot:run
```

**Terminal 4: Subscription Service**
```bash
mvn -f backend/subscription-service/pom.xml spring-boot:run
```

Wait for each service to start up. You'll see the Spring Boot banner and log messages indicating that the service is running on its respective port.

## 4. Presenting and Testing with Swagger UI

**Swagger UI** provides a user-friendly, interactive web interface for exploring and testing your APIs. Each of our business logic services has its own Swagger UI.

### 4.1. The Workflow: A Step-by-Step API Demo

This workflow demonstrates the end-to-end functionality of the backend.

**Step 1: Register a New User**

1.  Go to the **User Service Swagger UI**: `http://localhost:8081/swagger-ui.html`
2.  Find the `POST /api/v1/auth/register` endpoint and expand it.
3.  Click **"Try it out"**.
4.  Edit the example request body:
    ```json
    {
      "companyName": "Test Construction Inc.",
      "email": "test@construction.com",
      "password": "password123"
    }
    ```
5.  Click **"Execute"**. You should receive a `200 OK` response with the new user's details.

**Step 2: Log In and Get a JWT**

1.  Still on the User Service Swagger UI, find the `POST /api/v1/auth/login` endpoint.
2.  Click **"Try it out"**.
3.  Use the credentials you just registered:
    ```json
    {
      "email": "test@construction.com",
      "password": "password123"
    }
    ```
4.  Click **"Execute"**. You will receive a response containing a `token`. **Copy this entire token string.** It's your authentication key for all other requests.

**Step 3: Authorize Your Swagger UIs**

To access protected endpoints, you must tell Swagger to use your JWT.

1.  At the top right of the Swagger UI page (for the User, Sourcing, and Subscription services), click the **"Authorize"** button.
2.  In the popup, paste your JWT into the **"Value"** field.
3.  Click **"Authorize"** and then **"Close"**. Your requests from this page are now authenticated.

**Step 4: Create a Sourcing Request**

1.  Go to the **Sourcing Service Swagger UI**: `http://localhost:8082/swagger-ui.html`
2.  **Authorize** it with your JWT as described above.
3.  Find the `POST /api/v1/sourcing` endpoint.
4.  Click **"Try it out"** and use the following request body:
    ```json
    {
      "materialCategory": "STEEL",
      "materialName": "Rebar 10mm",
      "quantity": 500,
      "unit": "ton"
    }
    ```
5.  Click **"Execute"**. You should get a `200 OK` response.

**Step 5: View Your Subscription Plans**

1.  Go to the **Subscription Service Swagger UI**: `http://localhost:8083/swagger-ui.html`
2.  **Authorize** it with your JWT.
3.  Find the `GET /api/v1/plans` endpoint.
4.  Click **"Try it out"** and then **"Execute"**. You will see a list of available subscription plans.

This completes a full, backend-only demonstration of the Madda platform's core features.