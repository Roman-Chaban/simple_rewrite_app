import { type FC } from 'react';

import { SidebarLogo } from './SidebarLogo';
import { SidebarMenu } from './SidebarMenu';
import { SidebarSupport } from './SidebarSupport';
import { SidebarContent } from './SidebarContent';
import { Box } from '@/shared/ui/Box/Box';

export const Sidebar: FC = () => {
   return (
      <SidebarContent>
         <Box className='flex flex-col gap-10'>
            <SidebarLogo />
            <SidebarMenu />
         </Box>
         <SidebarSupport />
      </SidebarContent>
   );
};
