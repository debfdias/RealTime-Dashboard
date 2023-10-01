"use client"

import InputText from "@/components/Input"
import { signUpSchema } from "@/interfaces/signUpSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import Link from "next/link"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { BeatLoader } from "react-spinners"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { z } from "zod"

type FormData = z.infer<typeof signUpSchema>

export default function Register() {
  const [loading, setLoading] = useState(false)

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(signUpSchema),
  })

  async function handleRegister(data: FormData) {
    setLoading(true)

    const userData = JSON.stringify({
      name: data.name,
      email: data.email,
      password: data.password,
    })

    axios
      .post("/api/auth/register", userData)
      .then(async (res) => {
        if (res.status === 200) {
          toast.success("User registered!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
          reset()
        }
      })
      .catch((err) => {
        toast.error(err?.response?.data || "Something went wrong.")
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      <div className="bg-gradient-to-b from-gray-900 to-blue-950 ">
        <div className="min-h-screen flex justify-center">
          <div className="flex justify-center self-center z-10">
            <div className="p-8 bg-white rounded-lg w-[450px]">
              <div className="mb-4">
                <h3 className="font-semibold text-2xl text-gray-800">
                  Sign Up{" "}
                </h3>
                <p className="text-gray-500 mt-2">Create a new account.</p>
              </div>
              <form
                onSubmit={handleSubmit(handleRegister)}
                className="flex flex-col"
              >
                <InputText
                  label="Name"
                  name="name"
                  type="text"
                  error={errors?.name?.message}
                  register={register}
                />

                <InputText
                  label="Email"
                  name="email"
                  type="text"
                  error={errors?.email?.message}
                  register={register}
                />

                <InputText
                  label="Password"
                  name="password"
                  type="password"
                  error={errors?.password?.message}
                  register={register}
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex justify-center bg-blue-500 hover:bg-blue-600 text-gray-100 p-3 rounded-lg tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-100 mt-8 disabled:bg-gray-400"
                >
                  {loading ? (
                    <div className="">
                      <BeatLoader color="#5873a8" size={12} />
                    </div>
                  ) : (
                    <>Sign in</>
                  )}
                </button>
                <div className="flex text-gray-400 mt-4 items-center self-center">
                  DAlready have an account?{" "}
                  <strong className="hover:underline">
                    <Link href={"/"}> Sign in!</Link>
                  </strong>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
