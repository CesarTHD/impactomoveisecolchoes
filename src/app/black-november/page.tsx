"use client";

export const dynamic = "force-dynamic";

import { Suspense, useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Image from "next/image";
import banner from "@/assets/images/black-banner.png";
import bannerMobile from "@/assets/images/black-banner-mobile.png";
import promocao from "@/data/promocao.json";
import ContactForm from "@/components/ContactForm";
import Location from "@/components/Location";
import Testimonials from "@/components/Testimonials";
import CarouselExtended from "@/components/CarouselExtended";

export default function BlackNovember() {
  
  const [showForm, setShowForm] = useState(false);


  return (
    <Suspense fallback={null}>
      <div className="w-full relative bg-white">
        <div>
          <Image
            className="w-full h-auto object-cover hidden md:block"
            width={1440}
            height={500}
            src={banner}
            alt="Promoção Black November Impacto Móveis"
          />
        </div>

        <Image
          className="w-full h-auto object-cover block md:hidden"
          width={1440}
          height={500}
          src={bannerMobile}
          alt="Promoção Black November Impacto Móveis"
        />

        <section className="px-4 lg:px-20 2xl:px-40">
          <div className="my-20">
            <CarouselExtended
              id="sofas"
              title="Sofás em Promoção"
              products={promocao}
            />
          </div>
        </section>

        <section className="px-4 lg:px-20 2xl:px-40 my-16 mt-24 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-red-800 mb-6">
            🔥 Black November Impacto Móveis 🔥
          </h1>
          <p className="text-lg md:text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed">
            É a maior queima de estoque do ano! Sofás, mesas, painéis e poltronas
            com até <span className="font-bold text-red-700">70% de desconto</span>.
          </p>
          <div className="mt-10">
            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center justify-center bg-red-800 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-red-900 transition cursor-pointer hover:scale-110"
            >
              Quero um Orçamento Agora Mesmo
            </button>
          </div>
        </section>

        <div className="my-36">
          <Testimonials />
        </div>

        <section className="px-4 lg:px-20 2xl:px-40 my-24 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
            💬 Não perca essa oportunidade!
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-10">
            Aproveite a Black November Impacto Móveis para garantir móveis
            incríveis com descontos imperdíveis.
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="inline-flex items-center justify-center bg-red-800 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-red-900 transition cursor-pointer hover:scale-110"
          >
            Falar com um Especialista
          </button>
        </section>

        <div className="my-12">
          <Location />
        </div>

        <ContactForm
          showForm={showForm}
          setShowForm={setShowForm}
        />

        <Footer />
      </div>
    </Suspense>
  );
}
