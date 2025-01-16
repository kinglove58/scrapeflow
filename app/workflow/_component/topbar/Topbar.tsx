"use client"

import TooltipWrapper from '@/components/TooltipWrapper'
import React from 'react'

function Topbar() {
  return (
    <header className="flex justify-between border-p-2 border-separate sticky w-full h-[60px] bg-background z-10 p-2 top-0">
        <div className="flex gap-1 flex-1">
            <TooltipWrapper content="Back">
                <Button></Button>
            </TooltipWrapper>
        </div>
    </header>
  )
}

export default Topbar