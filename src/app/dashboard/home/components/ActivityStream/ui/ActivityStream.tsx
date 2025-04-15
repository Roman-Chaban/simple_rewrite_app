import { type FC } from 'react';

import { ComponentWrapper } from '@/features/ui/ComponentWrapper/ComponentWrapper';
import { ActivityStreamContent } from './ActivityStreamContent';

export const ActivityStream: FC = () => {
   return (
      <ComponentWrapper className='h-full w-full max-w-[21.1875rem] flex-2 rounded-3xl bg-white shadow-xs max-lg:flex-1 max-md:max-w-full'>
         <ActivityStreamContent />
      </ComponentWrapper>
   );
};
