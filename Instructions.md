# 🏗️ FOCUSED: Microservices + Microfrontends MVP

## 🎯 PROJECT OVERVIEW: MADDA CONSTRUCTION PLATFORM MVP

Build a **complete full-stack MVP** with 3 core microservices backend + corresponding microfrontends for "Madda" - a B2B construction materials sourcing platform. Deliver a fully functional, integrated system with modern frontend architecture that can be demonstrated to stakeholders.

## 🚀 FULL-STACK ARCHITECTURE

### Technology Stack
**Backend (Microservices):**
- **Java 17** with **Spring Boot 3.2.0**
- **Spring Security 6** + JWT authentication
- **PostgreSQL 15** with JPA/Hibernate
- **Maven** for dependency management
- **OpenAPI 3** with Swagger UI documentation

**Frontend (Microfrontends):**
- **React 18** with TypeScript
- **Module Federation** for microfrontends
- **Vite** as build tool
- **Tailwind CSS** for styling
- **React Query** for state management
- **React Router** for routing
- **Axios** for API calls

### Full-Stack Architecture
```
┌─────────────────────────────────────────────────────────────────┐
│                    MICROFRONTEND SHELL                          │
│                    (Port 3000)                                  │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ │
│  │   Auth    │ │ Sourcing  │ │ Subscription│ │   Shared    │ │
│  │   (3001)    │ │   (3002)    │ │     (3003)│ │  Components │ │
│  │             │ │             │ │             │ │   (3004)    │ │
│  └─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘ │
└─────────────────────────────────────────────────────────────────┘
                               │
┌─────────────────────────────────────────────────────────────────┐
│                    API GATEWAY                                  │
│                    (Port 8080)                                  │
└─────────────────────────────────────────────────────────────────┘
                               │
    ┌─────────────┬─────────────┬─────────────┬─────────────┐
    │             │             │             │             │
    ▼             ▼             ▼             ▼             ▼
┌─────────┐   ┌─────────┐   ┌─────────┐   ┌─────────┐   ┌─────────┐
│  User   │   │Sourcing │   │Subscription│ │ Postgres │   │  Redis  │
│ Service │   │ Service │   │  Service   │ │ Database │   │ (Cache) │
│ (8081)  │   │ (8082)  │   │  (8083)    │ │  (5432)  │   │ (6379)  │
└─────────┘   └─────────┘   └─────────┘   └─────────┘   └─────────┘
```

## 📁 COMPLETE PROJECT STRUCTURE

