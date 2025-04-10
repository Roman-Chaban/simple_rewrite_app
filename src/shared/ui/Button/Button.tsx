import { type HTMLAttributes, type FC } from 'react';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
   className?: string;
}

export const Button: FC<ButtonProps> = ({ children, className = '' }) => {
   return <button className={className}>{children}</button>;
};
