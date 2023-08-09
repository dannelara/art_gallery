"use server"
import { registerFormSchema } from "../../types"
import * as z from "zod"

export const registerUser = (values: z.infer<typeof registerFormSchema>)  => {
    "use server"
    console.log(values)
    return {
        success: true,
        message: "User registered successfully.",
    }
}