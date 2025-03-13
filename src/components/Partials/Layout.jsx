"use client";
import {  useState } from "react";
import Footer from "../Footer";
import Middlebar from "../HeaderOne/Middlebar";
import Specialties from "@/components/Specialties"
import Image from "next/image";
import banner from "@/assets/images/banner.png"

export default function Layout() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  return (
    <>
      <div className="w-full">
        {/* <Middlebar className="quomodo-shop-middle-bar lg:block hidden" /> */}
        <div className="flex justify-center">
          <Image className="w-full max-w-[1000px] h-auto" width={1440} src={banner}  alt="Banner Impacto Móveis" />
        </div>
        <div className="max-w-[1200px] mx-auto my-28">
          <Specialties />
        </div>
        <Footer />
      </div>
    </>
  );
}
