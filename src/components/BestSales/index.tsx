"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import products from './bestSales.json';


export default function BestSales({ setViewProduct }: any) {
    const router = useRouter();
    const [currentSlide, setCurrentSlide] = useState(0);

    const [sliderRef, instanceRef] = useKeenSlider({
        loop: true,
        mode: "free",
        slides: { perView: 1, spacing: 10 },
        renderMode: "performance",
        breakpoints: {
            "(min-width: 500px)": { slides: { perView: 2, spacing: 15 } },
            "(min-width: 768px)": { slides: { perView: 3, spacing: 15 } },
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        }
    });

    useEffect(() => {
        if (!instanceRef.current) return;
        const interval = setInterval(() => {
            instanceRef.current?.next();
        }, 10000);
        return () => clearInterval(interval);
    }, [instanceRef]);

    return (
        <div id="bestSales" className="w-full py-6 relative">
            <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold mb-10 text-center">- Mais Vendidos -</h2>
            <div ref={sliderRef} className="keen-slider">
                {products.products.map((product: any) => (
                    <div key={product.id} className="keen-slider__slide p-4">
                        <button onClick={() => setViewProduct(product)} className="w-full h-full shadow-md shadow-[#a49581] rounded-xl hover:scale-105 transition-transform duration-300">
                            <Card className="cursor-pointer border-[#332921] h-full p-0 overflow-hidden">
                                <CardContent className="flex flex-col items-center p-0 bg-components">
                                    <div className="relative w-full aspect-[16/10]">
                                        <Image
                                            src={product.images[0]}
                                            alt={product.name}
                                            fill
                                            className="rounded-t-xl object-cover"
                                        />
                                    </div>

                                    <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
                                    <p className="text-xs my-4 underline">Ver detalhes</p>
                                </CardContent>
                            </Card>
                        </button>
                    </div>
                ))}
            </div>

            {/* Botões de navegação */}
            <button onClick={() => instanceRef.current?.prev()} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200">
                <ChevronLeft size={24} />
            </button>
            <button onClick={() => instanceRef.current?.next()} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200">
                <ChevronRight size={24} />
            </button>

            {/* Indicadores */}
            <div className="flex justify-center mt-4 space-x-2">
                {products.products.map((_: any, index: number) => (
                    <button key={index} onClick={() => instanceRef.current?.moveToIdx(index)} className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-gray-800' : 'bg-gray-400'}`} />
                ))}
            </div>
        </div>
    )
}