```
Madda-Fullstack-MVP/
├── backend/                                  # Microservices
│   ├── api-gateway/                         # Spring Cloud Gateway
│   │   ├── src/main/java/com/madda/construction/gateway/
│   │   │   ├── config/
│   │   │   │   ├── GatewayConfig.java
│   │   │   │   ├── SecurityConfig.java
│   │   │   │   ├── CorsConfig.java
│   │   │   │   └── RouteConfig.java
│   │   │   ├── filter/
│   │   │   │   └── JwtAuthenticationFilter.java
│   │   │   └── ApiGatewayApplication.java
│   │   ├── src/main/resources/application.yml
│   │   └── pom.xml
│   ├── user-service/                        # Port 8081
│   │   ├── src/main/java/com/madda/construction/user/
│   │   │   ├── controller/
│   │   │   │   ├── AuthController.java
│   │   │   │   └── UserController.java
│   │   │   ├── service/
│   │   │   │   ├── UserService.java
│   │   │   │   ├── JwtService.java
│   │   │   │   └── AuthService.java
│   │   │   ├── repository/
│   │   │   │   └── UserRepository.java
│   │   │   ├── model/
│   │   │   │   ├── User.java
│   │   │   │   └── enums/
│   │   │   │       ├── UserStatus.java
│   │   │   │       └── SubscriptionTier.java
│   │   │   ├── config/
│   │   │   │   ├── SecurityConfig.java
│   │   │   │   └── OpenApiConfig.java
│   │   │   ├── dto/
│   │   │   │   ├── request/
│   │   │   │   │   ├── LoginRequest.java
│   │   │   │   │   └── RegisterRequest.java
│   │   │   │   ├── response/
│   │   │   │   │   ├── AuthResponse.java
│   │   │   │   │   ├── UserResponse.java
│   │   │   │   │   └── ApiResponse.java
│   │   │   └── UserServiceApplication.java
│   │   ├── src/main/resources/application.yml
│   │   └── pom.xml
│   ├── sourcing-service/                    # Port 8082
│   │   ├── src/main/java/com/madda/construction/sourcing/
│   │   │   ├── controller/
│   │   │   │   └── SourcingController.java
│   │   │   ├── service/
│   │   │   │   └── SourcingService.java
│   │   │   ├── repository/
│   │   │   │   └── SourcingRequestRepository.java
│   │   │   ├── model/
│   │   │   │   ├── SourcingRequest.java
│   │   │   │   └── enums/
│   │   │   │       ├── RequestStatus.java
│   │   │   │       └── MaterialCategory.java
│   │   │   ├── dto/
│   │   │   │   ├── request/
│   │   │   │   │   ├── CreateSourcingRequest.java
│   │   │   │   │   └── SearchFilterRequest.java
│   │   │   │   ├── response/
│   │   │   │   │   ├── SourcingRequestResponse.java
│   │   │   │   │   └── SearchResponse.java
│   │   │   └── SourcingServiceApplication.java
│   │   ├── src/main/resources/application.yml
│   │   └── pom.xml
│   ├── subscription-service/                # Port 8083
│   │   ├── src/main/java/com/madda/construction/subscription/
│   │   │   ├── controller/
│   │   │   │   ├── SubscriptionController.java
│   │   │   │   └── PlanController.java
│   │   │   ├── service/
│   │   │   │   ├── SubscriptionService.java
│   │   │   │   └── PlanService.java
│   │   │   ├── repository/
│   │   │   │   ├── SubscriptionRepository.java
│   │   │   │   └── SubscriptionPlanRepository.java
│   │   │   ├── model/
│   │   │   │   ├── Subscription.java
│   │   │   │   ├── SubscriptionPlan.java
│   │   │   │   └── enums/
│   │   │   │       ├── SubscriptionStatus.java
│   │   │   │       └── PlanType.java
│   │   │   ├── dto/
│   │   │   │   ├── request/
│   │   │   │   │   └── SubscribeRequest.java
│   │   │   │   ├── response/
│   │   │   │   │   ├── SubscriptionResponse.java
│   │   │   │   │   └── PlanResponse.java
│   │   │   └── SubscriptionServiceApplication.java
│   │   ├── src/main/resources/application.yml
│   │   └── pom.xml
├── frontend/                                # Microfrontends
│   ├── shell/                              # Main Shell App (Port 3000)
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── Header.tsx
│   │   │   │   ├── Navigation.tsx
│   │   │   │   ├── Layout.tsx
│   │   │   │   └── Loading.tsx
│   │   │   ├── hooks/
│   │   │   │   ├── useAuth.ts
│   │   │   │   └── useApi.ts
│   │   │   ├── types/
│   │   │   │   └── index.ts
│   │   │   ├── utils/
│   │   │   │   ├── auth.ts
│   │   │   │   └── api.ts
│   │   │   ├── App.tsx
│   │   │   ├── main.tsx
│   │   │   └── vite-env.d.ts
│   │   ├── package.json
│   │   ├── vite.config.ts
│   │   ├── tsconfig.json
│   │   └── index.html
│   ├── auth-microfrontend/                 # Auth MF (Port 3001)
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── LoginForm.tsx
│   │   │   │   ├── RegisterForm.tsx
│   │   │   │   └── Profile.tsx
│   │   │   ├── pages/
│   │   │   │   ├── LoginPage.tsx
│   │   │   │   ├── RegisterPage.tsx
│   │   │   │   └── ProfilePage.tsx
│   │   │   ├── hooks/
│   │   │   │   └── useAuthMF.ts
│   │   │   ├── bootstrap.tsx
│   │   │   └── App.tsx
│   │   ├── package.json
│   │   ├── vite.config.ts
│   │   ├── tsconfig.json
│   │   └── index.html
│   ├── sourcing/             # Sourcing MF (Port 3002)
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── RequestCard.tsx
│   │   │   │   ├── RequestForm.tsx
│   │   │   │   ├── RequestList.tsx
│   │   │   │   └── SearchFilters.tsx
│   │   │   ├── pages/
│   │   │   │   ├── RequestListPage.tsx
│   │   │   │   ├── RequestCreatePage.tsx
│   │   │   │   ├── RequestDetailPage.tsx
│   │   │   │   └── MyRequestsPage.tsx
│   │   │   ├── hooks/
│   │   │   │   ├── useSourcing.ts
│   │   │   │   └── useRequests.ts
│   │   │   ├── bootstrap.tsx
│   │   │   └── App.tsx
│   │   ├── package.json
│   │   ├── vite.config.ts
│   │   ├── tsconfig.json
│   │   └── index.html
│   ├── subscription/         # Subscription MF (Port 3003)
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── PlanCard.tsx
│   │   │   │   ├── SubscriptionStatus.tsx
│   │   │   │   ├── UsageMeter.tsx
│   │   │   │   └── BillingInfo.tsx
│   │   │   ├── pages/
│   │   │   │   ├── PlansPage.tsx
│   │   │   │   ├── SubscriptionPage.tsx
│   │   │   │   └── BillingPage.tsx
│   │   │   ├── hooks/
│   │   │   │   └── useSubscription.ts
│   │   │   ├── bootstrap.tsx
│   │   │   └── App.tsx
│   │   ├── package.json
│   │   ├── vite.config.ts
│   │   ├── tsconfig.json
│   │   └── index.html
│   └── shared-components/                  # Shared Components (Port 3004)
│       ├── src/
│       │   ├── components/
│       │   │   ├── ui/
│       │   │   │   ├── Button.tsx
│       │   │   │   ├── Input.tsx
│       │   │   │   ├── Modal.tsx
│       │   │   │   ├── Card.tsx
│       │   │   │   └── Table.tsx
│       │   │   ├── layout/
│       │   │   │   ├── Sidebar.tsx
│       │   │   │   └── Footer.tsx
│       │   │   └── feedback/
│       │   │       ├── LoadingSpinner.tsx
│       │   │       ├── ErrorMessage.tsx
│       │   │       └── SuccessMessage.tsx
│       │   ├── hooks/
│       │   │   └── useToast.ts
│       │   ├── utils/
│       │   │   └── formatters.ts
│       │   └── index.ts
│       ├── package.json
│       ├── vite.config.ts
│       ├── tsconfig.json
│       └── index.html
├── docker-compose.yml
├── package.json (workspace root)
└── scripts/
    └── database/
        └── init-databases.sql
```

