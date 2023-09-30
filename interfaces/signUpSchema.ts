import z from "zod"

export const signUpSchema = z.object({
  name: z
    .string({
      required_error: "Required field.",
      invalid_type_error: "Invalid field.",
    })
    .min(5, { message: "Name is too short." }),
  email: z.string().email(),
  password: z.string().min(5),
})

export type User = z.infer<typeof signUpSchema>
