import { type FC } from 'react';

import { Box } from '@/shared/ui/Box/Box';
import { Button } from '@/shared/ui/Button/Button';

import Image from 'next/image';

export const HeaderNotifications: FC = () => {
   return (
      <Box className='w-full max-w-[15.875rem]'>
         <Button className='rounded-small-sm flex h-full min-h-12 w-full max-w-12 items-center justify-center bg-white shadow-sm inset-shadow-2xs'>
            <Image
               src={'/icons/header/bell.svg'}
               alt='Bell icon'
               width={24}
               height={24}
            />
         </Button>
      </Box>
   );
};
