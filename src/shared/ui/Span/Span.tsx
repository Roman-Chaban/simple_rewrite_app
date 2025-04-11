import { type HTMLAttributes, type FC } from 'react';

interface SpanProps extends HTMLAttributes<HTMLSpanElement> {
   className?: string;
}

export const Span: FC<SpanProps> = ({ children, className = '', ...props }) => {
   return (
      <span className={className} {...props}>
         {children}
      </span>
   );
};
