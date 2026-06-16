import React from 'react'

export default function Price({currency, amount}: {currency: string, amount: number}) {
  return (
    <>  
        {currency} 
        <span>{amount.toFixed(2)}</span>
    </>
  );
}
