import { type ReactNode, type FC } from 'react';

import { ComponentWrapper } from '@/features/ui/ComponentWrapper/ComponentWrapper';

interface SidebarContentProps {
   children: ReactNode;
}

export const SidebarContent: FC<SidebarContentProps> = ({ children }) => {
   return (
      <aside className='w-full max-w-[12.5rem] max-lg:max-w-50'>
         <ComponentWrapper className='col-span-4 flex h-full w-full flex-col justify-between gap-20 rounded-3xl bg-white shadow-xs'>
            {children}
         </ComponentWrapper>
      </aside>
   );
};
