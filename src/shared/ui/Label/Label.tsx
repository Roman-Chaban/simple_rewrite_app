import { type LabelHTMLAttributes, type FC } from 'react';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
   className?: string;
   htmlFor?: string;
}

export const Label: FC<LabelProps> = ({
   className = '',
   htmlFor = '',
   children,
   ...props
}) => {
   return (
      <label htmlFor={htmlFor} className={className} {...props}>
         {children}
      </label>
   );
};
