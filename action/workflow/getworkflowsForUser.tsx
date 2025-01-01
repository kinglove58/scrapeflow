import { auth } from "@clerk/nextjs/server"
import { error } from "console"

export async GetWorkflowsForUser(){
    const {userId} = auth()
    if(!userId){
        throw new Error("unautheticated")
    }
}