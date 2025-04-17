'use client';

import { ReactNode, FC } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../Container/Container';

interface ModalProps {
   children: ReactNode;
   isModalOpen: boolean;
   onModalClose: () => void;
}

export const Modal: FC<ModalProps> = ({
   children,
   isModalOpen,
   onModalClose,
}) => {
   if (typeof window === 'undefined') return null;

   const handleContainerClick = () => onModalClose();
   const handleBoxClick = (event: React.MouseEvent) => event.stopPropagation();

   return createPortal(
      <AnimatePresence>
         {isModalOpen && (
            <Container
               className='bg-modal fixed inset-0 z-50 flex h-full w-full items-center justify-center pt-16 pb-24 max-md:pt-5 max-md:pb-5'
               onClick={handleContainerClick}
            >
               <motion.div
                  className='flex h-full w-full items-center justify-center'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
               >
                  <motion.div
                     className='relative h-full w-full max-w-[36.5rem] rounded-3xl bg-white px-15 pt-15 pb-14 shadow-xs'
                     initial={{ y: 50, opacity: 0 }}
                     animate={{ y: 0, opacity: 1 }}
                     exit={{ y: 50, opacity: 0 }}
                     transition={{ duration: 0.4, ease: 'easeInOut' }}
                     onClick={handleBoxClick}
                  >
                     {children}
                  </motion.div>
               </motion.div>
            </Container>
         )}
      </AnimatePresence>,
      document.body,
   );
};
