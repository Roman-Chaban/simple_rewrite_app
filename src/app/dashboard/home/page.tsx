import { type FC } from 'react';

import { Container } from '@/shared/ui/Container/Container';
import { InformationBar } from '@/widgets/InformationBar/ui/InformationBar';
import { Box } from '@/shared/ui/Box/Box';
import { Workload } from './components/Workload/ui/Workload';
import { NearestEvents } from './components/NearestEvents/ui/NearestEvents';
import { Projects } from './components/Projects/ui/Projects';
import { ActivityStream } from './components/ActivityStream/ui/ActivityStream';

export const Home: FC = () => {
   return (
      <section className='col-span-12 row-start-2 grid grid-cols-12 grid-rows-[auto_1fr] gap-7'>
         <InformationBar title='Dashboard' greetTitle='Welcome back,' />
         <Container className='col-span-12 flex flex-col justify-between gap-12'>
            <Box className='flex w-full items-center justify-between gap-8 max-md:flex-col max-md:items-start'>
               <Workload />
               <NearestEvents />
            </Box>
            <Box className='flex w-full items-center justify-between gap-8 max-md:flex-col max-md:items-start'>
               <Projects />
               <ActivityStream />
            </Box>
         </Container>
      </section>
   );
};

export default Home;
