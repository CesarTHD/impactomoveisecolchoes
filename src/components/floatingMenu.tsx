import { useState } from "react";
import Image from "next/image";
import iconWhats from "@/assets/images/icon-whatsapp.png";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FloatingMenu() {
    const [menuOpen, setMenuOpen] = useState(false);

    const options = [
        { label: "Sofá Caixa Zero", query: "sofa-caixa-zero" },
        { label: "Sofá em L", query: "sofa-em-L" },
        { label: "Sofá Cama", query: "sofa-cama" },
        { label: "Sofá Fixo", query: "sofa-fixo" },
        { label: "Mesas", query: "mesas" },
        { label: "Outros Produtos", query: "outros" },
    ];

    const baseWhatsApp = "https://wa.me/5561993529881?text=";

    const createLink = (query: string) =>
        `${baseWhatsApp}${encodeURIComponent(`Olá! Estou procurando por ${query}`)}`;

    return (
        <div className="fixed bottom-4 right-2 z-50">
            {menuOpen && (
                <div
                    className="mt-2 flex flex-col gap-2 bg-white p-3 rounded-lg shadow-lg border border-gray-200
               animate-in fade-in slide-in-from-bottom duration-300"
                >
                    {options.map((opt) => (
                        opt.query == "outros" ? (
                            <a
                                key={opt.query}
                                href={createLink("")}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-gray-800 hover:text-white hover:bg-red-700 px-3 py-1 rounded transition"
                                onClick={() => setMenuOpen(false)}
                            >
                                {opt.label}
                            </a>
                        ) : (
                            <a
                                key={opt.query}
                                href={createLink(opt.label)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-gray-800 hover:text-white hover:bg-red-700 px-3 py-1 rounded transition"
                                onClick={() => setMenuOpen(false)}
                            >
                                {opt.label}
                            </a>
                        )
                    ))}
                </div>
            )}

            <button
                onClick={() => setMenuOpen((prev) => !prev)}
                className="px-2 py-1 flex bg-red-800 hover:cursor-pointer justify-center items-center gap-2 rounded-lg font-semibold hover:bg-red-900 transition"
            >
                {menuOpen ? (
                    <ChevronDown color="#FFFFFF" />
                ) : (
                    <ChevronUp color="#FFFFFF" />
                )}
                <p className="leading-4 text-white!">Procura algo específico?</p>
                <Image src={iconWhats} alt="whatsapp impacto móveis" width={23} height={20} />
            </button>

        </div>
    );
}