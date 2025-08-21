import { createBrowserRouter } from 'react-router';
import App from '../App';
import AboutPage from '../Page/AboutPage';
import HomePage from '../Page/HomePage';
import LoginPage from '../Page/LoginPage';
import ServicePage from '../Page/ServicePage';

export const router = createBrowserRouter([
    {
        Component: App,
        path: '/',
        children: [
            {
                Component: HomePage,
                index: true,
            },
            {
                Component: AboutPage,
                path: 'about',
            },
            {
                Component: LoginPage,
                path: 'login',
            },
            {
                Component: ServicePage,
                path: 'service',
            },
        ],
    },
]);
