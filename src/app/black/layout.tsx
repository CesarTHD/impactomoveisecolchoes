import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Black November Impacto Móveis - até 50% off, 36x no boleto",
  description:
    "Black November na Impacto Móveis: até 50% off em móveis selecionados, parcelamento em até 36x no boleto e ofertas válidas até 30/11. Taguatinga-DF.",
};

export default function BlackLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
