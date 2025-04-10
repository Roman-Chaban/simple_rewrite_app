import { type ReactNode, type FC } from 'react';

import { Container } from '../Container/Container';

import clsx from 'clsx';

export const LayoutContainer: FC<{ children: ReactNode }> = ({ children }) => {
   return (
      <Container
         className={clsx(
            'grid min-h-[100vh] w-full grid-cols-12',
            'grid-rows-[auto_1fr] gap-12',
         )}
      >
         {children}
      </Container>
   );
};