## 🔧 MICROFRONTEND ARCHITECTURE DETAILS

### 1. SHELL APPLICATION (Port 3000)
**Responsibilities:**
- Main application shell and layout
- Routing and navigation management
- Authentication state management
- Microfrontend orchestration
- Shared context providers

**Key Features:**
- Module Federation host configuration
- Dynamic microfrontend loading
- Centralized routing with React Router
- Authentication context provider
- Global error boundary

**Module Federation Config (Shell):**
```javascript
// vite.config.ts
export default defineConfig({
  server: { port: 3000 },
  plugins: [
    react(),
    federation({
      name: 'shell',
      remotes: {
        auth: 'http://localhost:3001/assets/remoteEntry.js',
        sourcing: 'http://localhost:3002/assets/remoteEntry.js',
        subscription: 'http://localhost:3003/assets/remoteEntry.js',
        shared: 'http://localhost:3004/assets/remoteEntry.js'
      },
      shared: ['react', 'react-dom', 'react-router-dom']
    })
  ]
});
```

### 2. AUTH MICROFRONTEND (Port 3001)
**Features:**
- User registration and login forms
- Profile management
- Authentication state handling
- Protected route components

**Exposed Components:**
```typescript
// Module Federation exposes
export { LoginPage } from './pages/LoginPage';
export { RegisterPage } from './pages/RegisterPage';
export { ProfilePage } from './pages/ProfilePage';
export { useAuth } from './hooks/useAuthMF';
```

