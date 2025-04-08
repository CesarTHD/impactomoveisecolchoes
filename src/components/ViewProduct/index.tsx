"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { XCircleIcon } from "@heroicons/react/24/outline";

const ViewProduct = ({ viewProduct, setViewProduct } : any) => {
    const router = useRouter();
    const [currentSlide, setCurrentSlide] = useState(0);

    const [sliderRef, instanceRef] = useKeenSlider({
        loop: true,
        mode: "free",
        slides: { perView: 1, spacing: 0 },
        renderMode: "performance",
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
    });

    useEffect(() => {
        if (!instanceRef.current) return;
        const interval = setInterval(() => {
            instanceRef.current?.next();
        }, 10000);
        return () => clearInterval(interval);
    }, [instanceRef]);

    const product = {
        name: "Sofá Alemanha",
        description:
            "Esse sofá combina conforto e sofisticação, com um design moderno e estofado premium para proporcionar o máximo de relaxamento. Ideal para qualquer ambiente.",
        items: [
            "Retrátil e Reclinável",
            "Couro Furado",
            "Pés em Madeira",
            "Almofadas em Silicone",
        ],
        images: [viewProduct.image, viewProduct.imageVerse],
    };

    const whatsappLink = `https://wa.me/5561993529881?text=Olá!+Tenho+interesse+no+produto+${product.name}.+Poderia+me+passar+mais+detalhes?`;

    return (
        <div className="fixed inset-0 bg-black/50 z-40 flex items-center justify-center">
            <div className="w-full max-w-3xl bg-[#FEF9DC] border-2 border-amber-50 rounded-2xl shadow-lg overflow-hidden relative z-40">
                {/* Botão de Fechar */}
                <button
                    onClick={() => setViewProduct(false)}
                    className="absolute top-2 right-2 bg-white rounded-full shadow-lg hover:scale-110 cursor-pointer z-50"
                >
                    <XCircleIcon strokeWidth={2} className="w-8 text-red-700" />
                </button>
                {/* Slider */}
                <div className="relative">
                    <div ref={sliderRef} className="keen-slider">
                        {product.images.map((image, index) => (
                            <div key={index} className="keen-slider__slide">
                                <Image className="object-cover w-full" width={1000} height={700} src={image} alt={product.name} />
                            </div>
                        ))}
                    </div>

                    {/* Indicadores */}
                    <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {product.images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => instanceRef.current?.moveToIdx(index)}
                                className={`w-3 h-3 rounded-full ${currentSlide === index ? "bg-gray-800" : "bg-gray-400"}`}
                            />
                        ))}
                    </div>
                    {/* Botões de navegação */}
                    <button
                        onClick={() => instanceRef.current?.prev()}
                        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={() => instanceRef.current?.next()}
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
                {/* Informações do produto */}
                <div className="p-5">
                    <h2 className="text-xl font-bold">{viewProduct.name}</h2>
                    <p className="mt-2">{viewProduct.description}</p>

                    {/* <ul className="list-disc px-10 mt-4">
                        {product.items.map((item: string) => (
                            <li key={item}><p>{item}</p></li>
                        ))}
                    </ul> */}
                    <p className="mt-2">Faça agora mesmo um orçamento de acordo com a medida ideal para você.</p>
                    {/* Botão de orçamento */}
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 block bg-red-800 text-white text-center py-2 rounded-lg font-semibold hover:bg-red-900 transition"
                    >
                        Solicitar Orçamento
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ViewProduct;
