import z from "zod"

export const signInSchema = z.object({
  email: z
    .string({
      required_error: "Required field.",
      invalid_type_error: "Invalid field.",
    })
    .email({ message: "Invalid email." }),
  password: z.string().min(5),
})

export type User = z.infer<typeof signInSchema>
