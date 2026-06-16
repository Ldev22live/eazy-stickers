import React, { JSXElementConstructor, ReactElement, ReactNode, ReactPortal } from 'react';
import PageTitle from './PageTitle';

export default function PageHeading({title, children}: {title: string, children: ReactNode}): ReactElement<any, string | JSXElementConstructor<any>> | string | number | ReactFragment | ReactPortal | boolean | null | undefined {
  return (
    <div className="page-heading-container"> 
        <PageTitle title={title}/>
        <p className="page-heading-paragraph">
            {children}
        </p>
    </div>
  )
}
