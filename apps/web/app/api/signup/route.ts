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

    if (!(username || email || password) || !signupformSchema.safeParse({username, email, password}).success){
        return NextResponse.json({msg: "Please provide valid inputs", success: false})
    }
    // Check if the user with the similar email exists on the data
    const user = await prisma.user.findFirst({
        where: {
            email
        }
    })

    if (user){
        return NextResponse.json({msg: "The user already exists", success: false})
    }
    // if they don't, make a new user account
    else {
        try{
            await prisma.user.create({
                data: {
                    username, email, password
                }
            })
            // Create and send back the jwt token
            const token = jwt.sign({email}, jwtSecret)
            
            cookies().set("authToken", token)
            // return the response as success: true if successfully created it
            return NextResponse.json({msg: "Successfully signed up the new user", success: true, token})

        }catch (err) {
            return NextResponse.json({msg: "Internal Server error"})
        }
    }
}