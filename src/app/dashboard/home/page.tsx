import { type FC } from 'react';

import { Container } from '@/shared/ui/Container/Container';
import { InformationBar } from '@/widgets/InformationBar/ui/InformationBar';

export const Home: FC = () => {
   return (
      <section className='col-span-12 row-start-2'>
         <Container>
            <InformationBar title='Dashboard' greetTitle='Welcome back,' />
         </Container>
      </section>
   );
};

export default Home;
