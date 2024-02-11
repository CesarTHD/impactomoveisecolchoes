import { Dialog, Transition } from "@headlessui/react";
import React, { useState, useRef, Fragment } from "react";
import Image from "next/image";
import formsimage1 from "../../assets/formsimage.png";
import { AiOutlineCloseCircle, AiOutlineClose } from "react-icons/ai";
import { useForm } from "react-hook-form";

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onNext: (data: any) => void;
  data: any;
}

export const CustomModal1: React.FC<ModalProps> = ({
  isOpen,
  onRequestClose,
  onNext,
}) => {
  const { register, handleSubmit } = useForm();
  const closeModal = () => {
    onRequestClose();
  };

  const initialFocusRef = useRef<HTMLButtonElement | null>(null);

  const onSubmit = (data: any) => {
    onNext(data);
  };
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

          <Transition.Child
            as={Fragment}
            enter="transform transition-transform duration-500 ease-in-out"
            enterFrom="transform translate-x-full"
            enterTo="transform translate-x-0"
            leave="transform transition-transform duration-500 ease-in-out"
            leaveFrom="transform translate-x-0"
            leaveTo="transform translate-x-full"
          >
            <div className="fixed inset-0 flex items-center justify-center">
              <div className="absolute inset-0 bg-white">
                <div className="w-screen h-screen relative flex">
                  {/* Lado Esquerdo (Formulário) */}
                  <div className="w-3/4 h-full bg-white p-4 flex items-center">
                    <div className="absolute top-0 flex items-center mt-20 ml-20">
                      <button
                        onClick={closeModal}
                        className="text-gray-500 hover:text-gray-700 mr-7"
                      >
                        <AiOutlineClose size={30} />
                      </button>
                      <p className="text-gray-500 font-inter font-normal text-2xl">
                        Criar um projeto (Passo 1 de 3)
                      </p>
                    </div>
                    <div className="absolute top-0 flex flex-col items-start mt-48 ml-[8.8rem]">
                      <p className="text-black font-inter font-medium text-4xl mt-4">
                        Vamos começar nomeando o projeto.
                      </p>
                      <p className="text-gray-500 font-inter font-light text-2xl mt-4">
                        Um projeto compartilha regras de destino e a base de
                        dados.
                      </p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="mt-16 ml-36">
                        <div className="flex flex-col mt-14">
                          <label
                            htmlFor="nomeProjeto"
                            className="text-gray-800 font-inter font-medium text-lg mb-2"
                          >
                            Nome do projeto
                          </label>
                          <input
                            {...register("nomeProjeto")}
                            type="text"
                            id="nomeProjeto"
                            className="outline-none w-[47rem] h-16 flex-shrink-0 border border-solid border-gray-300 rounded-lg px-4 py-2  focus:ring-orange-600 focus:border-orange-600 hover:border-orange-400 text-[#F66020] font-inter font-medium text-xl"
                          />
                        </div>
                        <div className="mt-6">
                          <div className="flex flex-col">
                            <label
                              htmlFor="idProjeto"
                              className="text-gray-800 font-inter font-medium text-lg mb-2"
                            >
                              ID do Projeto
                            </label>
                            <input
                              {...register("idProjeto")}
                              type="text"
                              id="idProjeto"
                              className="outline-none w-[47rem] h-16 flex-shrink-0 border border-solid border-gray-300 rounded-lg px-4 py-2  focus:ring-orange-600 focus:border-orange-600 hover:border-orange-400 text-[#F66020] font-inter font-medium text-xl"
                            />
                            <label
                              htmlFor="idProjeto"
                              className="text-gray-500 font-inter font-normal text-lg mt-4 ml-1"
                            >
                              O identificador exclusivo global do seu projeto
                              usado nas URLs dos serviços.
                              <br /> Não é possível alterar o ID do projeto após
                              a criação.
                            </label>
                            <button
                              type="submit"
                              className="w-48 h-12 flex-shrink-0 bg-[#F66020] text-white rounded-lg text-lg font-medium hover:bg-orange-500 mt-10"
                            >
                              Continuar
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  {/* Lado Direito (Imagem) */}
                  <div className="w-1/2 h-full relative">
                    <Image
                      src={formsimage1}
                      alt="Descrição da imagem"
                      layout="fill" // Preenche a div pai
                      objectFit="cover" // Redimensiona a imagem para cobrir todo o espaço sem dar zoom
                    />
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
};
