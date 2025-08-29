import { createBrowserRouter, Navigate } from 'react-router';
import App from '../App';
import DashboardLayout from '../Layout/DashboardLayout';
import AboutPage from '../Page/AboutPage';
import DrivePage from '../Page/DrivePage';
import HomePage from '../Page/HomePage';
import LoginPage from '../Page/LoginPage';
import RegisterPage from '../Page/RegisterPage';
import RidePage from '../Page/RidePage';
import ServicePage from '../Page/ServicePage';
import UnauthorizedPage from '../Page/UnauthorizedPage';
import { generateRoutes } from '../Utils/generateRoutes';
import { adminSidebarItems } from './adminSidebarItems';
import DrivePrivateRoute from './DrivePrivateRoute';
import RidePrivateRoute from './RidePrivateRoute';

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
                Component: UnauthorizedPage,
                path: 'unauthorized',
            },
            {
                Component: RidePrivateRoute,
                children: [
                    {
                        Component: RidePage,
                        path: 'ride',
                    },
                ],
            },
            {
                Component: DrivePrivateRoute,
                children: [
                    {
                        Component: DrivePage,
                        path: 'drive',
                    },
                ],
            },
        ],
    },
    {
        Component: DashboardLayout,
        path: '/dashboard',
        children: [
            { index: true, element: <Navigate to='/dashboard' /> },
            ...generateRoutes(adminSidebarItems),
        ],
    },
    // {
    //     Component: withAuth(DashboardLayout, role.rider as TRole),
    //     path: '/user',
    //     children: [
    //         { index: true, element: <Navigate to='/user/bookings' /> },
    //         ...generateRoutes(userSidebarItems),
    //     ],
    // },
    {
        Component: LoginPage,
        path: '/login',
    },
    {
        Component: RegisterPage,
        path: '`/register',
    },
    {
        Component: ServicePage,
        path: '/service',
    },
]);
