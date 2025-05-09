interface SidebarMenuItem {
   id: number;
   title: string;
   href: string;
   icon: string;
   iconActive: string;
}

type SidebarMenuList = Array<SidebarMenuItem>;

export type { SidebarMenuItem, SidebarMenuList };

export interface SidebarModalProps {
   isModalOpen: boolean;
   handleCloseModal: () => void;
}
