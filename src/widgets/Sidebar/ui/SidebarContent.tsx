import { type ReactNode, type FC } from 'react';

import { Container } from '@/shared/ui/Container/Container';

interface SidebarContentProps {
   children: ReactNode;
}

export const SidebarContent: FC<SidebarContentProps> = ({ children }) => {
   return (
      <aside className='col-span-2 grid grid-cols-4 max-lg:col-span-3 max-lg:max-w-50'>
         <Container className='shadow-sidebar-shadow-overlay col-span-4 flex h-full w-full flex-col justify-between gap-20 rounded-3xl bg-white'>
            {children}
         </Container>
      </aside>
   );
};
