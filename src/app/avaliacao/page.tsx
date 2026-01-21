"use client";

import { useState } from "react";
import logo from "@/logo-impacto.jpg";
import Image from "next/image";

export default function FeedbackPage() {
    const [rating, setRating] = useState<number | null>(null);
    const [comment, setComment] = useState("");
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    async function handleSubmit() {
        if (!rating || !email) return alert("Preencha os campos obrigatórios");

        setLoading(true);

        await fetch("https://SEU_WEBHOOK_N8N_AQUI", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                rating,
                comment,
                email,
                orderId: new URLSearchParams(window.location.search).get("order"),
                page: "/avaliacao",
                createdAt: new Date().toISOString(),
            }),
        });

        setLoading(false);
        setSuccess(true);
    }

    if (success) {
        return (
            <div className="p-6 text-center">
                <h2 className="text-2xl font-bold">🎉 Obrigado pelo seu feedback!</h2>
                <p>Seu cashback será enviado por e-mail.</p>
            </div>
        );
    }

    return (
        <div className="min-h-lvh flex justify-center bg-[radial-gradient(ellipse_at_center,_#FFE5E6_-60%,_#EB3238_50%)]">
            <div className="w-md  p-6 space-y-8 flex flex-col items-center mt-18">
                <Image src={logo} alt="" width={180} />
                <h1 className="text-xl font-bold text-center">
                    💬 Como foi sua experiência?
                </h1>

                <p className="text-sm text-center text-black/80!">
                    Leva menos de 1 minuto e você recebe{" "}
                    <span className="font-semibold">R$ 45,00 de cashback</span>{" "}
                    na próxima compra.
                </p>

                {/* Rating */}
                <div className="flex justify-center gap-2">
                    {[1, 2, 3, 4, 5].map((n) => (
                        <button
                            key={n}
                            onClick={() => setRating(n)}
                            className={`w-10 h-10 rounded-full border hover:bg-black/40 cursor-pointer ${rating === n ? "bg-black text-white" : ""
                                }`}
                        >
                            {n}
                        </button>
                    ))}
                </div>

                {/* Comment */}
                <textarea
                    placeholder="Conte pra gente o que achou..."
                    className="w-full border rounded p-2"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />

                {/* Email */}
                <input
                    type="email"
                    placeholder="Seu e-mail para receber o cashback"
                    className="w-full border rounded p-2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="w-full bg-black text-white rounded p-3 cursor-pointer"
                >
                    {loading ? "Enviando..." : "Enviar feedback"}
                </button>
            </div>
        </div>
    );
}