**Key Components:**
- `LoginForm` - Email/password authentication
- `RegisterForm` - Business user registration
- `Profile` - User profile management
- `ProtectedRoute` - Route protection HOC

### 3. SOURCING MICROFRONTEND (Port 3002)
**Features:**
- Material sourcing request creation
- Request listing and search
- Request details and management
- Advanced filtering and pagination

**Exposed Components:**
```typescript
export { RequestListPage } from './pages/RequestListPage';
export { RequestCreatePage } from './pages/RequestCreatePage';
export { RequestDetailPage } from './pages/RequestDetailPage';
export { MyRequestsPage } from './pages/MyRequestsPage';
export { useSourcing } from './hooks/useSourcing';
```

**Key Components:**
- `RequestCard` - Request preview card
- `RequestForm` - Create/edit request form
- `RequestList` - Paginated request listing
- `SearchFilters` - Advanced search interface

### 4. SUBSCRIPTION MICROFRONTEND (Port 3003)
**Features:**
- Subscription plan selection
- Subscription status display
- Usage tracking and limits
- Billing information

**Exposed Components:**
```typescript
export { PlansPage } from './pages/PlansPage';
export { SubscriptionPage } from './pages/SubscriptionPage';
export { BillingPage } from './pages/BillingPage';
export { useSubscription } from './hooks/useSubscription';
```

**Key Components:**
- `PlanCard` - Subscription plan display
- `SubscriptionStatus` - Current subscription info
- `UsageMeter` - Request usage visualization
- `BillingInfo` - Payment and billing details

### 5. SHARED COMPONENTS (Port 3004)
**Features:**
- Reusable UI components
- Common hooks and utilities
- Design system foundation
- Type definitions

**Exposed Components:**
```typescript
export { Button, Input, Modal, Card, Table } from './components/ui';
export { Sidebar, Footer } from './components/layout';
export { LoadingSpinner, ErrorMessage } from './components/feedback';
export { useToast } from './hooks/useToast';
```

## 🎨 UI/UX DESIGN SPECIFICATIONS

### Design System
- **Color Palette**: Professional construction-themed colors
- **Typography**: Inter font family
- **Spacing**: 8px base unit system
- **Components**: Consistent, reusable component library

### Key Pages & Layouts

**1. Landing/Layout**
```tsx
// Shell main layout
<Layout>
  <Header>
    <Navigation />
    <UserMenu />
  </Header>
  <Sidebar>
    <NavLinks />
    <SubscriptionStatus />
  </Sidebar>
  <MainContent>
    <Outlet /> {/* Microfrontends render here */}
  </MainContent>
</Layout>
```

**2. Authentication Flow**
```tsx
// Auth microfrontend - Login Page
<LoginPage>
  <LoginForm 
    onSuccess={(token) => updateAuth(token)}
    onError={(error) => showToast(error)}
  />
</LoginPage>
```

**3. Sourcing Dashboard**
```tsx
// Sourcing microfrontend - Request List
<RequestListPage>
  <SearchFilters 
    onFilterChange={handleFilter}
    categories={materialCategories}
  />
  <RequestList 
    requests={paginatedRequests}
    onRequestClick={navigateToDetail}
  />
  <Pagination 
    currentPage={page}
    totalPages={totalPages}
    onPageChange={setPage}
  />
</RequestListPage>
```

