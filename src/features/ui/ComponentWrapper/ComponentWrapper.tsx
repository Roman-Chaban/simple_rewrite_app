import { type HTMLAttributes, type FC } from 'react';

import { Container } from '@/shared/ui/Container/Container';

import clsx from 'clsx';

interface ComponentWrapperProps extends HTMLAttributes<HTMLElement> {
   className?: string;
}

export const ComponentWrapper: FC<ComponentWrapperProps> = ({ children, className = ' ' }) => {
   return <Container className={`${clsx(className)} bg-white shadow-xs`}>{children}</Container>;
};
