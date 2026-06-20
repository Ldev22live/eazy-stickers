import React from 'react'

export default function PageTitle(props: { title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) {
  return (
    <h1 className="text-3xl font-extrabold text-gray-800 text-center text-primary mt-4 py-2">{props.title}</h1>
  );
}
