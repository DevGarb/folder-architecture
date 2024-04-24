import { RouteObject } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout'
import { ErrorPage } from './pages/ErrorPage/ErrorPage'

export { Home } from './pages/HomePage/Home'

export const ROUTES = {
    Home: '/'
}

export default [
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: ROUTES.Home,
            },
        ],
    },
] as RouteObject[]



