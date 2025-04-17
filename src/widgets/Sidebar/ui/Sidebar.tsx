'use client';

import { useState, type FC } from 'react';

import Image from 'next/image';

import { SidebarLogo } from './SidebarLogo';
import { SidebarMenu } from './SidebarMenu';
import { SidebarSupport } from './SidebarSupport';
import { SidebarContent } from './SidebarContent';
import { Box } from '@/shared/ui/Box/Box';
import { Modal } from '@/shared/ui/Modal/Modal';
import { Button } from '@/shared/ui/Button/Button';

export const Sidebar: FC = () => {
   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

   return (
      <SidebarContent>
         <Box className='flex flex-col gap-10'>
            <SidebarLogo />
            <SidebarMenu />
         </Box>
         <SidebarSupport onModalOpen={() => setIsModalOpen(true)} />
         <Modal
            isModalOpen={isModalOpen}
            onModalClose={() => setIsModalOpen(false)}
         >
            <Button
               onClick={() => setIsModalOpen(false)}
               className='rounded-small-sm bg-background-body absolute top-[1.875rem] right-[1.875rem] flex h-full max-h-11 w-full max-w-11 items-center justify-center'
            >
               <Image
                  priority
                  src={'/icons/modal/close.svg'}
                  alt='Close icon'
                  width={24}
                  height={24}
               />
            </Button>
         </Modal>
      </SidebarContent>
   );
};
