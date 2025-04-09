import { type FC } from 'react';

import Image from 'next/image';

import { Box } from '@/shared/ui/Box/Box';

export const SidebarLogo: FC = () => {
   return (
      <Box className='pt-10 pl-6'>
         <Image
            priority
            src={'/icons/sidebar/sidebar_logo.svg'}
            alt='Sidebar Logo'
            width={50}
            height={50}
         />
      </Box>
   );
};
