import { cn } from '@/lib/utils';
import React from 'react'

export const Container = ({
    children,
    className,
}:{
        children:React.ReactNode;
        className?:string;
    }
) => {
  return (
    <div className={cn("max-w-7xl w-full relative z-10 mx-auto px-4 md:py-8",className)}>{children}</div>
  )
}
