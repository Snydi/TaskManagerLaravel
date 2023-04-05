import Auth from "./pages/Auth"
import Home from "./pages/Home"

export const authRoutes = [
    {
        path: '/',
        Component: Home
    }
]
export const publicRoutes = [
    {
        path: '/login',
        isRegistering: false,
        Component: Auth
    },
    {
        path: '/register',
        isRegistering:true,
        Component: Auth
    }
]