"use client";
import { AgnoContext } from "@/context/AgnoContext";
import { useContext, useState } from "react";
import Image from "next/image";
import information from "../../../assets/InformationCircle.png";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { CustomModal1 } from "../../components/CustomModal1";
import { CustomModal2 } from "../../components/CustomModal2";
import { CustomModal3 } from "../../components/CustomModal3";
import { CustomModal4 } from "../../components/CustomModal4";
export default function Chart() {
  const [formValues, setFormValues] = useState({});
  const { user } = useContext(AgnoContext);
  const destinos = [
    { nome: "Destino 1", tamanho: "4 destinos" },
    { nome: "Destino 2", tamanho: "2 destinos" },
    { nome: "Destino 3", tamanho: "7 destinos" },
    { nome: "Destino 3", tamanho: "10 destinos" },
    { nome: "Destino 5", tamanho: "10 destinos" },
    { nome: "Destino 5", tamanho: "10 destinos" },
  ];

  function getRandomColor() {
    const colors = ["bg-purple-300", "bg-indigo-300"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  const [currentModal, setCurrentModal] = useState(0);

  const goToNextModal = (newValues: any) => {
    setFormValues((prevValues) => ({ ...prevValues, ...newValues }));

    if (currentModal < 4) {
      setCurrentModal(currentModal + 1);
    } else {
      setCurrentModal(0);
    }
  };
  const closeModal = () => {
    setCurrentModal(0);
  };

  return (
    <>
      <div className="relative bg-white h-screen">
        <div className="absolute inset-0 w-full h-96"></div>

        <div className="absolute top-11 left-4 md:left-28 max-w-[calc(100%-28rem)]">
          <h1 className="text-black font-inter font-semibold text-5xl leading-[40px] mb-2">
            Olá, {user?.firstName}
          </h1>

          <div className="bg-[#BAE6FD] p-4 rounded-md mt-20 flex items-center space-x-4 w-[1181px] h-28 relative">
            <button className="absolute top-2 right-2 text-[#000000db] mr-2">
              X
            </button>
            <div className="ml-2 mr-4">
              <Image
                src={information}
                alt="Imagem"
                layout="cover"
                width={60}
                height={60}
              />
            </div>

            <div className="flex-col">
              <h2 className="text-[#000000db] text-base font-semibold ml-10 mb-1">
                Um título para uma notificação informativa por aqui
              </h2>
              <p className="text-[#000000db] text-base ml-10">
                Uma mensagem pode ser colocada aqui para informar uma informação
                necessária para o usuário que também <br />
                pode ter um link como uma ação.
              </p>
            </div>
            <div>
              <button className="mt-3 bg-[#38BDF8] text-white py-2 px-4 rounded-md ml-2 w-[139px] h-[45px] flex-shrink-0">
                Clique aqui
              </button>
            </div>
          </div>
          <div>
            <p className="text-black font-inter font-semibold text-2xl leading-[40px] mt-8">
              Projects recents
            </p>
          </div>
          <div className="grid grid-cols-3 gap-5 mt-5">
            <button
              onClick={() => setCurrentModal(1)}
              className="w-80 h-32 bg-white rounded-lg shadow-md flex justify-center items-center border border-gray-200 hover:bg-gray-100 pr-8"
            >
              <div className="flex items-center space-x-8">
                <AiOutlinePlusCircle className="w-8 h-8 text-orange-500 right-12" />
                <div className="w-px h-20 bg-gray-200"></div>
                <p className="text-orange-500 font-inter text-lg font-semibold leading-6">
                  Adicionar projeto
                </p>
              </div>
            </button>

            {currentModal === 1 && (
              <CustomModal1
                data={formValues}
                isOpen={currentModal === 1}
                onRequestClose={closeModal}
                onNext={(data) => {
                  goToNextModal(data);
                }}
              />
            )}

            {currentModal === 2 && (
              <CustomModal2
                data={formValues}
                onBack={() => setCurrentModal(1)}
                isOpen={currentModal === 2}
                onRequestClose={closeModal}
                onNext={(data) => {
                  goToNextModal(data);
                }}
              />
            )}

            {currentModal === 3 && (
              <CustomModal3
                data={formValues}
                isOpen={currentModal === 3}
                onRequestClose={closeModal}
                onBack={() => setCurrentModal(2)}
                onNext={(data) => {
                  goToNextModal(data);
                }}
              />
            )}

            {currentModal === 4 && (
              <CustomModal4
                data={formValues}
                isOpen={currentModal === 4}
                onRequestClose={closeModal}
                onBack={() => setCurrentModal(3)}
                onNext={() => {
                  const newValues = {
                    /* gather form values */
                  };
                }}
              />
            )}

            {destinos.map((destino, index) => (
              <div
                key={index}
                className="w-80 h-32 p-4 bg-white rounded-lg shadow-md flex justify-center border border-gray-200 relative"
              >
                <div
                  className={`absolute top-0 left-0 w-3/12 h-full rounded-l-lg flex items-center ${getRandomColor()}`}
                >
                  <p className="text-white font-inter text-lg font-semibold leading-6 flex items-center ml-6">
                    {`P${(index + 1).toString().padStart(2, "0")}`}
                  </p>
                </div>
                <div className="flex items-center space-x-2 h-full">
                  <div className="flex-col items-center flex-grow">
                    <p className="text-black font-inter text-lg font-semibold leading-6">
                      {destino.nome}
                    </p>
                    <p className="text-gray-600 font-inter text-base leading-6 mt-2">
                      {destino.tamanho}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