**4. Subscription Management**
```tsx
// Subscription microfrontend - Plans Page
<PlansPage>
  <PlanCard 
    plan={freePlan}
    currentPlan={userSubscription}
    onSelect={handlePlanSelect}
  />
  <PlanCard 
    plan={premiumPlan}
    currentPlan={userSubscription}
    onSelect={handlePlanSelect}
  />
  <UsageMeter 
    used={requestsUsed}
    limit={requestLimit}
    resetDate={resetDate}
  />
</PlansPage>
```

## 🔗 BACKEND-FRONTEND INTEGRATION

### API Client Configuration
```typescript
// Frontend API client
const apiClient = axios.create({
  baseURL: 'http://localhost:8080/api',
  timeout: 10000,
});

// Request interceptor for JWT
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized - redirect to login
      window.dispatchEvent(new CustomEvent('auth-required'));
    }
    return Promise.reject(error);
  }
);
```

### React Query Hooks
```typescript
// Custom hooks for each microfrontend
export const useSourcingRequests = (filters: SearchFilters) => {
  return useQuery({
    queryKey: ['sourcing-requests', filters],
    queryFn: () => sourcingAPI.getRequests(filters),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useCreateRequest = () => {
  return useMutation({
    mutationFn: (request: CreateSourcingRequest) => 
      sourcingAPI.createRequest(request),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['sourcing-requests'] });
    },
  });
};
```

### Event-Driven Communication
```typescript
// Cross-microfrontend events
export const useMicrofrontendEvents = () => {
  const dispatchEvent = (eventName: string, data: any) => {
    window.dispatchEvent(new CustomEvent(eventName, { detail: data }));
  };

  const subscribeToEvent = (eventName: string, callback: (data: any) => void) => {
    const handler = (event: CustomEvent) => callback(event.detail);
    window.addEventListener(eventName, handler as EventListener);
    return () => window.removeEventListener(eventName, handler as EventListener);
  };

  return { dispatchEvent, subscribeToEvent };
};

// Event types
export const EVENTS = {
  AUTH_CHANGED: 'auth-changed',
  SUBSCRIPTION_UPDATED: 'subscription-updated',
  REQUEST_CREATED: 'request-created',
  PROFILE_UPDATED: 'profile-updated'
};
```

## 🚀 DEPLOYMENT & DEVELOPMENT

### Docker Compose (Full Stack)
```yaml
version: '3.8'
services:
  # Backend Services
  postgres:
    image: postgres:15
    environment:
      POSTGRES_MULTIPLE_DATABASES: madda_user_db,madda_sourcing_db,madda_subscription_db
      POSTGRES_USER: madda_user
      POSTGRES_PASSWORD: madda_password
    ports: ["5432:5432"]
    volumes:
      - ./scripts/database/init-databases.sql:/docker-entrypoint-initdb.d/init-databases.sql

  redis:
    image: redis:7-alpine
    ports: ["6379:6379"]

  api-gateway:
    build: ./backend/api-gateway
    ports: ["8080:8080"]
    depends_on: [postgres, redis]

  user-service:
    build: ./backend/user-service
    environment:
      - SPRING_DATASOURCE_URL=jdbc:postgresql://postgres:5432/madda_user_db
    depends_on: [postgres]

  sourcing-service:
    build: ./backend/sourcing-service
    environment:
      - SPRING_DATASOURCE_URL=jdbc:postgresql://postgres:5432/madda_sourcing_db
    depends_on: [postgres]

  subscription-service:
    build: ./backend/subscription-service
    environment:
      - SPRING_DATASOURCE_URL=jdbc:postgresql://postgres:5432/madda_subscription_db
    depends_on: [postgres]

  # Frontend Services
  shell-app:
    build: ./frontend/shell
    ports: ["3000:3000"]
    depends_on: [api-gateway]

  auth-frontend:
    build: ./frontend/auth-microfrontend
    ports: ["3001:3001"]

  sourcing-frontend:
    build: ./frontend/sourcing-microfrontend
    ports: ["3002:3002"]

  subscription-frontend:
    build: ./frontend/subscription-microfrontend
    ports: ["3003:3003"]

  shared-components:
    build: ./frontend/shared-components
    ports: ["3004:3004"]
```

