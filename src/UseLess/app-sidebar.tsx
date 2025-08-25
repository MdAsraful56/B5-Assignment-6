import Logo from '@/assets/Images/Logo/logo (2).png';
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
} from '@/components/ui/sidebar';
import * as React from 'react';
import { Link } from 'react-router';
import { useUserInfoQuery } from '../Redux/Features/Auth/auth.api';
import { getSidebarItems } from './getSidebarItems';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const { data: userData } = useUserInfoQuery(undefined);
    // console.log(userData?.data?.role, 'userData role');

    const data = {
        navMain: getSidebarItems(userData?.data?.data?.role),
    };

    return (
        <Sidebar {...props}>
            <SidebarHeader className='items-center'>
                <Link to='/'>
                    <Logo />
                </Link>
            </SidebarHeader>
            <SidebarContent>
                {/* We create a SidebarGroup for each parent. */}
                {data.navMain.map((item) => (
                    <SidebarGroup key={item.title}>
                        <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {item.items.map((item) => (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton asChild>
                                            <Link to={item.url}>
                                                {item.title}
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                ))}
            </SidebarContent>
            <SidebarRail />
        </Sidebar>
    );
}
