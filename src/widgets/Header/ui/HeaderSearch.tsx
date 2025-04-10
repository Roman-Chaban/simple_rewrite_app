'use client';

import { FC } from 'react';

import Image from 'next/image';

import { useForm } from 'react-hook-form';

import { RegisterInput } from '@/shared/ui/RegisterInput/RegisterInput';
import { Label } from '@/shared/ui/Label/Label';

interface FormValues {
   search: string;
}

export const HeaderSearch: FC = () => {
   const { register } = useForm<FormValues>({
      defaultValues: { search: '' },
   });

   return (
      <Label
         htmlFor='search'
         className='rounded-small-sm flex min-h-12 w-full max-w-[25.75rem] items-center gap-3 bg-white px-[1.1875rem] shadow-sm inset-shadow-2xs'
      >
         <Image
            src='/icons/header/search.svg'
            alt='Search icon'
            width={24}
            height={24}
         />
         <RegisterInput<FormValues>
            className='text-sidebar-item placeholder:text-sidebar-item w-full outline-none'
            name='search'
            id='search'
            placeholder='Search'
            register={register}
            tabIndex={-1}
         />
      </Label>
   );
};
