"use client";
import { useEffect, useState } from "react";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from 'next/navigation';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}


export default function ContactForm({ showForm, setShowForm }: any) {

  const searchParams = useSearchParams();

  const [gclid, setGclid] = useState<string | null>(null);

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

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    category: "",
  });

  function gtag_report_conversion(url?: any) {
    const callback = () => {
      if (url) window.location = url;
    };

    window.gtag("event", "conversion", {
      send_to: "AW-11017701907/lKecCMni7MEbEJOU04Up",
      event_callback: callback,
    });

    return false;
  }


  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  // Máscara do telefone
  // const normalizePhone = (raw: string) => {
  //   let v = raw.replace(/\D/g, "");

  //   // Remove 55 do início
  //   if (v.startsWith("55")) {
  //     v = v.slice(2);
  //   }

  //   // Se tiver menos que 11 dígitos, tentar completar
  //   if (v.length >= 2) {
  //     const ddd = v.slice(0, 2);
  //     let number = v.slice(2);

  //     // Garante o 9 no início do número
  //     if (number.length >= 4 && !number.startsWith("9")) {
  //       number = "9" + number;
  //     }

  //     v = ddd + number;
  //   }

  //   // Mantém no máximo 11 dígitos
  //   v = v.slice(0, 15);

  //   return v;
  // };

  const formatPhoneForDisplay = (value: string) => {
    const v = value.replace(/\D/g, "");

    if (v.length <= 2) return v;
    if (v.length <= 7) return `${v.slice(0, 2)} ${v.slice(2)}`;
    if (v.length <= 11) return `${v.slice(0, 2)} ${v.slice(2, 7)}-${v.slice(7)}`;

    return v; // valores maiores que 11 ficam brutos (sem cortar)
  };



  const normalizeForSending = (raw: string) => {
    let v = raw.replace(/\D/g, ""); // só números

    // Remove 55 do início se existir
    if (v.startsWith("55")) {
      v = v.slice(2);
    }

    let ddd = "";
    let number = "";

    if (v.length >= 11) {
      // usuário digitou DDD + número completo
      ddd = v.slice(0, 2);
      number = v.slice(2);
    } else if (v.length === 10) {
      // DDD + número sem 9
      ddd = v.slice(0, 2);
      number = v.slice(2);
      if (!number.startsWith("9")) number = "9" + number;
    } else {
      // Usuário não digitou DDD
      ddd = "61";
      number = v;
      if (!number.startsWith("9")) number = "9" + number;
    }

    // Retorna telefone final com 11 dígitos
    return (ddd + number).slice(0, 11);
  };


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const cleaned = value.replace(/\D/g, "");
      return setFormData({
        ...formData,
        phone: formatPhoneForDisplay(cleaned),
      });
    }


    setFormData({ ...formData, [name]: value });
  };



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const normalized = normalizeForSending(formData.phone);

    if (normalized.length !== 11) {
      setError("Número inválido.");
      return;
    }

    const payload = {
      ...formData,
      phone: normalized, // <-- aqui vai DDD + 9 + número
    };

    await fetch("/api/lead", {
      method: "POST",
      body: JSON.stringify(payload),
    });
  };



  return (
    <AnimatePresence>
      {showForm && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={() => setShowForm(false)}
          className="fixed inset-0 bg-black/50 z-40 flex items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
            className="w-full max-w-md bg-[#FEF9DC] rounded-2xl shadow-lg overflow-hidden relative z-50 p-6"
          >
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-3 right-3 text-red-700 hover:scale-110 transition cursor-pointer"
            >
              <XCircleIcon className="w-7" />
            </button>

            {!sent ? (
              <>
                <p className="text-center text-gray-700 mb-5 font-bold text-lg">
                  Entraremos em contato em instantes para fazer um orçamento personalizado para você!😉
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={handleChange}
                    className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700"
                  />

                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="Seu WhatsApp"
                    value={formData.phone}
                    onChange={handleChange}
                    className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700"
                  />

                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700 text-neutral-500"
                  >
                    <option value="">O que você está procurando?</option>
                    <option value="Sofá Retrátil">Sofá Retrátil</option>
                    <option value="Sofá Fixo">Sofá Fixo</option>
                    <option value="Sofá Baú">Sofá Baú</option>
                    <option value="Sofá de Couro">Sofá de Couro</option>
                    <option value="Mesa">Mesa</option>
                    <option value="Cadeira">Cadeira</option>
                    <option value="Painel">Painel</option>
                  </select>

                  {error && <span className="text-red-600 text-sm">{error}</span>}

                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-red-800 text-white font-semibold py-3 rounded-lg hover:bg-red-900 transition cursor-pointer"
                  >
                    {loading ? "Enviando..." : "Receber Orçamento Personalizado"}
                  </button>
                </form>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-10"
              >
                <p className="text-green-700 font-semibold">
                  Dados enviados com sucesso! Em breve entraremos em contato.
                </p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
