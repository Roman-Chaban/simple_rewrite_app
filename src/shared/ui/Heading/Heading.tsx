import {
   type ComponentPropsWithoutRef,
   type CSSProperties,
   type ElementType,
   type ReactNode,
} from 'react';

import clsx from 'clsx';

type HeadingOwnProps<E extends ElementType = 'h1'> = {
   as?: E;
   level?: 1 | 2 | 3 | 4 | 5 | 6;
   children: ReactNode;
   className?: string;
   id?: string;
   style?: CSSProperties;
};

type HeadingProps<E extends ElementType> = HeadingOwnProps<E> &
   Omit<ComponentPropsWithoutRef<E>, keyof HeadingOwnProps>;

export const Heading = <E extends ElementType = 'h1'>({
   as,
   level = 1,
   children,
   className,
   id,
   style,
   ...props
}: HeadingProps<E>) => {
   const Tag = as || (`h${level}` as ElementType);
   return (
      <Tag id={id} style={style} className={clsx(className)} {...props}>
         {children}
      </Tag>
   );
};
