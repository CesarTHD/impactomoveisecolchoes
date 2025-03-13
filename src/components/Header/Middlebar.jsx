"use client";
import Image from "next/image";
import logo from "@/assets/images/logo.png"
import { useRouter } from "next/navigation";

export default function Middlebar({ className, type = 1 }) {
  
  const router = useRouter();
  
  return (
    <div className={`w-full h-[86px]  ${className} bg-[#ba191c] px-6`}>
      <div className="container-x mx-auto h-full max-w-[1250px]">
        <div className="relative h-full">
          <div className="flex justify-between items-center h-full">
            <div>
                <button onClick={() => router.push("/")}>
                  <Image
                    width="152"
                    height="36"
                    src={logo}
                    alt="logo3"
                  />
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
