interface SidebarMenuItem {
   id: number;
   title: string;
   href: string;
   icon: string;
}

type SidebarMenuList = Array<SidebarMenuItem>;

export type { SidebarMenuItem, SidebarMenuList };
