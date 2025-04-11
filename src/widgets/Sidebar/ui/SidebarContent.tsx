import { type ReactNode, type FC } from 'react';

import { Container } from '@/shared/ui/Container/Container';

interface SidebarContentProps {
   children: ReactNode;
}

export const SidebarContent: FC<SidebarContentProps> = ({ children }) => {
   return (
      <aside className='w-full max-w-[12.5rem] max-lg:max-w-50'>
         <Container className='col-span-4 flex h-full w-full flex-col justify-between gap-20 rounded-3xl bg-white shadow-xs'>
            {children}
         </Container>
      </aside>
   );
};
