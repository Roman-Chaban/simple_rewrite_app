'use client';

import { type FC } from 'react';

import { usePathname } from 'next/navigation';

import Link from 'next/link';
import Image from 'next/image';

import { List } from '@/shared/ui/List/List';
import { Box } from '@/shared/ui/Box/Box';

import { sidebarMenuList } from '../model/data';

import clsx from 'clsx';

export const SidebarMenu: FC = () => {
   const pathname = usePathname();

   const renderItem = (item: (typeof sidebarMenuList)[number]) => {
      const isActive = pathname === item.href;

      return (
         <Box
            className={clsx(
               'flex min-h-[2.75rem] w-full max-w-[10.75rem] items-center gap-4 rounded-xl py-2.5 pl-2',
               {
                  'bg-sidebar-item-active/10 after:bg-sidebar-item-active after:absolute after:right-0 after:h-full after:w-1 after:rounded-md after:content-[""]':
                     isActive,
               },
            )}
         >
            <Image
               className='h-auto w-auto'
               priority
               src={isActive ? item.iconActive : item.icon}
               alt={`${item.title} icon`}
               width={24}
               height={24}
            />
            <Link
               href={item.href}
               className={clsx('text-sidebar-item font-semibold', {
                  'text-sidebar-item-active': isActive,
               })}
            >
               {item.title}
            </Link>
         </Box>
      );
   };

   return (
      <List
         tag='ul'
         className='flex flex-col gap-2 pl-4'
         itemClassName='relative'
         getItemKey={(item) => item.id}
         renderList={sidebarMenuList}
         renderItem={renderItem}
      />
   );
};
