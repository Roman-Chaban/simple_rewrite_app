'use client';

import { useState, type FC } from 'react';

import { SidebarLogo } from './SidebarLogo';
import { SidebarMenu } from './SidebarMenu';
import { SidebarSupport } from './SidebarSupport';
import { SidebarContent } from './SidebarContent';
import { SupportModal } from '../../../app/dashboard/home/components/SupportModal/ui/SupportModal';
import { Box } from '@/shared/ui/Box/Box';

export const Sidebar: FC = () => {
   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

   const handleCloseModal = () => {
      setIsModalOpen(false);
   };

   return (
      <SidebarContent>
         <Box className='flex flex-col gap-10'>
            <SidebarLogo />
            <SidebarMenu />
         </Box>
         <SidebarSupport onModalOpen={() => setIsModalOpen(true)} />
         <SupportModal
            isModalOpen={isModalOpen}
            handleCloseModal={handleCloseModal}
         />
      </SidebarContent>
   );
};
