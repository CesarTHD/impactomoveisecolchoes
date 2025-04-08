"use client";
import { useState } from "react";
import Footer from "@/components/Footer";
import Specialties from "@/components/Specialties"
import Image from "next/image";
import banner from "@/assets/images/banner.png"
import bannerMobile from "@/assets/images/banner-mobile.png"
import AboutUs from "@/components/AboutUs";
import Location from "@/components/Location";
import InstaFeed from "@/components/InstaFeed";
import Testimonials from "@/components/Testimonials";
import ViewProduct from "@/components/ViewProduct";
import BestSales from "@/components/BestSales";
import SofasCouro from "@/components/SofasCouro";


export default function Home() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [viewProduct, setViewProduct]:any = useState(false);


  return (
    <div className="w-full relative">
      {/* <Middlebar className="quomodo-shop-middle-bar lg:block hidden" /> */}
      {viewProduct && (
        <div className="fixed inset-0 bg-black/50 z-40">
          <ViewProduct viewProduct={viewProduct} setViewProduct={setViewProduct} />
        </div>
      )}

      <Image
        className="w-full h-auto mask-fade-sides object-cover xl:px-20 hidden md:block"
        width={1440}
        height={500} // Defina uma altura para garantir que o efeito blush seja visível
        src={banner}
        alt="Banner Impacto Móveis"
      />
      <Image
        className="w-full h-auto mask-fade-sides object-cover xl:px-20 block md:hidden"
        width={1440}
        height={500} // Defina uma altura para garantir que o efeito blush seja visível
        src={bannerMobile}
        alt="Banner Impacto Móveis"
      />
      <div className="px-4 lg:px-20 2xl:px-40 backdrop-blur-xl mask-fade-circle">
        <div className="my-12">
          <Specialties />
        </div>
        <div className="my-12">
          <SofasCouro setViewProduct={setViewProduct} />
        </div>
        <div className="my-12">
          <InstaFeed />
        </div>
        <div className="my-12">
          <BestSales setViewProduct={setViewProduct} />
        </div>
        {/* <div className="my-12">
          <Sofas />
        </div> */}
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
