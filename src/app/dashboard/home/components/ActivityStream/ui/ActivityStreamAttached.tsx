import { type FC } from 'react';

import Image from 'next/image';

import { ActivityStreamAttachedProps } from '../model/types';

import { Box } from '@/shared/ui/Box/Box';
import { Heading } from '@/shared/ui/Heading/Heading';

export const ActivityStreamAttached: FC<ActivityStreamAttachedProps> = ({
   content,
}) => {
   return (
      <Box className='bg-background-body rounded-small-sm flex flex-row-reverse items-start justify-end gap-4 py-4 pr-2.5 pl-5'>
         <Heading level={4} className='text-natural-black leading-[150%]'>
            {content.title}
         </Heading>
         <Image
            src={content.icon.src}
            alt={content.icon.alt}
            width={content.icon.width}
            height={content.icon.height}
         />
      </Box>
   );
};
