import React from 'react'


type SingleProductPageProps = {
  params: {id: string}
}
export default function SingleProductPage({params}:SingleProductPageProps) {
  
  return (
    <div className='text-red text-4xl'>{params.id}</div>
  )
}
