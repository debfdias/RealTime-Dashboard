"use client"

import { signUpSchema } from "@/interfaces/signUpSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { ToastContainer, toast } from "react-toastify"
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

      <div className="bg-no-repeat bg-cover bg-center relative">
        <div className="absolute bg-gradient-to-b from-green-500 to-green-400 opacity-75 inset-0 z-0"></div>
        <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
          <div className="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
            <div className="self-start hidden lg:flex flex-col  text-white">
              <h1 className="mb-3 font-bold text-5xl">
                Hi ? Welcome Back Aji{" "}
              </h1>
              <p className="pr-3">
                Lorem ipsums is placeholder text commonly used in the graphic,
                print, and publishing industries for dpreviewing layouts and
                visual mockups
              </p>
            </div>
          </div>
          <div className="flex justify-center self-center  z-10">
            <div className="p-12 bg-white mx-auto rounded-2xl w-100 ">
              <div className="mb-4">
                <h3 className="font-semibold text-2xl text-gray-800">
                  Sign In{" "}
                </h3>
                <p className="text-gray-500">Please sign in to your account.</p>
              </div>
              <div className="space-y-5">
                <div className="space-y-2">
                  <div>
                    <form onSubmit={handleSubmit(handleRegister)}>
                      <label className="text-sm font-medium text-gray-700 tracking-wide">
                        Name
                      </label>
                      <input
                        className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400 text-gray-700"
                        {...register("name")}
                      />

                      <label className="text-sm font-medium text-gray-700 tracking-wide">
                        Email
                      </label>
                      <input
                        className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400 text-gray-700"
                        {...register("email", { required: true })}
                      />
                      {/* errors will return when field validation fails  */}
                      {errors.email && <span>This field is required</span>}

                      <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                        Password
                      </label>
                      <input
                        className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400 text-gray-700"
                        {...register("password", { required: true })}
                      />
                      {/* errors will return when field validation fails  */}
                      {errors.password && <span>This field is required</span>}

                      <button className="bg-red-500 p-5" type="submit">
                        {" "}
                        vai{" "}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
