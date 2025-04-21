import Image from 'next/image';

import { Heading } from '@/shared/ui/Heading/Heading';
import { Paragraph } from '@/shared/ui/Paragraph/Paragraph';

export const SupportModalContent = () => {
   return (
      <>
         <Heading
            level={4}
            className='text-natural-black text-size-sl mb-5 font-bold'
         >
            Need some Help?
         </Heading>
         <Image
            className='mb-8'
            priority
            src={'/icons/modal/modal_support_illustration.svg'}
            alt='Support illustration'
            width={464}
            height={192}
         />
         <Paragraph className='text-natural-black/70 mb-8 leading-[150%]'>
            Describe your question and our specialists will answer you within 24
            hours.
         </Paragraph>
      </>
   );
};