### Development Scripts
```json
{
  "scripts": {
    "dev:backend": "concurrently \"mvn spring-boot:run -pl user-service\" \"mvn spring-boot:run -pl sourcing-service\" \"mvn spring-boot:run -pl subscription-service\" \"mvn spring-boot:run -pl api-gateway\"",
    "dev:frontend": "concurrently \"npm run dev --workspace=shell\" \"npm run dev --workspace=auth-microfrontend\" \"npm run dev --workspace=sourcing-microfrontend\" \"npm run dev --workspace=subscription-microfrontend\" \"npm run dev --workspace=shared-components\"",
    "dev:fullstack": "concurrently \"npm run dev:backend\" \"npm run dev:frontend\"",
    "build:frontend": "npm run build --workspaces",
    "docker:up": "docker-compose up -d",
    "docker:down": "docker-compose down"
  }
}
```

## 🧪 DEMONSTRATION WORKFLOW

### Complete User Journey Demo

**1. Start the Full Stack**
```bash
# Option 1: Docker Compose (Recommended)
docker-compose up -d

# Option 2: Manual development
npm run dev:fullstack
```

**2. Access the Application**
- **Main App**: http://localhost:3000
- **Backend API**: http://localhost:8080
- **Swagger Docs**: http://localhost:8081/swagger-ui.html (User Service)

**3. Demo Flow:**
1. **Landing Page** → Navigate to Registration
2. **User Registration** → Create business account
3. **Login** → Authenticate and get JWT
4. **Subscription Plans** → Browse available plans
5. **Subscribe** → Select a plan (simulated)
6. **Create Sourcing Request** → Post material needs
7. **Browse Requests** → Search and filter marketplace
8. **Profile Management** → Update business info
9. **Usage Tracking** → Monitor request limits

### Key Demonstration Features

**Microfrontend Benefits:**
- ✅ Independent development and deployment
- ✅ Technology agnostic (could mix React, Vue, etc.)
- ✅ Team autonomy and faster development
- ✅ Incremental updates and rollbacks

**User Experience:**
- ✅ Seamless navigation between features
- ✅ Consistent design system
- ✅ Real-time updates and state synchronization
- ✅ Professional, responsive interface

**Technical Excellence:**
- ✅ Proper error handling and loading states
- ✅ Optimistic updates for better UX
- ✅ Offline capability considerations
- ✅ Performance optimizations

## 📊 MVP SUCCESS CRITERIA

### Must-Have Functionality
- ✅ All 3 backend services + 4 frontend microfrontends running
- ✅ End-to-end user authentication flow
- ✅ Complete sourcing request lifecycle
- ✅ Subscription management and usage tracking
- ✅ Microfrontend communication and state sharing
- ✅ Responsive, professional UI design

### Technical Requirements
- ✅ Module Federation working correctly
- ✅ JWT authentication across all services
- ✅ API Gateway routing all requests
- ✅ Shared component library integration
- ✅ Proper error handling and validation
- ✅ Comprehensive TypeScript types

### Demonstration Readiness
- ✅ Clean, professional code structure
- ✅ Comprehensive documentation
- ✅ Easy setup and running instructions
- ✅ Sample data for immediate testing
- ✅ Professional UI/UX design
- ✅ Cross-browser compatibility

---

**BUILD INSTRUCTION:** Generate this complete full-stack MVP with 3 microservices backend + 4 microfrontends following the exact specifications above. Focus on delivering a **production-ready demonstration** that showcases modern microfrontend architecture integrated with microservices backend. Ensure all components work seamlessly together with proper authentication, state management, and professional UI/UX design.

The final deliverable should be a fully functional, self-contained full-stack application that can be immediately demonstrated to stakeholders, showcasing both the business value and technical excellence of the Madda platform.
