import { type FC } from 'react';

import { SummaryInformationBar } from '@/features/ui/SummaryInformationBar/ui/SummaryInformationBar';
import { ComponentWrapper } from '@/features/ui/ComponentWrapper/ComponentWrapper';
import { Box } from '@/shared/ui/Box/Box';

export const NearestEvents: FC = () => {
   return (
      <ComponentWrapper className='min-h-[29.375rem] w-full max-w-[21.1875rem] flex-2 rounded-3xl bg-white shadow-xs max-lg:flex-1 max-md:max-w-full'>
         <Box className='h-full w-full py-7 pr-5 pl-8'>
            <SummaryInformationBar title='Nearest Events' />
         </Box>
      </ComponentWrapper>
   );
};
