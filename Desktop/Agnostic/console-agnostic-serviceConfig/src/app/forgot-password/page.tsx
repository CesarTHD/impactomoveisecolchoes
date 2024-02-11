"use client";
import Link from "next/link"
import { useForm } from "react-hook-form"
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../services/firebase/firebase";
import { useState } from "react";

const ForgotPassword = () => {
  const [confirmation, setConfirmation] = useState(null || "");
  console.log(confirmation)
  const { handleSubmit, register, formState: {errors}, reset } = useForm();

  const onSubmit = async (data: any) => {
    
    try{
      await sendPasswordResetEmail(auth, data.email);
      setConfirmation("A password reset link has been sent to your email")

      reset();
    }catch(e:any){
      console.log(e.message);
    }

  }

  return (
    <>
      <div className="flex h-screen bg-white">
          <div className="flex borda flex-1 flex-col lg:w-1/3 justify-center px-4 py-12 sm:px-6 lg:px-10 xl:px-24">
            <div className="mx-auto max-w-sm justify-center">
              <div className="flex flex-col">
                <Link href={"/"}>
                  <img  
                    className="h-10 w-10"
                    src="https://firebasestorage.googleapis.com/v0/b/console-agnostic.appspot.com/o/agnoLogo%20(1).png?alt=media&token=28c99d8e-d676-424e-8d45-bf42d0a3d292&_gl=1*1wjvco5*_ga*MTg2NjAyMzY2Ny4xNjY1NDM5MTE5*_ga_CW55HF8NVT*MTY4NTQ3OTY0Ny4xOS4xLjE2ODU0Nzk3MzMuMC4wLjA."
                    alt="Your Company"
                  />
                </Link>
                <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                  Forgot your password
                </h2>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Please enter the email address you'd like your password reset information sent to
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="w-full bg-white rounded-lg mt-10 border-none">
                  <div className="mb-4">
                    <div className="mb-4 md:mr-2 md:mb-0">
                      <label
                        className="block mb-2 text-sm font-medium text-orange-500"
                        htmlFor="email"
                      >
                        Enter email address:
                      </label>
                      <input
                        className={((errors?.email && "border-2 border-red-500 ") || "") + "text-orange-400 outline-none pl-2 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-400 sm:text-sm sm:leading-6"}
                        id="email"
                        type="email"
                        {...register("email", {
                          required: true,
                        })}
                      />
                      {confirmation && <p className="mt-5 text-sm text-green-600">{confirmation}</p>}
                      {errors?.email?.type == "required" && <p className="mt-1 text-xs italic text-red-500">Email is required</p>}
                    </div>
                    <div className="mb-6">
                      <button
                        className="w-full px-4 py-2 font-bold mt-10 text-white bg-[#F97316] rounded-md hover:bg-orange-300 focus:outline-none focus:shadow-outline"
                        id="btnSubmit"
                        type="submit"
                      >
                        Send
                      </button>
                    </div>
                  </div>

                  <hr className="mb-6 border-t" />
                  
                  <div className="text-center">
                    <a
                      className="inline-block text-sm text-blue-500 align-baseline hover:text-[#F97316]"
                      href="/"
                    >
                      Return to login
                    </a>
                  </div>
                </form>
              </div>
            </div>
        </div>
        <div className="borda  relative flex-none lg:flex  lg:w-2/3">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
            alt=""
          />
        </div>
      </div>
    </>
  )
}

export default ForgotPassword