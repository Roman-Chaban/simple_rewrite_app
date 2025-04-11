import { type FC } from 'react';

import { Container } from '@/shared/ui/Container/Container';
import { SummaryInformationBar } from '@/widgets/SummaryInformationBar/ui/SummaryInformationBar';
import { Box } from '@/shared/ui/Box/Box';

export const NearestEvents: FC = () => {
   return (
      <Container className='min-h-[29.375rem] w-full max-w-[21.1875rem] flex-2 rounded-3xl bg-white shadow-xs max-lg:flex-1 max-md:max-w-full'>
         <Box className='h-full w-full py-7 pr-5 pl-8'>
            <SummaryInformationBar title='Nearest Events' />
         </Box>
      </Container>
   );
};
