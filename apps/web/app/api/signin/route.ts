import { NextRequest, NextResponse } from "next/server";
import prisma from "@repo/db/prismaClient"
import {cookies} from "next/headers"
import jwt from "jsonwebtoken"
import z from "zod"
const jwtSecret = 'something'

export const signinFormSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8)
}) 

export async function POST(req: NextRequest){
    // Destructure the body parameter
    const {
        email,
        password
    } : {
        username: string,
        email: string,
        password: string 
    } = await req.json()

    //Check if the user has sent an empty values OR the inputs aren't valid

    if (!(email || password) || !signinFormSchema.safeParse({email, password}).success){
        return NextResponse.json({msg: "Please provide valid inputs", success: false})
    }
    // Check if the user with the same email exists on the data
    const user = await prisma.user.findFirst({
        where: {
            email
        }
    })

    if (!user){
        return NextResponse.json({msg: "No such user exists", success: false})
    }
    // if they do, do the next steps
    else {
        try{
           // check if the password provided by the user is the same as the ones stored in the database
            if (user.password !== password){
                return NextResponse.json({msg: "Invalid user credentials", success: false})
            }else {
                // create and return the jwt token to the user
                const token = jwt.sign({email}, jwtSecret)
                cookies().set("authToken", token)

                return NextResponse.json({msg: "You've been successfully signed in!!", success: true})
            }

        }catch (err) {
            return NextResponse.json({msg: "Internal Server error"})
        }
    }
}