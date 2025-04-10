import { HTMLAttributes, type FC } from 'react';

import clsx from 'clsx';

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
   className?: string;
}

export const Paragraph: FC<ParagraphProps> = ({
   children,
   className,
   ...props
}) => {
   return (
      <p className={clsx(className)} {...props}>
         {children}
      </p>
   );
};
