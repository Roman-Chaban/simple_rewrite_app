import { type HTMLAttributes, type ReactNode, type FC } from 'react';

import clsx from 'clsx';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
   children: ReactNode;
   className?: string;
   onClick?: () => void;
}

export const Container: FC<ContainerProps> = ({
   children,
   className = '',
   onClick,
   ...props
}) => {
   return (
      <div onClick={onClick} className={clsx(className)} {...props}>
         {children}
      </div>
   );
};
