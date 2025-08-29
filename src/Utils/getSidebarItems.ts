import { role } from '../Constants/role';
import { adminSidebarItems } from '../Routes/adminSidebarItems';
import { userSidebarItems } from '../Routes/userSidebarItems';
import type { TRole } from '../Types/Index';

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
