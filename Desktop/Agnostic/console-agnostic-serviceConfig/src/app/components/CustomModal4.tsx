// CustomModal4.js

import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import React, { useRef, Fragment, useState } from "react";
import { AiOutlineClose, AiOutlineArrowLeft } from "react-icons/ai";

import lastStep from "../../assets/laststep.png";

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onBack: () => void;
  onNext: () => void;
  data: any;
}

export const CustomModal4: React.FC<ModalProps> = ({
  isOpen,
  onRequestClose,
  onBack,
  onNext,
  data,
}) => {
  const closeModal = () => {
    onRequestClose();
  };

  const initialFocusRef = useRef<HTMLButtonElement | null>(null);

  const handleNextClick = () => {
    onNext();
  };

  const handleBackClick = () => {
    onBack();
  };
  console.log(data);
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50"
          onClose={closeModal}
          initialFocus={initialFocusRef}
        >
          <div className="fixed inset-0 flex items-center justify-center" />

          <div className="fixed inset-0 flex items-center justify-center">
            <div className="absolute inset-0 bg-white">
              <div className="w-screen h-screen relative flex">
                <div className="w-3/4 h-full bg-white p-4 flex flex-col overflow-y-auto">
                  <div className="flex flex-col h-full">
                    <div className="relative flex items-center mt-16 ml-20">
                      <button
                        onClick={closeModal}
                        className="text-gray-500 hover:text-gray-700 mr-7"
                      >
                        <AiOutlineClose size={30} />
                      </button>
                      <p className="text-gray-500 font-inter font-normal text-2xl">
                        Criar um projeto (Passo 3 de 3)
                      </p>
                    </div>
                    <div className="relative flex items-start mt-12 ml-36 flex-col">
                      <p className="text-gray-800 font-inter text-2xl font-medium leading-normal">
                        Revisão do Projeto
                      </p>
                      <div className="flex flex-col mt-12 gap-6">
                        <p className="text-gray-500 font-inter text-xl font-normal leading-normal">
                          Nome:{" "}
                          <p className="text-gray-500 font-inter text-xl font-normal leading-normal ml-5 mt-2">
                            <span className="inline-block h-2 w-2 bg-orange-400 rounded-full mr-2"></span>
                            {data.nomeProjeto}
                          </p>
                        </p>
                        <p className="text-gray-500 font-inter text-xl font-normal leading-normal">
                          Domínios:{" "}
                          <p className="text-gray-500 font-inter text-xl font-normal leading-normal ml-5 mt-2">
                            <span className="inline-block h-2 w-2 bg-orange-400 rounded-full mr-2"></span>
                            {data.domains}
                          </p>
                        </p>
                        <p className="text-gray-500 font-inter text-xl font-normal leading-normal">
                          Facebook API Conversions:{" "}
                          <p className="text-gray-500 font-inter text-xl font-normal leading-normal ml-5 mt-2">
                            <span className="inline-block h-2 w-2 bg-orange-400 rounded-full mr-2"></span>
                            {data.facebookId}
                          </p>
                        </p>
                        <p className="text-gray-500 font-inter text-xl font-normal leading-normal">
                          Google Analytics / Measurement ID:{" "}
                          <p className="text-gray-500 font-inter text-xl font-normal leading-normal ml-5 mt-2">
                            <span className="inline-block h-2 w-2 bg-orange-400 rounded-full mr-2"></span>
                            {data.googleId}
                          </p>
                        </p>
                        <p className="text-gray-500 font-inter text-xl font-normal leading-normal">
                          Google Cloud Setup:{" "}
                          <p className="text-gray-500 font-inter text-xl font-normal leading-normal ml-5 mt-2">
                            <span className="inline-block h-2 w-2 bg-orange-400 rounded-full mr-2"></span>
                            {data.accessKey}
                          </p>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-around  mr-48 mb-24">
                    <button
                      onClick={onBack} // Botão para voltar para a Modal2
                      className="text-gray-500 hover:text-gray-700 font-inter text-lg font-medium leading-normal"
                    >
                      Editar
                    </button>
                    <button
                      className="w-48 h-12 flex-shrink-0 bg-[#F66020] text-white rounded-lg text-lg font-medium hover:bg-orange-500"
                      onClick={onNext} // Botão para avançar para a Modal4
                    >
                      Continuar
                    </button>
                  </div>
                </div>
                {/* Lado Direito (Imagem) */}
                <div className="w-1/2 h-full relative object-contain">
                  <Image
                    src={lastStep}
                    alt="Descrição da imagem"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
