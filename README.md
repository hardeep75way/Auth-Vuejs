# Vue 3 Authentication App

A modern authentication application built with Vue 3, TypeScript, and Vite, featuring user registration, login, and protected routes.

## 🚀 Features

- **User Authentication**: Complete login and registration flow
- **Protected Routes**: Route guards to secure authenticated pages
- **Token Management**: Automatic token storage and refresh handling
- **API Integration**: Axios-based API client with request interceptors
- **State Management**: Pinia for centralized auth state
- **Type Safety**: Full TypeScript support with type definitions
- **Modern UI**: Tailwind CSS for responsive styling
- **Composable Architecture**: Reusable auth composable for component logic

## 🛠️ Tech Stack

- **Vue 3** - Progressive JavaScript framework
- **TypeScript** - Type-safe JavaScript
- **Vite** - Next generation frontend tooling
- **Pinia** - State management
- **Vue Router** - Official routing solution
- **Axios** - Promise-based HTTP client
- **Tailwind CSS** - Utility-first CSS framework

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd vue-auth
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
VITE_API_URL=http://localhost:3000/api
```

4. Start the development server:
```bash
npm run dev
```

## 📁 Project Structure

```
src/
├── api/              # API configuration and auth endpoints
│   ├── axios.ts      # Axios instance with interceptors
│   └── auth.api.ts   # Authentication API calls
├── components/       # Reusable Vue components
│   └── common/
│       └── BaseButton.vue
├── composables/      # Vue composables
│   └── useAuth.ts    # Authentication composable
├── layouts/          # Layout components
│   └── AuthLayout.vue
├── router/           # Vue Router configuration
│   ├── index.ts      # Route definitions
│   └── guard.ts      # Route guards
├── stores/           # Pinia stores
│   └── auth.store.ts # Authentication state
├── types/            # TypeScript type definitions
│   └── auth.types.ts
├── utils/            # Utility functions
│   └── token.ts      # Token management
├── views/            # Page components
│   ├── LoginView.vue
│   ├── RegisterView.vue
│   └── DashboardView.vue
├── App.vue           # Root component
└── main.ts           # Application entry point
```

## 🔐 Authentication Flow

1. **Registration**: Users create an account with credentials
2. **Login**: Users authenticate and receive access tokens
3. **Token Storage**: Tokens are securely stored in localStorage
4. **API Requests**: Axios interceptor automatically adds auth headers
5. **Route Protection**: Auth guards redirect unauthenticated users
6. **Logout**: Clear tokens and redirect to login

## 🌐 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_API_URL` | Backend API base URL | `http://localhost:3000/api` |

## 🚦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run type-check` - Run TypeScript type checking

## 🔧 Configuration

### TypeScript Configuration
The project uses TypeScript with strict mode enabled. See [tsconfig.json](tsconfig.json) for compiler options.

### Vite Configuration
Build configuration is in [vite.config.ts](vite.config.ts) with path aliases and plugins.

### Tailwind Configuration
Customize styles in [tailwind.config.js](tailwind.config.js).

## 📝 Usage

### Using the Auth Composable

```typescript
import { useAuth } from '@/composables/useAuth'

const { login, register, logout, isAuthenticated } = useAuth()

// Login
await login({ email: 'user@example.com', password: 'password' })

// Register
await register({ name: 'John', email: 'john@example.com', password: 'password' })

// Logout
logout()
```

### Protecting Routes

Routes are automatically protected by the auth guard. Configure in [router/index.ts](src/router/index.ts):

```typescript
{
  path: '/dashboard',
  component: DashboardView,
  meta: { requiresAuth: true }
}
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

Built with ❤️ using Vue 3 + TypeScript + Vite
