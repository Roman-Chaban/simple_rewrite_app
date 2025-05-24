import { type FC } from 'react';

import { InformationBarProps } from '../model/types';

import { Box } from '@/shared/ui/Box/Box';
import { Heading } from '@/shared/ui/Heading/Heading';
import { Span } from '@/shared/ui/Span/Span';

export const InformationBar: FC<InformationBarProps> = ({ greetTitle, title }) => {
   return (
      <Box className='col-span-12 flex flex-col gap-2.5'>
         <Span className='text-sidebar-item'>{greetTitle}</Span>
         <Heading level={2} className='text-natural-black text-4xl font-bold'>
            {title}
         </Heading>
      </Box>
   );
};
