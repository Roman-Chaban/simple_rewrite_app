import { type FC } from 'react';

import { Container } from '@/shared/ui/Container/Container';
import { InformationBar } from '@/widgets/InformationBar/ui/InformationBar';
import { Box } from '@/shared/ui/Box/Box';
import { Workload } from './components/Workload/ui/Workload';
import { NearestEvents } from './components/NearestEvents/ui/NearestEvents';

export const Home: FC = () => {
   return (
      <section className='col-span-12 row-start-2'>
         <Container className='flex flex-col gap-7'>
            <InformationBar title='Dashboard' greetTitle='Welcome back,' />
            <Box className='flex w-full items-center justify-between gap-8 max-md:flex-col max-md:items-start'>
               <Workload />
               <NearestEvents />
            </Box>
         </Container>
      </section>
   );
};

export default Home;
