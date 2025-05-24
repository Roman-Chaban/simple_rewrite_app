import { type FC } from 'react';

import Image from 'next/image';

import { Heading } from '@/shared/ui/Heading/Heading';
import { Button } from '@/shared/ui/Button/Button';
import { Box } from '@/shared/ui/Box/Box';
import { Container } from '@/shared/ui/Container/Container';

interface SummaryInformationBarProps {
   title: string;
}

export const SummaryInformationBar: FC<SummaryInformationBarProps> = ({ title }) => {
   return (
      <Container className='w-full'>
         <Box className='flex w-full items-center justify-between gap-5'>
            <Heading level={4} className='text-natural-black text-size-sl font-bold'>
               {title}
            </Heading>
            <Button className='text-sidebar-item-active flex items-center gap-0.5 font-semibold'>
               View all
               <Image
                  src={'/icons/header/right.svg'}
                  alt='Right arrow icon'
                  width={24}
                  height={24}
                  priority
               />
            </Button>
         </Box>
      </Container>
   );
};
