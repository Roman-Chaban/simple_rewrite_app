import { type FC } from 'react';

import { Container } from '@/shared/ui/Container/Container';
import { SidebarLogo } from './SidebarLogo';
import { SidebarMenu } from './SidebarMenu';

export const Sidebar: FC = () => {
   return (
      <aside className='col-span-2'>
         <Container className='shadow-sidebar-shadow-overlay flex h-full w-full flex-col gap-10 rounded-3xl bg-white'>
            <SidebarLogo />
            <SidebarMenu />
         </Container>
      </aside>
   );
};
