"use client";
import { useState } from "react";
import Footer from "@/components/Footer";
import Middlebar from "@/components/Header/Middlebar";
import Specialties from "@/components/Specialties"
import Image from "next/image";
import banner from "@/assets/images/banner.png"
import bannerMobile from "@/assets/images/banner-mobile.png"
import AboutUs from "@/components/AboutUs";
import Location from "@/components/Location";
import InstaFeed from "@/components/InstaFeed";
import Testimonials from "@/components/Testimonials";
import BestSales from "@/components/BestSales";
import Mesas from "@/components/BestSales/Mesas";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="w-full">
      {/* <Middlebar className="quomodo-shop-middle-bar lg:block hidden" /> */}

      <Image
        className="w-full h-auto mask-fade-sides object-cover xl:px-20 hidden md:block"
        width={1440}
        height={500} // Defina uma altura para garantir que o efeito seja visível
        src={banner}
        alt="Banner Impacto Móveis"
      />
      <Image
        className="w-full h-auto mask-fade-sides object-cover xl:px-20 block md:hidden"
        width={1440}
        height={500} // Defina uma altura para garantir que o efeito seja visível
        src={bannerMobile}
        alt="Banner Impacto Móveis"
      />
      <div className="px-4 lg:px-20 2xl:px-40 backdrop-blur-xl mask-fade-circle">

        <div className="my-12">
          <Specialties />
        </div>
        <div className="my-12">
          <BestSales />
        </div>
        <div className="my-12">
          <InstaFeed />
        </div>
        <div className="my-12">
          <BestSales />
        </div>
        <div className="my-32">
          <AboutUs />
        </div>
        <div className="my-12">
          <Testimonials />
        </div>
        <div className="mt-36 mb-60">
          <Location />
        </div>
      </div>
      <Footer />
    </div>
  );
}
