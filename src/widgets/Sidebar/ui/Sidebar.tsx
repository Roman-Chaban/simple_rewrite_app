'use client';

import { useCallback, useState, type FC } from 'react';

import { SidebarLogo } from './SidebarLogo';
import { SidebarMenu } from './SidebarMenu';
import { SidebarSupport } from './SidebarSupport';
import { SidebarContent } from './SidebarContent';
import { SupportModal } from '../../../app/dashboard/home/components/SupportModal/ui/SupportModal';
import { Box } from '@/shared/ui/Box/Box';

type ModalOpen = boolean;

export const Sidebar: FC = () => {
   const [isModalOpen, setIsModalOpen] = useState<ModalOpen>(false);

   const handleCloseModal = useCallback((): void => {
      setIsModalOpen(false);
   }, [setIsModalOpen]);

   const handleOpenModal = useCallback((): void => {
      setIsModalOpen(true);
   }, [setIsModalOpen]);

   return (
      <SidebarContent>
         <Box className='flex flex-col gap-10'>
            <SidebarLogo />
            <SidebarMenu />
         </Box>
         <SidebarSupport onModalOpen={handleOpenModal} />
         <SupportModal isModalOpen={isModalOpen} handleCloseModal={handleCloseModal} />
      </SidebarContent>
   );
};
