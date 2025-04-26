'use client';
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import iconeSofa from "@/assets/images/icone-sofa.png";

export default function Specialties() {
  return (
    <>

      <div className="main-wrapper w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key="disclaimer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="best-services w-full border-t-2 border-[#821317] bg-components shadow-xl shadow-[#dccdb8] gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center lg:h-[200px] px-10 lg:py-0 py-10"
          >
            <div className="item max-w-[250px] lg:max-w-[250px] 2xl:max-w-[320px]">
              <div className="flex space-x-5 2xl:space-x-10 items-center">
                <div>
                  <span>
                    <svg
                      className=" xl:scale-125 2xl:scale-150"
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1H5.63636V24.1818H35"
                        stroke="#821317"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="square"
                      />
                      <path
                        d="M8.72763 35.0002C10.4347 35.0002 11.8185 33.6163 11.8185 31.9093C11.8185 30.2022 10.4347 28.8184 8.72763 28.8184C7.02057 28.8184 5.63672 30.2022 5.63672 31.9093C5.63672 33.6163 7.02057 35.0002 8.72763 35.0002Z"
                        stroke="#821317"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="square"
                      />
                      <path
                        d="M31.9073 35.0002C33.6144 35.0002 34.9982 33.6163 34.9982 31.9093C34.9982 30.2022 33.6144 28.8184 31.9073 28.8184C30.2003 28.8184 28.8164 30.2022 28.8164 31.9093C28.8164 33.6163 30.2003 35.0002 31.9073 35.0002Z"
                        stroke="#821317"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="square"
                      />
                      <path
                        d="M34.9982 1H11.8164V18H34.9982V1Z"
                        stroke="#821317"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="square"
                      />
                      <path
                        d="M11.8164 7.18164H34.9982"
                        stroke="#821317"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="square"
                      />
                    </svg>
                  </span>
                </div>
                <div className="">
                  <h2 className="text-[15px] 2xl:text-lg font-700 tracking-wide leading-4 mb-1">
                    Frete Grátis
                  </h2>
                  <p className="text-xs 2xl:text-sm text-qgray">
                    Frete grátis para <span className="font-semibold">Distrito Federal e Região.</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="item max-w-[280px] xl:max-w-[340px]">
              <div className="flex space-x-3 2xl:space-x-7 items-center">
                <div>
                  <Image src={iconeSofa} className="w-20 lg:w-28" alt="ícone sofá personaizável" />
                </div>
                <div className="">
                  <h2 className="text-[15px] 2xl:text-lg font-700 tracking-wide leading-4 mb-1">
                    Sob Medida
                  </h2>
                  <p className="text-xs 2xl:text-sm text-qgray">
                    O cliente pode escolher <span className="font-semibold">as medidas, a cor, e o material</span> de preferência.
                  </p>
                </div>
              </div>
            </div>
            <div className="item max-w-[280px] xl:max-w-[340px]">
              <div className="flex space-x-5 2xl:space-x-10 items-center">
                <div>
                  <span>
                    <svg
                      className=" xl:scale-125 2xl:scale-150"
                      width="32"
                      height="38"
                      viewBox="0 0 32 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.6654 18.667H9.33203V27.0003H22.6654V18.667Z"
                        stroke="#821317"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="square"
                      />
                      <path
                        d="M12.668 18.6663V13.6663C12.668 11.833 14.168 10.333 16.0013 10.333C17.8346 10.333 19.3346 11.833 19.3346 13.6663V18.6663"
                        stroke="#821317"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="square"
                      />
                      <path
                        d="M31 22C31 30.3333 24.3333 37 16 37C7.66667 37 1 30.3333 1 22V5.33333L16 2L31 5.33333V22Z"
                        stroke="#821317"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="square"
                      />
                    </svg>
                  </span>
                </div>
                <div className="">
                  <h2 className="text-[15px] 2xl:text-lg font-700 tracking-wide leading-4 mb-1">
                    Pagamento Seguro
                  </h2>
                  <p className="text-xs 2xl:text-sm text-qgray">
                    Método de pagamento 100% seguro, dividimos em <span className="font-semibold">até 10x Sem Juros.</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="item max-w-[280px] xl:max-w-[340px]">
              <div className="flex space-x-5 2xl:space-x-10 items-center">
                <div>
                  <span>
                    <svg
                      className=" xl:scale-125 2xl:scale-150"
                      width="32"
                      height="35"
                      viewBox="0 0 32 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 13H5.5C2.95 13 1 11.05 1 8.5V1H7"
                        stroke="#821317"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M25 13H26.5C29.05 13 31 11.05 31 8.5V1H25"
                        stroke="#821317"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M16 28V22"
                        stroke="#821317"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M16 22C11.05 22 7 17.95 7 13V1H25V13C25 17.95 20.95 22 16 22Z"
                        stroke="#821317"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="square"
                      />
                      <path
                        d="M25 34H7C7 30.7 9.7 28 13 28H19C22.3 28 25 30.7 25 34Z"
                        stroke="#821317"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="square"
                      />
                    </svg>
                  </span>
                </div>
                <div className="">
                  <h2 className="text-[15px] 2xl:text-lg font-700 tracking-wide leading-4 mb-1">
                    Qualidade de Excelência
                  </h2>
                  <p className="text-xs 2xl:text-sm text-qgray">
                    Produtos de alta qualidade com <span className="font-semibold">garantia de 1 ano.</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}
