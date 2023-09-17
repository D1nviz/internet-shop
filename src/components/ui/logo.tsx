import React from 'react'
import { Shirt } from 'lucide-react';


export default function Logo() {
  return (
    <div className='flex cursor-pointer py-1'>
      <Shirt />
      <span className='ml-1 font-semibold'>Clothes shop</span>
    </div>
  )
}
