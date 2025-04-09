import { Fragment, type FC } from 'react';

import Link from 'next/link';

import { List } from '@/shared/ui/List/List';

import { sidebarMenuList } from '../model/data';

import clsx from 'clsx';
import Image from 'next/image';

export const SidebarMenu: FC = () => {
   return (
      <List
         tag='ul'
         className={clsx('pl-4')}
         itemClassName={clsx(
            'min-h-[2.75rem] flex items-center gap-4 font-semibold',
         )}
         getItemKey={(item) => item.id}
         renderList={sidebarMenuList}
         renderItem={(item) => (
            <Fragment>
               <Image
                  className='h-auto w-auto'
                  priority
                  src={item.icon}
                  alt={`${item.title} icon`}
                  width={24}
                  height={24}
               />
               <Link href={item.href} className={clsx('text-sidebar-item')}>
                  {item.title}
               </Link>
            </Fragment>
         )}
      />
   );
};
