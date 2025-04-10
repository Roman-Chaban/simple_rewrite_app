import { type FC, type ReactNode } from 'react';

import { type Metadata } from 'next';

export const metadata: Metadata = {
   title: 'CRM | Dashboard (Home)',
};

const DashboardLayout: FC<{ children: Readonly<ReactNode> }> = ({
   children,
}) => {
   return <>{children}</>;
};

export default DashboardLayout;
