"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import iconWhats from "@/assets/images/icon-whatsapp.png";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useSearchParams } from "next/navigation";

export default function FloatingMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [redirecting, setRedirecting] = useState(false);
  const [gclid, setGclid] = useState<string | null>(null);

  const menuRef = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();
  const [utmCampaign, setUtmCampaign] = useState<string | null>(null);
  const [utmSource, setUtmSource] = useState<string | null>(null);
  const [utmContent, setUtmContent] = useState<string | null>(null);


  const options = [
    { label: "Sofá Caixa Zero", query: "sofa-caixa-zero" },
    { label: "Sofá em L", query: "sofa-em-l" },
    { label: "Sofá Cama", query: "sofa-cama" },
    { label: "Sofá Fixo", query: "sofa-fixo" },
    { label: "Mesas", query: "mesas" },
    { label: "Outros Produtos", query: "outros" },
  ];

  // Captura e persiste o gclid
  useEffect(() => {
    if (!searchParams) return;

    const param = searchParams.get("gclid");

    if (param) {
      localStorage.setItem("gclid", param);
      setGclid(param);
    }

    const stored = localStorage.getItem("gclid");
    if (stored) {
      setGclid(stored);
    }

    const utmCampaignParam = searchParams.get("utm_campaign");
    const utmSourceParam = searchParams.get("utm_source");
    const utmContentParam = searchParams.get("utm_content");

    if (utmCampaignParam) {
      localStorage.setItem("utm_campaign", utmCampaignParam);
      setUtmCampaign(utmCampaignParam);
    } else {
      setUtmCampaign(localStorage.getItem("utm_campaign"));
    }

    if (utmSourceParam) {
      localStorage.setItem("utm_source", utmSourceParam);
      setUtmSource(utmSourceParam);
    } else {
      setUtmSource(localStorage.getItem("utm_source"));
    }

    if (utmContentParam) {
      localStorage.setItem("utm_content", utmContentParam);
      setUtmContent(utmContentParam);
    } else {
      setUtmContent(localStorage.getItem("utm_content"));
    }
  }, [searchParams]);

  // Fecha menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const handleRedirect = async (label: string) => {
    setMenuOpen(false);
    setRedirecting(true);

    const message = label
      ? `Olá! Estou procurando por ${label}`
      : `Olá! Estou procurando por um produto específico`;

    const payload = {
      botao: "floatingMenu",
      interesse: label || "outros",
      gclid,
      utmCampaign,
      utmSource,
      utmContent
    };

    try {
      await fetch(
        "https://n8n-n8n.3nrnye.easypanel.host/webhook/conversoes-google-impacto",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );
    } catch (error) {
      // falhou o webhook, mas não bloqueia conversão
    } finally {
      setTimeout(() => {
        window.location.href = `https://wa.me/5561993529881?text=${encodeURIComponent(
          message
        )}`;
      }, 300);
    }
  };

  return (
    <>
      <div ref={menuRef} className="fixed bottom-4 right-2 z-50">
        {menuOpen && (
          <div className="mb-2 flex flex-col gap-2 bg-white p-3 rounded-lg shadow-lg border border-gray-200 animate-in fade-in slide-in-from-bottom duration-300">
            {options.map((opt) => (
              <button
                key={opt.query}
                id="contatoEspecifico"
                onClick={() =>
                  opt.query === "outros"
                    ? handleRedirect("")
                    : handleRedirect(opt.label)
                }
                className="contatoEspecifico text-sm text-left text-gray-800 hover:text-white hover:bg-red-700 px-3 py-1 rounded transition"
              >
                {opt.label}
              </button>
            ))}
          </div>
        )}

        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          disabled={redirecting}
          className="px-2 py-1 flex bg-red-800 justify-center items-center gap-2 rounded-lg font-semibold hover:bg-red-900 transition disabled:opacity-60"
        >
          {menuOpen ? (
            <ChevronDown color="#FFFFFF" />
          ) : (
            <ChevronUp color="#FFFFFF" />
          )}
          <p className="leading-4 text-white!">Procura algo específico?</p>
          <Image
            src={iconWhats}
            alt="whatsapp impacto móveis"
            width={23}
            height={20}
          />
        </button>
      </div>

      {redirecting && (
        <div className="fixed inset-0 z-[999] bg-black/80 flex items-center justify-center">
          <div className="bg-white rounded-2xl px-8 py-6 text-center shadow-xl max-w-sm mx-4">
            <p className="text-lg font-semibold">💬 Só um instante!</p>
            <p className="text-sm mt-2 text-gray-600">
              Estamos te levando para o WhatsApp para te ajudar.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
