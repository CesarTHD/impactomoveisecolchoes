"use client";
import "./page.css"
import { useContext, useState } from "react";
import { useForm } from "react-hook-form"
import { cpfValidation } from "@/functions/cpfValidation";
import { formatCPF } from "@/functions/formatCPF";
import { AgnoContext } from "../../context/AgnoContext";
import { getAuth, sendEmailVerification, sendSignInLinkToEmail } from "firebase/auth";
import { auth } from "../../services/firebase/firebase";
import Link from "next/link";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset
  } = useForm();

  const { signUp } = useContext(AgnoContext);

  const watchPassword = watch("password");
  const watchCPF = watch("cpf");
  const watchConfPassword = watch("c_password");

  const [checkPass, setCheckPass] = useState(true);
  const [confirmation, setConfirmation] = useState(null || "");

  const validatePassword = (value: any) => {
    if(value === watchPassword){
      setCheckPass(true);
      return false;
    }
    setCheckPass(false);
    return true;
  }
  const validateConfPassword = (value: any) => {
    if(value === watchConfPassword){
      setCheckPass(true);
      return false;
    }
    setCheckPass(false);
    return true;
  }

  const onSubmit = async(data: any) =>{
    const cpfNumbers = data.cpf.replace(/\D/g, '');

    try {
      const res:any = await signUp(data.email, data.password);

      let userAuth : any = auth.currentUser;

      console.log(userAuth.uid);
      
      const user = {
        name: data.firstName + " " + data.lastName,
        email: data.email,
        cpf: cpfNumbers,
        password: data.password,
        uid: res.uid
      }

      sendEmailVerification(userAuth)
        .then(function() {
          setConfirmation("Verification email has been sent to you");
          reset();
        })
        .catch(function(error: any) {
          console.log(error.message);
        });

    } catch (error) {
      console.log(error);
    }
    //console.log(user);    
  }

  const checkInputs = () => {
    let firstName = document.getElementById("firstName") as HTMLInputElement;
    let lastName = document.getElementById("lastName") as HTMLInputElement;
    let email = document.getElementById("email") as HTMLInputElement;
    let cpf = document.getElementById("cpf") as HTMLInputElement;
    let pass = document.getElementById("password") as HTMLInputElement;
    let cPass = document.getElementById("c_password") as HTMLInputElement;
    const button = document.getElementById("btnSubmit") as HTMLButtonElement;


    if(firstName && lastName && email && cpf && pass && cPass){
      let valueFirstName = firstName.value.trim();
      let valueLastName = lastName.value.trim();
      let valueEmail = email.value.trim();
      let valueCpf = cpf.value.trim();
      let valuePass = pass.value.trim();
      let valueCpass = cPass.value.trim();

      if(valueFirstName != '' && valueLastName != '' && valueEmail != '' && valueCpf != '' && valuePass != '' && valueCpass != '' && button){
        button.disabled = false;
      }     
    }
  }

  return (
    <div className="flex w-full h-screen justify-center bg-white">
    <div className="p-5 flex justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md bg-white rounded-lg pr-10 pb-10 pl-10 mt-5 border-none">
        <Link href={"/"}>
          <img
            className="h-10 w-auto mb-8"
            src="https://firebasestorage.googleapis.com/v0/b/console-agnostic.appspot.com/o/agnoLogo%20(1).png?alt=media&token=28c99d8e-d676-424e-8d45-bf42d0a3d292&_gl=1*1wjvco5*_ga*MTg2NjAyMzY2Ny4xNjY1NDM5MTE5*_ga_CW55HF8NVT*MTY4NTQ3OTY0Ny4xOS4xLjE2ODU0Nzk3MzMuMC4wLjA."
            alt="Your Company"
          />
        </Link>
        <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900 mb-0">
          Create an Account!
        </h2>
        <p className="mt-0 mb-6 text-sm leading-6 font-semibold text-[#F97316] hover:text-orange-400">Start a 14 day free trial</p>
        <div className="mb-4 md:flex md:justify-between">

          <div className="mb-4 md:mr-2 md:mb-0">
            <label
              className="block mb-2 text-sm font-medium text-gray-700"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              className={(errors?.firstName && "error " || "") + "text-orange-400 outline-none pl-2 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-400 sm:text-sm sm:leading-6"}
              id="firstName"
              type="text"
              placeholder="First Name"
              onInput={checkInputs}
              {...register("firstName",{required: true})}
            />
            {errors?.firstName && <p className="mt-1 text-xs italic text-red-500">Name is required</p>}
          </div>
          <div className="md:ml-2">
            <label
              className="block mb-2 text-sm font-medium text-gray-700"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              className={(errors?.lastName && "error " || "") + "text-orange-400 outline-none pl-2 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-400 sm:text-sm sm:leading-6"}
              id="lastName"
              type="text"
              placeholder="Last Name"
              onInput={checkInputs}
              {...register("lastName",{required: true})}
            />
            {errors?.lastName && <p className="mt-1 text-xs italic text-red-500">Last Name is required</p>}
          </div>
        </div>
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-medium text-gray-700"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className={(errors?.email && "error " || "") + "text-orange-400 outline-none pl-2 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-400 sm:text-sm sm:leading-6"}
            id="email"
            type="email"
            placeholder="Email"
            onInput={checkInputs}
            {...register("email", {
                required: true,
              }
            )}
          />
          {errors?.email?.type == "required" && <p className="mt-1 text-xs italic text-red-500">Email is required</p>}
        </div>
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-medium text-gray-700"
            htmlFor="cpf"
          >
            CPF
          </label>
          <input
            className={(errors?.cpf && "error " || "") + "text-orange-400 outline-none pl-2 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-400 sm:text-sm sm:leading-6"}
            id="cpf"
            type="text"
            placeholder="XXX.XXX.XXX-XX"
            onInput={checkInputs}
            {...register("cpf", {
                onChange(event) {
                  event.target.value = formatCPF(event.target.value);
                },
                required: true,
                validate: () => cpfValidation(watchCPF),
              }
            )}
          />
          {errors?.cpf?.type == "validate" && <p className="mt-1 text-xs italic text-red-500">CPF invalid</p>}
          {errors?.cpf?.type == "required" && <p className="mt-1 text-xs italic text-red-500">CPF is required</p>}
        </div>
        <div className="mb-4 md:flex md:justify-between">
          <div className="mb-4 md:mr-2 md:mb-0">
            <label
              className="block mb-2 text-sm font-medium text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className={(errors?.password && "error " || "") + "text-orange-400 w-full px-3 py-2 mb-1.5 text-sm leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline"}
              id="password"
              type="password"
              placeholder="******************"
              onInput={checkInputs}
              {...register("password",{
                  required: true,
                  minLength: 6,
                  onChange(event) {
                    validateConfPassword(event.target.value)
                  },
                  validate: () => checkPass,
                }
              )}
            />
            {errors?.password?.type === "minLength"  && <p className="mt-1 text-xs italic text-red-500">The password must contain at least 6 characters</p>}
          </div>
          <div className="md:ml-2">
            <label
              className="block mb-2 text-sm font-medium text-gray-700"
              htmlFor="c_password"
            >
              Confirm Password
            </label>
            <input
              className={(errors?.c_password && "error " || "") + "text-orange-400 w-full px-3 py-2 mb-1.5 text-sm leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline"}
              id="c_password"
              type="password"
              placeholder="******************"
              onInput={checkInputs}
              {...register("c_password",{
                required: true,
                onChange(event) {
                  validatePassword(event.target.value)
                },
                validate: () => checkPass,
              })}
            />
            {!checkPass  && <p className="mt-1 text-xs italic text-red-500">The password does not matches</p>}
          </div>
        </div>
        <div className="mb-6 text-center">
          <button
            className="w-full px-4 py-2 font-bold text-white bg-[#F97316] rounded-md hover:bg-orange-300 focus:outline-none focus:shadow-outline"
            id="btnSubmit"
            type="submit"
            disabled
          >
            Register Account
          </button>
          {confirmation && <p className="mt-3 text-sm font-medium text-green-600">{confirmation}</p>}
        </div>
        <hr className="mb-6 border-t" />
        <div className="text-center">
          <a
            className="inline-block text-sm text-blue-500 align-baseline hover:text-[#F97316]"
            href="/forgot-password"
          >
            Forgot Password?
          </a>
        </div>
        <div className="text-center">
          <a
            className="inline-block text-sm text-blue-500 align-baseline hover:text-[#F97316]"
            href="/"
          >
            Already have an account? Login!
          </a>
        </div>
      </form>
    </div>
    <div className="relative hidden w-0 flex-1 lg:block">
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
        alt=""
      />
    </div>
  </div>
  
  )
}
