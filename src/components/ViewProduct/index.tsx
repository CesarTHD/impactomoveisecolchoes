"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { XCircleIcon } from "@heroicons/react/24/outline";
import iconWhats from "@/assets/images/icon-whatsapp.png";

const ViewProduct = ({ viewProduct, setViewProduct }: any) => {
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

    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setViewProduct(false);
            }
        };
    
        document.addEventListener("keydown", handleEsc);
    
        return () => {
            document.removeEventListener("keydown", handleEsc);
        };
    }, []);
    

    const whatsappLink = `https://wa.me/5561993529881?text=Olá!+Tenho+interesse+no+produto+${viewProduct.name}.+Gostaria+de+fazer+um+orçamento!`;

    return (
        <div onClick={() => setViewProduct(false)} className="fixed inset-0 bg-black/50 z-40 h-screen flex items-center justify-center">
            <div onClick={(e: React.MouseEvent) => e.stopPropagation()} className="w-full max-w-3xl bg-[#FEF9DC] max-h-[95%] overflow-y-auto rounded-2xl shadow-lg overflow-hidden relative z-40">
                {/* Botão de Fechar */}
                <button
                    onClick={() => setViewProduct(false)}
                    className="absolute w-16 top-2 right-6 rounded-full shadow-lg hover:scale-110 cursor-pointer z-50"
                >
                    <div className="relative flex items-center w-20 h-6">
                        <p className="text-red-700! bg-[#FEF9DC] px-2 rounded-bl-xl rounded-tl-xl border-y-2 border-l-2 border-red-700  font-semibold text-sm absolute">fechar</p>
                        <XCircleIcon strokeWidth={2} className="w-8 bg-[#FEF9DC] rounded-full text-red-700 absolute right-0" />

                    </div>
                </button>
                {/* Slider */}
                <div className="relative">
                    <div ref={sliderRef} className="keen-slider">
                        {viewProduct.images.map((image: string, index: number) => (
                            <div key={index} className="keen-slider__slide">
                                <Image className="object-cover w-full" width={1000} height={700} src={image} alt={viewProduct.name} />
                            </div>
                        ))}
                    </div>

                    {/* Indicadores */}
                    <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {viewProduct.images.map((_: string, index: number) => (
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

                    <ul className="list-disc px-10 mt-4">
                        {viewProduct.items.map((item: string) => (
                            <li key={item}><p>{item}</p></li>
                        ))}
                    </ul>
                    <p className="mt-2">Faça agora mesmo um orçamento de acordo com a medida e o material ideais para você.</p>
                    {/* Botão de orçamento */}
                    <a
                        href={whatsappLink}
                        target="_blank"
                        id="contatoProduto"
                        rel="noopener noreferrer"
                        className="mt-4 flex bg-red-800 text-white justify-center gap-4 py-2 rounded-lg font-semibold hover:bg-red-900 transition"
                    >
                        <p className="text-white!">Solicitar Orçamento</p>
                        <Image src={iconWhats} alt="whatsapp impacto móveis" width={23} height={20} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ViewProduct;
