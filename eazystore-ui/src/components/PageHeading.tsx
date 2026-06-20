import React, { JSXElementConstructor, ReactElement, ReactNode, ReactPortal } from 'react';
import PageTitle from './PageTitle';

export default function PageHeading({title, children}: {title: string, children: ReactNode}): ReactElement<any, string | JSXElementConstructor<any>> | string | number | ReactFragment | ReactPortal | boolean | null | undefined {
  return (
    <div className="text-center max-w-[576px]mx-auto px-4 py-6"> 
        <PageTitle title={title} />
        <p className="font-primary text-gray-600 mt-2">
            {children}
        </p>
    </div>
  )
}
