import { type FC } from 'react';

import { Box } from '@/shared/ui/Box/Box';
import { Heading } from '@/shared/ui/Heading/Heading';

interface InformationBarProps {
   greetTitle?: string;
   title: string;
}

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
