"use client";
import { useEffect, useState } from "react";
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
import CarouselProducts from "@/components/CarouselProducts";
import sofasCouro from "@/data/sofasCouro.json";
import caixaZero from "@/data/retrateisSemCaixa.json";
import sofasCamas from "@/data/sofasCamas.json";
import poltronasCouro from "@/data/poltronasCouro.json";
import poltronasTecido from "@/data/poltronasTecido.json";
import mesas from "@/data/mesas.json";
import paineis from "@/data/paineis.json";
import iconWhats from "@/assets/images/icon-whatsapp.png";
import FloatingMenu from "@/components/floatingMenu";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [viewProduct, setViewProduct]: any = useState(false);

  const whatsappLink = `https://wa.me/5561993529881?text=Olá!+Estou+procurando+um+produto+específico.`;
  
  return (
    <div className="w-full relative">
      {viewProduct && (
        <div className="fixed inset-0 bg-black/50 z-40">
          <ViewProduct viewProduct={viewProduct} setViewProduct={setViewProduct} />
        </div>
      )}

      <FloatingMenu />

      {/* <div className="fixed bottom-4 right-2 z-50">
        <a
          href={whatsappLink}
          target="_blank"
          id="contatoEspecifico"
          rel="noopener noreferrer"
          className="px-2 py-1 flex bg-red-800 text-white justify-center items-center gap-2 rounded-lg font-semibold hover:bg-red-900 transition"
        >
          <p className="text-white! leading-4">Procura algo específico?</p>
          <Image src={iconWhats} alt="whatsapp impacto móveis" width={23} height={20} />
        </a>
      </div> */}

      <Image
        className="w-full h-auto mask-fade-sides object-cover xl:px-20 hidden md:block"
        width={1440}
        height={500}
        src={banner}
        alt="Banner Impacto Móveis"
      />
      <Image
        className="w-full h-auto mask-fade-sides object-cover xl:px-20 block md:hidden"
        width={1440}
        height={500}
        src={bannerMobile}
        alt="Banner Impacto Móveis"
      />
      <div className="px-4 lg:px-20 2xl:px-40 backdrop-blur-xl mask-fade-circle">
        <div className="my-12">
          <CarouselProducts id={"sofasCamas"} title={"Sofás-Camas Com e Sem Baú"} products={sofasCamas} setViewProduct={setViewProduct} />
        </div>
        <div className="my-12">
          <CarouselProducts id={"retrateis"} title={"Retráteis Caixa Zero"} products={caixaZero} setViewProduct={setViewProduct} />
        </div>
        <div className="my-12">
          <CarouselProducts id={"sofasCouro"} title={"Sofás em Couro Legítimo"} products={sofasCouro} setViewProduct={setViewProduct} />
        </div>
        <div className="my-12">
          <Specialties />
        </div>
        <div className="my-12">
          <CarouselProducts id={"mesas"} title={"Mesas em Madeira Maciça"} products={mesas} setViewProduct={setViewProduct} />
        </div>
        <div className="my-12">
          <CarouselProducts id={"poltronas-tecido"} title={"Poltronas em Tecido Premium"} products={poltronasTecido} setViewProduct={setViewProduct} />
        </div>
        <div className="my-36">
          <Testimonials />
        </div>
        <div className="my-12">
          <CarouselProducts id={"poltronas"} title={"Poltronas em Couro Legítimo"} products={poltronasCouro} setViewProduct={setViewProduct} />
        </div>
        <div className="my-12">
          <CarouselProducts id={"paineis"} title={"Painéis Sofisticados e Funcionais"} products={paineis} setViewProduct={setViewProduct} />
        </div>
        <div className="my-20">
          <a
            href={whatsappLink}
            target="_blank"
            id="contatoEspecifico"
            rel="noopener noreferrer"
            className="p-2 flex bg-red-800 text-white justify-center items-center rounded-lg font-semibold hover:bg-red-900 transition max-w-xl mx-auto"
          >
            <p className="text-white!">Não encontrou o que deseja? Fale conosco</p>
          </a>
        </div>
        <div className="my-36">
          <AboutUs />
        </div>
        <div className="my-12">
          <Location />
        </div>
        <div className="my-24">
          <InstaFeed />
        </div>
      </div>
      <Footer />
    </div>
  );
}
