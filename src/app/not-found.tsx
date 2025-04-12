import { type FC } from 'react';

import Link from 'next/link';

import { SidebarRoutes } from '@/widgets/Sidebar/model/enums';

import { Container } from '@/shared/ui/Container/Container';
import { Heading } from '@/shared/ui/Heading/Heading';
import { Box } from '@/shared/ui/Box/Box';
import { Paragraph } from '@/shared/ui/Paragraph/Paragraph';

const NotFound: FC = () => {
   return (
      <Container className='col-span-12 flex min-h-screen flex-col items-center gap-8 bg-gradient-to-b pt-10 text-gray-800'>
         <Box className='text-center'>
            <Heading
               level={1}
               className='text-9xl font-extrabold text-red-500 drop-shadow-lg'
            >
               404
            </Heading>
            <Heading
               level={2}
               className='mt-4 text-3xl font-bold text-gray-700'
            >
               Oops! Page Not Found
            </Heading>
            <Paragraph className='mt-2 text-lg text-gray-600'>
               The page you are looking for might have been removed, had its
               name changed, or is temporarily unavailable.
            </Paragraph>
         </Box>
         <Link
            href={SidebarRoutes.HOME}
            className='mt-6 transform rounded-full bg-blue-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 focus:outline-none'
         >
            Go Back Home
         </Link>
      </Container>
   );
};

export default NotFound;
