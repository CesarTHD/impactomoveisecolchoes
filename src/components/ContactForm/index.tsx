"use client";
import { useState } from "react";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from 'next/navigation';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}


export default function ContactForm({ showForm, setShowForm, gclid }: any) {

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
  const formatPhone = (value: string) => {
    let v = value.replace(/\D/g, "");
    v = v.slice(0, 11);

    if (v.length <= 2) return `(${v}`;
    if (v.length <= 7) return `(${v.slice(0, 2)}) ${v.slice(2)}`;
    return `(${v.slice(0, 2)}) ${v.slice(2, 7)}-${v.slice(7)}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name === "phone") {
      return setFormData({ ...formData, phone: formatPhone(value) });
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone) {
      setError("Preencha todos os campos!");
      return;
    }

    if (!/^\(\d{2}\) \d{5}-\d{4}$/.test(formData.phone)) {
      setError("* Digite um número válido no formato (61) 91234-5678");
      return;
    }

    setError("");
    setLoading(true);

    try {
      await fetch("https://n8n-n8n.3nrnye.easypanel.host/webhook/910cad48-67fa-4cc5-9fcf-b6de3932893b", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, gclid }),
      });

      setSent(true);

      gtag_report_conversion();

      setTimeout(() => {
        setShowForm(false);
      }, 5000);
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      setError("Erro ao enviar. Tente novamente.");
    } finally {
      setLoading(false);
    }
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
                <p className="text-center text-gray-700 mb-5 font-bold">
                  Informe seus dados para receber descontos exclusivos de Black November 😉
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
                    className="p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-red-700"
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
                    {loading ? "Enviando..." : "Enviar"}
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
