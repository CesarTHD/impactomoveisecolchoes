"use client";
import { useState } from "react";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm({ showForm, setShowForm }: any) {
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone)
      return alert("Preencha todos os campos!");

    setLoading(true);
    try {
      // 🔗 Exemplo: enviar lead para seu fluxo do n8n ou backend
      // await fetch("https://seu-webhook-do-n8n.com/webhook/lead", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(formData),
      // });

      setSent(true);

      // 🔁 Fecha o formulário após alguns segundos
      setTimeout(() => {
        setShowForm(false);
      }, 5000);
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      alert("Erro ao enviar. Tente novamente.");
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
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
            className="w-full max-w-md bg-[#FEF9DC] rounded-2xl shadow-lg overflow-hidden relative z-50 p-6"
          >
            {/* Botão Fechar */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-3 right-3 text-red-700 hover:scale-110 transition"
            >
              <XCircleIcon className="w-7" />
            </button>

            {!sent ? (
              <>
                {/* <h2 className="text-xl font-bold mb-2 text-center text-red-800">
                  Fale com nossa equipe
                </h2> */}
                <p className="text-center text-gray-700 mb-5 font-bold">
                  Informe seu nome e WhatsApp para que possamos lhe enviar descontos exclusivos de Black November 😉
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={handleChange}
                    className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Seu WhatsApp"
                    value={formData.phone}
                    onChange={handleChange}
                    className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700"
                  />

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
