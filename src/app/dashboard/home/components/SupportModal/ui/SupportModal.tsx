'use client';

import { type FC, useState } from 'react';

import Image from 'next/image';

import Select, { SingleValue } from 'react-select';

import { Button } from '@/shared/ui/Button/Button';
import { Modal } from '@/shared/ui/Modal/Modal';
import { SupportModalContent } from './SupportModalContent';

import { SidebarModalProps } from '@/widgets/Sidebar/model/types';
import { selectStyles } from '../model/select-styles';

import { GroupBase } from 'react-select';
import { Box } from '@/shared/ui/Box/Box';

export type OptionType = {
   value: string;
   label: string;
};

export const SupportModal: FC<SidebarModalProps> = ({
   isModalOpen,
   handleCloseModal,
}) => {
   const [selectedOption, setSelectedOption] = useState<OptionType | null>(
      null,
   );

   const selectOptions: GroupBase<OptionType>[] = [
      {
         label: 'Flavors',
         options: [
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' },
         ],
      },
   ];

   const handleChange = (option: SingleValue<OptionType>) => {
      setSelectedOption(option);
   };

   return (
      <Modal isModalOpen={isModalOpen} onModalClose={handleCloseModal}>
         <Button
            onClick={handleCloseModal}
            className='rounded-small-sm bg-background-body absolute top-[1.875rem] right-[1.875rem] flex h-full max-h-11 w-full max-w-11 items-center justify-center'
         >
            <Image
               priority
               src='/icons/modal/close.svg'
               alt='Close icon'
               width={24}
               height={24}
            />
         </Button>

         <SupportModalContent />

         <Box className='flex flex-col gap-3'>
            <label
               htmlFor='Request Subject'
               className='text-sidebar-item block leading-[171%] font-bold'
            >
               Request Subject
            </label>

            <Select<OptionType, false, GroupBase<OptionType>>
               inputId='Request Subject'
               aria-label='Support selection'
               options={selectOptions}
               styles={selectStyles}
               placeholder='Select...'
               value={selectedOption}
               onChange={handleChange}
               isSearchable={false}
               isClearable={true}
            />
         </Box>
      </Modal>
   );
};
