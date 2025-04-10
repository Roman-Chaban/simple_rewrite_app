import { type FC } from 'react';

import { HeaderSearch } from './HeaderSearch';
import { HeaderNotifications } from './HeaderNotifications';

export const Header: FC = () => {
   return (
      <header className='col-span-12 flex h-fit w-full items-center justify-between gap-5'>
         <HeaderSearch />
         <HeaderNotifications />
      </header>
   );
};
