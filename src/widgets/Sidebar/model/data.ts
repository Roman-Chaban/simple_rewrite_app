import { SidebarRoutes } from './enums';
import { SidebarMenuList } from './types';

export const sidebarMenuList: SidebarMenuList = [
   {
      id: 1,
      title: 'Dashboard',
      href: SidebarRoutes.HOME,
      icon: '/icons/sidebar/dashboard.svg',
   },
   {
      id: 2,
      title: 'Projects',
      href: SidebarRoutes.PROJECTS,
      icon: '/icons/sidebar/projects.svg',
   },
   {
      id: 3,
      title: 'Calendar',
      href: SidebarRoutes.CALENDAR,
      icon: '/icons/sidebar/calendar.svg',
   },
   {
      id: 4,
      title: 'Vacations',
      href: SidebarRoutes.VACATIONS,
      icon: '/icons/sidebar/vacations.svg',
   },
   {
      id: 5,
      title: 'Employees',
      href: SidebarRoutes.EMPLOYEES,
      icon: '/icons/sidebar/employees.svg',
   },
   {
      id: 6,
      title: 'Messenger',
      href: SidebarRoutes.MESSENGER,
      icon: '/icons/sidebar/messenger.svg',
   },
   {
      id: 7,
      title: 'Info Portal',
      href: SidebarRoutes.INFO_PORTAL,
      icon: '/icons/sidebar/info_portal.svg',
   },
];
