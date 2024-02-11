"use client";
import { FaGoogle } from "react-icons/fa";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";

import { AgnoContext } from "../context/AgnoContext";

export default function Home() {
  const router = useRouter();
  const { signIn, signInWithGoogle, signInWithGitHub } =
    useContext(AgnoContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, token } = useContext(AgnoContext);
  //console.log(user);
  useEffect(() => {
    if (token) {
      console.log(token);
      router.push("/dashboard");
    }
  }, [token, router]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await signIn(email, password);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex h-screen bg-white">
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <img
                className="h-10 w-auto"
                src="https://firebasestorage.googleapis.com/v0/b/console-agnostic.appspot.com/o/agnoLogo%20(1).png?alt=media&token=28c99d8e-d676-424e-8d45-bf42d0a3d292&_gl=1*1wjvco5*_ga*MTg2NjAyMzY2Ny4xNjY1NDM5MTE5*_ga_CW55HF8NVT*MTY4NTQ3OTY0Ny4xOS4xLjE2ODU0Nzk3MzMuMC4wLjA."
                alt="Your Company"
              />

              <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Sign in to your account
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Not a member?{" "}
                <Link href={"/signup"}>
                  <button className="font-semibold text-[#F97316] hover:text-orange-400">
                    Start a 14 day free trial
                  </button>
                </Link>
              </p>
            </div>

            <div className="mt-10">
              <div>
                <form
                  action="#"
                  method="POST"
                  className="space-y-6"
                  onSubmit={handleSubmit}
                >
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={email} // Atribui o valor do estado email ao campo de entrada
                        onChange={(e) => setEmail(e.target.value)}
                        className="text-orange-400 outline-none pl-2 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-400 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        value={password} // Atribui o valor do estado password ao campo de entrada
                        onChange={(e) => setPassword(e.target.value)}
                        className="text-orange-400 outline-none pl-2 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-400 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-[#F97316] focus:ring-orange-400"
                      />
                      <label
                        htmlFor="remember-me"
                        className="ml-3 block text-sm leading-6 text-gray-700"
                      >
                        Remember me
                      </label>
                    </div>

                    <div className="text-sm leading-6">
                      <Link
                        href="/forgot-password"
                        className="font-semibold text-[#F97316] hover:text-orange-400"
                      >
                        Forgot password?
                      </Link>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-[#F97316] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
              <div className="mt-10">
                <div className="relative">
                  <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div className="w-full border-t border-gray-200" />
                  </div>
                  <div className="relative flex justify-center text-sm font-medium leading-6">
                    <span className="bg-white px-6 text-gray-900">
                      Or continue with
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <button
                    className="flex w-full items-center justify-center gap-3 rounded-md bg-[#1D9BF0] px-4 py-2 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]"
                    style={{ fontSize: "1.25rem" }}
                    onClick={signInWithGoogle}
                  >
                    <FaGoogle className="h-6 w-6" />
                    <span className="text-base font-semibold leading-6">
                      Google
                    </span>
                  </button>
                  <a
                    href="#"
                    onClick={signInWithGitHub}
                    className="flex w-full items-center justify-center gap-3 rounded-md bg-[#24292F] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]"
                  >
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm font-semibold leading-6">
                      GitHub
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
