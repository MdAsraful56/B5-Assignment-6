import type { ISidebarItem } from '../Types/Index';

import AllDriver from '../Modules/Admin/AllDriver';
import AllRider from '../Modules/Admin/AllRider';
import AllUser from '../Modules/Admin/AllUser';

export const adminSidebarItems: ISidebarItem[] = [
    {
        title: 'Dashboard',
        items: [
            {
                title: 'Installation',
                url: '/dashboard/installation',
                component: AllDriver,
            },
            {
                title: 'Project Structure',
                url: '/dashboard/project-structure',
                component: AllRider,
            },
        ],
    },
    {
        title: 'Get Details',
        items: [
            {
                title: 'All Users',
                url: '/dashboard/all-users',
                component: AllUser,
            },
            {
                title: 'All Drivers',
                url: '/dashboard/all-drivers',
                component: AllDriver,
            },
            {
                title: 'All Riders',
                url: '/dashboard/all-riders',
                component: AllRider,
            },
        ],
    },

    // {
    //     title: 'Building Your Application',
    //     url: '#',
    //     items: [
    //         {
    //             title: 'Routing',
    //             url: '#',
    //         },
    //         {
    //             title: 'Data Fetching',
    //             url: '#',
    //             isActive: true,
    //         },
    //         {
    //             title: 'Rendering',
    //             url: '#',
    //         },
    //         {
    //             title: 'Caching',
    //             url: '#',
    //         },
    //         {
    //             title: 'Styling',
    //             url: '#',
    //         },
    //         {
    //             title: 'Optimizing',
    //             url: '#',
    //         },
    //         {
    //             title: 'Configuring',
    //             url: '#',
    //         },
    //         {
    //             title: 'Testing',
    //             url: '#',
    //         },
    //         {
    //             title: 'Authentication',
    //             url: '#',
    //         },
    //         {
    //             title: 'Deploying',
    //             url: '#',
    //         },
    //         {
    //             title: 'Upgrading',
    //             url: '#',
    //         },
    //         {
    //             title: 'Examples',
    //             url: '#',
    //         },
    //     ],
    // },
    // {
    //     title: 'API Reference',
    //     url: '#',
    //     items: [
    //         {
    //             title: 'Components',
    //             url: '#',
    //         },
    //         {
    //             title: 'File Conventions',
    //             url: '#',
    //         },
    //         {
    //             title: 'Functions',
    //             url: '#',
    //         },
    //         {
    //             title: 'next.config.js Options',
    //             url: '#',
    //         },
    //         {
    //             title: 'CLI',
    //             url: '#',
    //         },
    //         {
    //             title: 'Edge Runtime',
    //             url: '#',
    //         },
    //     ],
    // },
    // {
    //     title: 'Architecture',
    //     url: '#',
    //     items: [
    //         {
    //             title: 'Accessibility',
    //             url: '#',
    //         },
    //         {
    //             title: 'Fast Refresh',
    //             url: '#',
    //         },
    //         {
    //             title: 'Next.js Compiler',
    //             url: '#',
    //         },
    //         {
    //             title: 'Supported Browsers',
    //             url: '#',
    //         },
    //         {
    //             title: 'Turbopack',
    //             url: '#',
    //         },
    //     ],
    // },
    // {
    //     title: 'Community',
    //     url: '#',
    //     items: [
    //         {
    //             title: 'Contribution Guide',
    //             url: '#',
    //         },
    //     ],
    // },
];
