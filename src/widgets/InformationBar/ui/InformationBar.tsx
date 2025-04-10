import { type FC } from 'react';

import { InformationBarProps } from '../model/types';

import { Box } from '@/shared/ui/Box/Box';
import { Heading } from '@/shared/ui/Heading/Heading';

export const InformationBar: FC<InformationBarProps> = ({
   greetTitle,
   title,
}) => {
   return (
      <Box className='flex flex-col gap-2.5'>
         <span className='text-sidebar-item'>{greetTitle}</span>
         <Heading level={2} className='text-natural-black text-4xl font-bold'>
            {title}
         </Heading>
      </Box>
   );
};
