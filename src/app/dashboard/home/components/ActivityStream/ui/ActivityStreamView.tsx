import React, { type FC } from 'react';

import Image from 'next/image';

import { Box } from '@/shared/ui/Box/Box';
import { Button } from '@/shared/ui/Button/Button';

export const ActivityStreamView: FC = () => {
   return (
      <Box className='mt-5 flex h-full w-full justify-center'>
         <Button className='text-sidebar-item-active flex items-center gap-0.5 font-semibold'>
            View more{' '}
            <Image
               priority
               src={'/icons/attached/down.svg'}
               alt='Down arrow icon'
               width={24}
               height={24}
            />
         </Button>
      </Box>
   );
};
