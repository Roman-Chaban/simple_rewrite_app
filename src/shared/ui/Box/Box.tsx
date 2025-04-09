import { type HTMLAttributes, type ReactNode, type FC } from 'react';

import clsx from 'clsx';

interface BoxProps extends HTMLAttributes<HTMLDivElement> {
   children: ReactNode;
   className?: string;
}

export const Box: FC<BoxProps> = ({ children, className = '', ...props }) => {
   return (
      <div className={clsx(className)} {...props}>
         {children}
      </div>
   );
};
