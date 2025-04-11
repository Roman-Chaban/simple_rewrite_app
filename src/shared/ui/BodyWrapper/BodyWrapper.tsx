import { type ReactNode, type FC } from 'react';

import { Container } from '../Container/Container';

export const BodyWrapper: FC<{ children: ReactNode }> = ({ children }) => {
   return (
      <Container
         className={
            'bg-background-body flex gap-[1.875rem] p-[1.25rem_2.5rem_1.5625rem_1.25rem] max-lg:pr-[1.25rem] max-md:gap-[1.5rem]'
         }
      >
         {children}
      </Container>
   );
};
