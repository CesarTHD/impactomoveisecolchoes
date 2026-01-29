"use client";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Specialties from "@/components/Specialties"
import Image from "next/image";
import banner from "@/assets/images/new_banner.png"
import bannerMobile from "@/assets/images/new_banner_mobile.png"
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
import FloatingMenu from "@/components/floatingMenu";
import { useSearchParams } from "next/navigation";

export default function HomeClient() {
  const [viewProduct, setViewProduct]: any = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [redirecting, setRedirecting] = useState(false);
  const [gclid, setGclid] = useState<string | null>(null);
  const searchParams = useSearchParams();
  
  useEffect(() => {
    const param = searchParams?.get("gclid");

    if (param) {
      localStorage.setItem("gclid", param);
      setGclid(param);
      return;
    }
    const stored = localStorage.getItem("gclid");
    if (stored) {
      setGclid(stored);
    }
  }, [searchParams]);

  // const whatsappLink = `https://wa.me/5561993529881?text=Olá!+Estou+procurando+um+produto+específico.`;

  const solicitarOrcamento = async () => {
    const payload = {
      botao: 'contatoEspecifico',
      produto: '',
      gclid,
    };

    setError("");
    setLoading(true);
    setRedirecting(true);

    try {
      await fetch("https://n8n-n8n.3nrnye.easypanel.host/webhook/conversoes-google-impacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (error) {
    } finally {
      setLoading(false);
      window.location.href = `https://wa.me/5561993529881?text=Olá!+Estou+procurando+um+produto+específico.`;
    }
  };

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
        className="w-full h-auto object-cover hidden md:block"
        src={banner}
        alt="Banner Impacto Móveis"
      />
      <Image
        className="w-full h-auto object-cover xl:px-20 block md:hidden"
        width={1440}
        height={500}
        src={bannerMobile}
        alt="Banner Impacto Móveis"
      />

      {/* <div className="flex justify-center p-12">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.4" stroke="currentColor" className="size-8 text-red-800">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
        </svg>
      </div> */}



      <div className="backdrop-blur-xl mask-fade-circle">
        <div className="bg-[#fbfaeb]">
          <Specialties />
        </div>
        <div className="py-24 xl:px-20  bg-[#E7DBCF]">
          <CarouselProducts id={"retrateis"} title={"Retráteis Caixa Zero"} products={caixaZero} setViewProduct={setViewProduct} />
        </div>
        <div className="py-22 xl:px-20  ">
          <CarouselProducts id={"sofasCamas"} title={"Sofás-Camas Com e Sem Baú"} products={sofasCamas} setViewProduct={setViewProduct} />
        </div>
        <div className="py-24 xl:px-20 bg-[#452712]">
          <CarouselProducts id={"sofasCouro"} color="text-gray-300!" title={"Sofás em Couro Legítimo"} products={sofasCouro} setViewProduct={setViewProduct} />
        </div>
        <div className="py-24 xl:px-20 bg-[#fbfaeb]">
          <CarouselProducts id={"mesas"} title={"Mesas em Madeira Maciça"} products={mesas} setViewProduct={setViewProduct} />
        </div>
        <div className="py-24 xl:px-20 bg-[#E7DBCF]">
          <CarouselProducts id={"poltronas-tecido"} title={"Poltronas em Tecido Premium"} products={poltronasTecido} setViewProduct={setViewProduct} />
        </div>
        <div className="py-24 xl:px-20 bg-[#452712]">
          <CarouselProducts id={"paineis"} color="text-gray-300!" title={"Painéis Sofisticados e Funcionais"} products={paineis} setViewProduct={setViewProduct} />
        </div>
        <div className="my-36">
          <Testimonials />
        </div>
        <div className="my-24 px-10">
          <button
            // href={whatsappLink}
            // target="_blank"
            id="contatoEspecifico"
            disabled={redirecting}
            onClick={() => solicitarOrcamento()}
            rel="noopener noreferrer"
            className="p-2 flex bg-red-950 text-white justify-center items-center rounded-lg font-semibold hover:bg-red-900 transition max-w-xl mx-auto cursor-pointer"
          >
            <p className="text-white!">Não encontrou o que deseja? Fale conosco</p>
          </button>
        </div>
        <div className="py-24 xl:px-20 bg-[#E7DBCF]">
          <CarouselProducts id={"poltronas"} title={"Poltronas em Couro Legítimo"} products={poltronasCouro} setViewProduct={setViewProduct} />
        </div>
        <div className="my-20 px-10">
          <button
            // href={whatsappLink}
            // target="_blank"
            id="contatoEspecifico"
            disabled={redirecting}
            onClick={() => solicitarOrcamento()}
            rel="noopener noreferrer"
            className="p-2 flex bg-red-950 text-white justify-center items-center rounded-lg font-semibold hover:bg-red-900 transition max-w-xl mx-auto cursor-pointer"
          >
            <p className="text-white!">Não encontrou o que deseja? Fale conosco</p>
          </button>
        </div>
        <div className="my-12">
          <Location />
        </div>
        <div className="my-18 px-8">
          <AboutUs />
        </div>
        <div className="my-24">
          <InstaFeed />
        </div>
      </div>
      <Footer />,

      {redirecting && (
        <div className="fixed inset-0 z-[999] bg-black/80 flex items-center justify-center">
          <div className="bg-white rounded-2xl px-8 py-6 text-center shadow-xl max-w-sm mx-4">
            <p className="text-lg font-semibold">
              💬 Só um instante!
            </p>
            <p className="text-sm mt-2 text-gray-600">
              Estamos te levando para o WhatsApp para finalizar seu atendimento.
            </p>
          </div>
        </div>
      )}

    </div>
  );
}
