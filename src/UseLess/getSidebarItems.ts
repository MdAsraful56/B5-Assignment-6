import { role } from '../Constants/role';
import type { TRole } from '../Types/Index';
import { adminSidebarItems } from './adminSidebarItems';
import { userSidebarItems } from './userSidebarItems';

export const getSidebarItems = (userRole: TRole) => {
    switch (userRole) {
        case role.admin:
            return [...adminSidebarItems];
        case role.rider:
            return [...userSidebarItems];
        case role.driver:
            return [...userSidebarItems];
        default:
            return [];
    }
};
