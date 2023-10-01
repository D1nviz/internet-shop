import React from 'react'
import { Shirt } from 'lucide-react';
import { cn } from '@/lib/utils';

type LogoProps = React.HTMLAttributes<HTMLElement> & {
  
}

export default function Logo({className}:LogoProps) {
  return (
    <div className={cn('flex cursor-pointer py-1', className)}>
      <Shirt />
      <span className='ml-1 font-semibold'>Clothes shop</span>
    </div>
  )
}
