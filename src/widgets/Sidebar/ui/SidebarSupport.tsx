import { type FC } from 'react';

import Image from 'next/image';

import { Box } from '@/shared/ui/Box/Box';
import { Container } from '@/shared/ui/Container/Container';
import { Button } from '@/shared/ui/Button/Button';

import clsx from 'clsx';

export const SidebarSupport: FC = () => {
   return (
      <Container
         className={clsx(
            'w-full</Container> flex min-h-[10.5rem] max-w-[12.5rem] items-center justify-center px-4 pb-11',
         )}
      >
         <Box
            className={clsx(
               'bg-sidebar-item-active/10 relative flex min-h-[12.5rem] w-full max-w-[12.5rem] flex-col items-center justify-start rounded-3xl',
            )}
         >
            <Image
               className='relative bottom-10'
               priority
               src={'/icons/sidebar/sidebar_illustration.svg'}
               alt='Support illustration'
               width={140}
               height={124}
            />
            <Button className='bg-sidebar-item-active shadow-sidebar-button-shadow-overlay flex min-h-[3rem] w-full max-w-[8.0625rem] items-center justify-center gap-2 rounded-[0.875rem] font-bold text-white'>
               <Image
                  priority
                  src={'/icons/sidebar/chat.svg'}
                  alt='Chat icon'
                  width={24}
                  height={24}
               />
               Support
            </Button>
         </Box>
      </Container>
   );
};
