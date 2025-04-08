import React, { type ReactNode } from 'react';

export default function DashboardLayout({
   children,
}: {
   children: Readonly<ReactNode>;
}) {
   return <>{children}</>;
}
