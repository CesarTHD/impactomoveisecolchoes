// CustomModal2.tsx
import { Dialog, Transition } from "@headlessui/react";
import React, { useRef, Fragment } from "react";
import Image from "next/image";
import formsimage2 from "../../assets/formsimage2.png"; // Importe a imagem da segunda modal
import { AiOutlineCloseCircle, AiOutlineClose } from "react-icons/ai";
import midStep from "../../assets/midStep.png";
import { useForm } from "react-hook-form";

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onNext: (data: any) => void; // Modifique a tipagem para aceitar um argumento
  onBack: () => void;
  data: any;
}

export const CustomModal2: React.FC<ModalProps> = ({
  isOpen,
  onRequestClose,
  onNext,
  onBack,
}) => {
  const { register, handleSubmit } = useForm();

  const closeModal = () => {
    onRequestClose();
  };
  const onSubmit = (data: any) => {
    onNext(data);
  };
  const handleBackClick = () => {
    onBack();
  };

  const initialFocusRef = useRef<HTMLButtonElement | null>(null);

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

          <div className="fixed inset-0 bg-white">
            <div className="w-screen h-screen relative flex">
              <div className="w-3/4 h-full bg-white p-4 flex items-center">
                <div className="absolute top-0 flex items-center mt-20 ml-20">
                  <button
                    onClick={closeModal}
                    className="text-gray-500 hover:text-gray-700 mr-6"
                  >
                    <AiOutlineClose size={30} />
                  </button>
                  <p className="text-gray-500 font-inter font-normal text-2xl">
                    Criar um projeto (Passo 2 de 3)
                  </p>
                </div>

                {/* Container para a label e os botões */}
                <div className="flex flex-col ml-32 mt-[-150px]">
                  <label
                    htmlFor="idProjeto"
                    className="text-gray-500 font-inter font-normal text-lg mt-4 ml-1"
                  >
                    Adicione os domínios referentes aos sites e páginas
                    referentes a este projeto.
                    <br /> Essas informações são aplicáveis a website e ajudam a
                    relacionar usuários que <br />
                    navegaram em suas a páginas ao seu aplicativo, por exemplo.
                  </label>

                  <label
                    htmlFor="idProjeto"
                    className="text-gray-800 font-inter font-normal text-lg mb-2 mt-8"
                  >
                    Domínios
                  </label>
                  <form
                    className="flex flex-col"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <input
                      {...register("domains")}
                      type="text"
                      id="domains"
                      placeholder="*.seudominio.com.br, *.meudominio2.com"
                      className="outline-none w-[47rem] h-16 flex-shrink-0 border border-solid border-gray-300 rounded-lg px-4 py-2  focus:ring-orange-600 focus:border-orange-600 hover:border-orange-400 text-[#F66020] font-inter font-medium text-xl"
                    />
                    <label
                      htmlFor="idProjeto"
                      className="text-gray-500 font-inter font-normal text-lg mt-4 ml-1"
                    >
                      Insira os domínios separados por vírgula ou use caracteres
                      <br />
                      coringas, exemplo: *.pilothis.com, *.lovyca.com
                    </label>
                    <div className="flex mt-36 space-x-16 ml-6">
                      <button
                        className="text-lg text-[#F66020] hover:text-orange-500 font-medium mr-24"
                        onClick={handleBackClick} // Chame handleBackClick ao clicar no botão "Voltar"
                      >
                        Anterior
                      </button>
                      <button
                        className="w-48 h-12 flex-shrink-0 bg-[#F66020] text-white rounded-lg text-lg font-medium hover:bg-orange-500"
                        type="submit"
                      >
                        Continuar
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              {/* Lado Direito (Imagem) */}
              <div className="w-1/2 h-full relative">
                <Image
                  src={midStep}
                  alt="Descrição da imagem"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
