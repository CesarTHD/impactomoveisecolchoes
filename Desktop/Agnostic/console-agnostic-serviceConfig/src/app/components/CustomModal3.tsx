// CustomModal3.js

import { Dialog, Transition } from "@headlessui/react";
import React, { useRef, Fragment, useState } from "react";
import { AiOutlineClose, AiOutlineArrowLeft } from "react-icons/ai";
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";
import { IoIosArrowRoundBack } from "react-icons/io";
import midStep from "../../assets/midStep.png";
import Image from "next/image";
import { FormFacebook } from "../components/FormFacebook/FormFacebook";
import { FormGoogleAnalytics } from "../components/FormGoogle/FormGoogle";
import { UseFormReturn } from "react-hook-form";

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onBack: () => void;
  onNext: (data: any) => void;
  data: any;
}

export const CustomModal3: React.FC<ModalProps> = ({
  isOpen,
  onRequestClose,
  onBack,
  onNext,
}) => {
  const closeModal = () => {
    onRequestClose();
  };

  const initialFocusRef = useRef<HTMLButtonElement | null>(null);
  const [showFormGoogle, setShowFormGoogle] = useState(false);
  const [showFormFacebook, setShowFormFacebook] = useState(false);
  const [formFacebookValues, setFormFacebookValues] = useState({});
  const [formGoogleValues, setFormGoogleValues] = useState({});
  const formFacebookRef = useRef<UseFormReturn<FormData> | null>(null);
  const formGoogleRef = useRef<UseFormReturn<FormData> | null>(null);

  const onNextForms = async () => {
    let formDataFacebook = {};
    let formDataGoogle = {};

    if (formFacebookRef.current) {
      formDataFacebook = await new Promise((resolve) => {
        formFacebookRef.current!.handleSubmit((data) => {
          resolve(data);
        })();
      });
    }

    if (formGoogleRef.current) {
      formDataGoogle = await new Promise((resolve) => {
        formGoogleRef.current!.handleSubmit((data) => {
          resolve(data);
        })();
      });
    }

    const combinedData = { ...formDataFacebook, ...formDataGoogle };
    onNext(combinedData);
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
                        Criar um projeto (Passo 2 de 3)
                      </p>
                    </div>
                    <div className="relative flex items-start mt-24 ml-32 flex-col gap-11 ">
                      <div className="flex items-center flex-col">
                        <div className="flex items-center justify-between w-full">
                          <p className="text-gray-500 font-inter text-xl font-normal leading-normal">
                            Adicionar API de Conversões para Facebook Ads
                          </p>
                          <button
                            onClick={() =>
                              setShowFormFacebook(!showFormFacebook)
                            }
                          >
                            {showFormFacebook ? (
                              <HiChevronUp className="ml-6 text-black font-bold w-5 h-5 flex-shrink-0" />
                            ) : (
                              <HiChevronDown className="ml-6 text-black font-bold w-5 h-5 flex-shrink-0" />
                            )}
                          </button>
                        </div>
                        {showFormFacebook && (
                          <FormFacebook
                            setFormRef={(ref) => {
                              formFacebookRef.current = ref;
                            }}
                          />
                        )}
                      </div>
                      <div className="flex items-center flex-col">
                        <div className="flex items-center justify-between w-full">
                          <p className="text-gray-500 font-inter text-xl font-normal leading-normal">
                            Adicionar Google Analytics / Measurement ID
                          </p>
                          <button
                            onClick={() => setShowFormGoogle(!showFormGoogle)}
                          >
                            {showFormGoogle ? (
                              <HiChevronUp className="ml-6 text-black font-bold w-5 h-5 flex-shrink-0" />
                            ) : (
                              <HiChevronDown className="ml-14 text-black font-bold w-5 h-5 flex-shrink-0" />
                            )}{" "}
                          </button>
                        </div>
                        {showFormGoogle && (
                          <FormGoogleAnalytics
                            setFormRef={(ref) => {
                              formGoogleRef.current = ref;
                            }}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-around mt-[200px] mr-48 mb-36">
                    <button
                      onClick={onBack} // Botão para voltar para a Modal2
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <IoIosArrowRoundBack className="w-10 h-10" />
                    </button>
                    <button className="text-gray-500 hover:text-gray-700 font-inter text-lg font-medium leading-normal ml-10">
                      Pular
                    </button>
                    <button
                      className="w-48 h-12 flex-shrink-0 bg-[#F66020] text-white rounded-lg text-lg font-medium hover:bg-orange-500"
                      onClick={onNextForms}
                    >
                      Continuar
                    </button>
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
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
