import { type FC } from 'react';

import { attachedContent, uploadContent } from '../data/attached-content';

import { ActivityStreamAttached } from './ActivityStreamAttached';
import { Container } from '@/shared/ui/Container/Container';
import { Heading } from '@/shared/ui/Heading/Heading';
import { ActivityStreamView } from './ActivityStreamView';

export const ActivityStreamContent: FC = () => {
   return (
      <Container className='flex h-full w-full flex-col px-6 pt-7 pb-5'>
         <Heading level={3} className='text-size-sl mb-6.5 font-bold'>
            Activity Stream
         </Heading>
         <ActivityStreamAttached {...uploadContent} />
         <ActivityStreamAttached {...attachedContent} />
         <ActivityStreamAttached {...uploadContent} />
         <ActivityStreamView />
      </Container>
   );
};
