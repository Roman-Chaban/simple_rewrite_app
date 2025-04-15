import { AttachedContent } from '../model/types';

export const attachedContent: AttachedContent = {
   content: {
      title: 'Attached files to the task',
      icon: {
         src: '/icons/attached/attach.svg',
         alt: 'Attached Content',
         width: 24,
         height: 24,
      },
   },
};

export const uploadContent: AttachedContent = {
   content: {
      title: 'Updated the status of Mind Map task to In Progress',
      icon: {
         src: '/icons/attached/upload.svg',
         alt: 'Upload Content',
         width: 24,
         height: 24,
      },
   },
};
