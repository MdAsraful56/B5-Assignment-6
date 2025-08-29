import { Minus, Plus } from 'lucide-react';
import * as React from 'react';

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    SidebarRail,
} from '@/components/ui/sidebar';
import { Link } from 'react-router';
import logo from '../assets/Images/Logo/logo (2).png';
import { adminSidebarItems } from '../Routes/adminSidebarItems';

// This is sample data.
const data = {
    navMain: adminSidebarItems,
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar {...props}>
            {/* <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size='lg' asChild>
                            <a href='#'>
                                <div className='bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg'>
                                    <GalleryVerticalEnd className='size-4' />
                                </div>
                                <div className='flex flex-col gap-0.5 leading-none'>
                                    <span className='font-medium'>
                                        Documentation
                                    </span>
                                    <span className=''>v1.0.0</span>
                                </div>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
                <SearchForm />
            </SidebarHeader> */}
            <div className='flex items-center justify-center'>
                <img src={logo} alt='' className='w-30 h-30' />
            </div>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarMenu>
                        {data.navMain.map((item, index) => (
                            <Collapsible
                                key={item.title}
                                defaultOpen={index === 1}
                                className='group/collapsible'
                            >
                                <SidebarMenuItem>
                                    <CollapsibleTrigger asChild>
                                        <SidebarMenuButton>
                                            {item.title}{' '}
                                            <Plus className='ml-auto group-data-[state=open]/collapsible:hidden' />
                                            <Minus className='ml-auto group-data-[state=closed]/collapsible:hidden' />
                                        </SidebarMenuButton>
                                    </CollapsibleTrigger>
                                    {item.items?.length ? (
                                        <CollapsibleContent>
                                            <SidebarMenuSub>
                                                {item.items.map((item) => (
                                                    <SidebarMenuSubItem
                                                        key={item.title}
                                                    >
                                                        <SidebarMenuSubButton
                                                            asChild
                                                        >
                                                            <Link to={item.url}>
                                                                {item.title}
                                                            </Link>
                                                        </SidebarMenuSubButton>
                                                    </SidebarMenuSubItem>
                                                ))}
                                            </SidebarMenuSub>
                                        </CollapsibleContent>
                                    ) : null}
                                </SidebarMenuItem>
                            </Collapsible>
                        ))}
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
            <SidebarRail />
        </Sidebar>
    );
}
