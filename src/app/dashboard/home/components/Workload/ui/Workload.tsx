import { type FC } from 'react';

import { Container } from '@/shared/ui/Container/Container';
import { SummaryInformationBar } from '@/widgets/SummaryInformationBar/ui/SummaryInformationBar';
import { Box } from '@/shared/ui/Box/Box';

export const Workload: FC = () => {
   return (
      <Container className='min-h-[29.375rem] w-full max-w-full flex-1 rounded-3xl bg-white shadow-xs max-lg:max-w-[48.8125rem] max-lg:flex-2 max-md:max-w-full'>
         <Box className='h-full w-full pt-7 pr-5 pb-4 pl-8'>
            <SummaryInformationBar title='Workload' />
         </Box>
      </Container>
   );
};
