import { cn } from '@/lib/utils'
import React, { Children } from 'react'
import { BrainIcon, ForkIcon, MouseBoxIcon } from './icons'

export const Grid = () => {
  return (
    <div className='max-w-5xl mx-auto min-h-screen border-x py-20 border-neutral-200 bg-gray-100'>
      <div className='grid grid-cols-1 lg:grid-cols-2 divide-x divide-y divide-neutral-200'>
        <Card>
          <CardHeader>
            <BrainIcon/>
            <CardTitle>LLM Model Selector</CardTitle>
          </CardHeader>
          <CardDescription>Track real-time activity of agents with detailed records of
            triggers, tools used, outcomes, and timestamps.</CardDescription>
            <CardSkeleton> <div className="h-full w-full bg-red-200"></div></CardSkeleton>
        </Card>
         <Card>
          <CardHeader>
            <MouseBoxIcon />
            <CardTitle>Text to workflow builder</CardTitle>
          </CardHeader>
          <CardDescription>
            Track real-time activity of agents with detailed records of
            triggers, tools used, outcomes, and timestamps.
          </CardDescription>
          <CardSkeleton className="bg-white">
          <div className="h-full w-full bg-green-200"></div>
          </CardSkeleton>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <ForkIcon />
            <CardTitle>Native tools integration</CardTitle>
          </CardHeader>
          <CardDescription>
            Integrate with native tools to create workflows that can interact
          </CardDescription>
          <CardSkeleton>
            <div className="h-full w-full bg-blue-200"></div>
          </CardSkeleton>
        </Card>
      </div>
       
    </div>
  )
}

const CardSkeleton=({children,className}:
  {
    className?:string;
    children:React.ReactNode;
  }
)=>{
  return <div className={cn("h-60 w-full my-4 rounded-lg overflow-hidden ",className)}>{children}</div>
}
const Card=({children,className}:
  {
    className?:string;
    children:React.ReactNode;
  }
)=>{
  return <div className={cn("bg-white p-4 w-full",className)}>{children}</div>
}
const CardHeader=({children,className}:
  {
    className?:string;
    children:React.ReactNode;
  }
)=>{
  return <div className={cn("flex items-center gap-2",className)}>{children}</div>
}
const CardTitle=({children,className}:
  {
    className?:string;
    children:React.ReactNode;
  }
)=>{
  return <div className={cn("font-medium tracking-tight text-lg",className)}>{children}</div>
}
const CardDescription=({children,className}:
  {
    className?:string;
    children:React.ReactNode;
  }
)=>{
  return <div className={cn("text-base text-neutral-400",className)}>{children}</div>
}