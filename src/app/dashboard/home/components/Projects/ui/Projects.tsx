import { type FC } from 'react';

import { ComponentWrapper } from '@/features/ui/ComponentWrapper/ComponentWrapper';
import { Container } from '@/shared/ui/Container/Container';

const projectsListDto = [
   { id: 1, content: 'project_1' },
   { id: 2, content: 'project_2' },
   { id: 3, content: 'project_3' },
];

export const Projects: FC = () => {
   return (
      <Container className='flex h-full w-full flex-2 flex-col gap-5'>
         {projectsListDto.map((project) => (
            <ComponentWrapper
               key={project.id}
               className='min-h-[9.25rem] w-full max-w-full flex-1 rounded-3xl bg-white shadow-xs max-lg:max-w-[48.8125rem] max-lg:flex-2 max-md:max-w-full'
            >
               {project.content}
            </ComponentWrapper>
         ))}
      </Container>
   );
};
