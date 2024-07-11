import z from "zod"

export const signupFormSchema = z.object({  
    username: z.string(),
    email: z.string().email(),
    password: z.string().min(8)
})

export type signupType = z.infer<typeof signupFormSchema>

export const signinFormSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8)
})
export type signinType = z.infer<typeof signinFormSchema>