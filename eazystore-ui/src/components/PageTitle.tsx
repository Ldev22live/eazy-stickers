import React from 'react'

export default function PageTitle(props: { title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) {
  return (
    <h1 className="page-title">{props.title}</h1>
  );
}
