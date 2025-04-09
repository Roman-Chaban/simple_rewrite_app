import { type HTMLAttributes, type ReactNode } from 'react';

type ListItemKey = string | number;

type ListTag = 'ul' | 'ol';

interface ListProps<T extends { id: ListItemKey }>
   extends HTMLAttributes<HTMLUListElement | HTMLOListElement> {
   tag: ListTag;
   renderList: Array<T>;
   renderItem: (listItem: T, index: number) => ReactNode;
   getItemKey: (listItem: T) => ListItemKey;
   className?: string;
   itemClassName?: string;
}

export const List = <T extends { id: ListItemKey }>({
   tag: Tag,
   renderItem,
   renderList,
   getItemKey = (item) => item.id,
   className = '',
   itemClassName = '',
   ...props
}: ListProps<T>) => {
   return (
      <Tag className={className} {...props}>
         {renderList.map((item, index) => (
            <li key={getItemKey(item)} className={itemClassName}>
               {renderItem(item, index)}
            </li>
         ))}
      </Tag>
   );
};
