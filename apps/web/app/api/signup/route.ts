import { NextRequest, NextResponse } from "next/server";
import prisma from "@repo/db/prismaClient"
import {cookies} from "next/headers"
import jwt from "jsonwebtoken"
import { signupformSchema } from "@/app/signup/page";
const jwtSecret = 'something'

export async function POST(req: NextRequest){
    const {
        username,
        email,
        password
    } : {
        username: string,
        email: string,
        password: string 
    } = await req.json()

    //Check if the user has sent an empty values OR the inputs aren't valid

    if (!(username || email || password)){
        return NextResponse.json({msg: "Please provide valid responses", success: false})
    }

    if (!signupformSchema.safeParse({username, email, password}).success){

    }
}