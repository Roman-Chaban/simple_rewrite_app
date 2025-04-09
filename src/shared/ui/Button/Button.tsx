import { type HTMLAttributes, type ReactNode, type FC } from 'react';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
   children: ReactNode;
   className?: string;
}

export const Button: FC<ButtonProps> = ({ children, className = '' }) => {
   return <button className={className}>{children}</button>;
};
