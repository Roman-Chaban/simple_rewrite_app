import { type HTMLAttributes, type FC } from 'react';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
   className?: string;
}

export const Button: FC<ButtonProps> = ({
   children,
   onClick,
   className = '',
}) => {
   return (
      <button onClick={onClick} className={className}>
         {children}
      </button>
   );
};
