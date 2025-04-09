import { type HTMLAttributes, type ReactNode, type FC } from 'react';

import clsx from 'clsx';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
   children: ReactNode;
   className?: string;
}

export const Container: FC<ContainerProps> = ({
   children,
   className = '',
   ...props
}) => {
   return (
      <div className={clsx(className)} {...props}>
         {children}
      </div>
   );
};
