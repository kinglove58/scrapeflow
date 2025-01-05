"use server"

import { auth } from '@clerk/nextjs/server'
import React from 'react'
import { string } from 'zod'

export function async DeleteWorkflow(id:string) {
    const {userId} = auth()
  return (
   
    if(!userId){
        throw new Error
    }
  )
}

export default DeleteWorkflow