import { type FC } from 'react';

import { Container } from '@/shared/ui/Container/Container';
import { SidebarLogo } from './SidebarLogo';
import { SidebarMenu } from './SidebarMenu';
import { SidebarSupport } from './SidebarSupport';
import { Box } from '@/shared/ui/Box/Box';

export const Sidebar: FC = () => {
   return (
      <aside className='col-span-2 w-full max-w-50 max-lg:col-span-3'>
         <Container className='shadow-sidebar-shadow-overlay flex h-full w-full flex-col justify-between gap-20 rounded-3xl bg-white'>
            <Box className='flex flex-col gap-10'>
               <SidebarLogo />
               <SidebarMenu />
            </Box>
            <SidebarSupport />
         </Container>
      </aside>
   );
};
