import { SidebarRoutes } from './enums';
import { SidebarMenuList } from './types';

export const sidebarMenuList: SidebarMenuList = [
   {
      id: 1,
      title: 'Dashboard',
      href: SidebarRoutes.HOME,
      icon: '/icons/sidebar/dashboard.svg',
      iconActive: '/icons/sidebar/dashboard_active.svg',
   },
   {
      id: 2,
      title: 'Projects',
      href: SidebarRoutes.PROJECTS,
      icon: '/icons/sidebar/projects.svg',
      iconActive: '/icons/sidebar/projects_active.svg',
   },
   {
      id: 3,
      title: 'Calendar',
      href: SidebarRoutes.CALENDAR,
      icon: '/icons/sidebar/calendar.svg',
      iconActive: '/icons/sidebar/calendar_active.svg',
   },
   {
      id: 4,
      title: 'Vacations',
      href: SidebarRoutes.VACATIONS,
      icon: '/icons/sidebar/vacations.svg',
      iconActive: '/icons/sidebar/vacations_active.svg',
   },
   {
      id: 5,
      title: 'Employees',
      href: SidebarRoutes.EMPLOYEES,
      icon: '/icons/sidebar/employees.svg',
      iconActive: '/icons/sidebar/employees_active.svg',
   },
   {
      id: 6,
      title: 'Messenger',
      href: SidebarRoutes.MESSENGER,
      icon: '/icons/sidebar/messenger.svg',
      iconActive: '/icons/sidebar/messenger_active.svg',
   },
   {
      id: 7,
      title: 'Info Portal',
      href: SidebarRoutes.INFO_PORTAL,
      icon: '/icons/sidebar/info_portal.svg',
      iconActive: '/icons/sidebar/info_portal_active.svg',
   },
];
