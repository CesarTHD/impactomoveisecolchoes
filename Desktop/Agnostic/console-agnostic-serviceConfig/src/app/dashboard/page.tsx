import React from 'react'
import Image from 'next/image'
import backgroundImage from '../../assets/Rectangle.png'
import upperRightImage from '../../assets/catalogo_flow 1.png'

export default function Dash() {
  return (
    <div className="relative flex">
      <div className="absolute inset-0 w-full h-96">
        <Image
          src={backgroundImage}
          alt="Imagem de Fundo"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="absolute top-11 left-4 md:left-28 max-w-[calc(100%-28rem)]">
        <h1 className="text-white font-inter font-semibold text-5xl leading-[40px] mb-2">
          O maior catálogo de Eventos
        </h1>
        <h1 className="text-white font-inter font-semibold text-5xl leading-[40px] mb-3">
          Analíticos do mundo!
        </h1>
        <p className="text-white font-inter font-normal text-base leading-[25px] mb-4">
          Crie eventos personalizados, sem limites, para o seu <br /> negócio ou
          utilize os modelos da comunidade para acelerar <br />a adoção
          aprendendo com quem já fez.
        </p>

        <div className="flex space-x-5">
          <button className="bg-[#FF6F31] w-32 h-12 flex-shrink-0 border border-white rounded-lg bg-FF6F31 text-white font-inter font-semibold text-base">
            Criar Evento
          </button>
          <button className="bg-white text-[#F66020] px-3 py-1 rounded-lg bg-FF6F31  w-40 h-12 font-inter font-semibold text-base">
            Explorar catálogo
          </button>
        </div>
      </div>

      <div className="absolute top-11 right-4 md:right-64">
        <Image
          src={upperRightImage}
          alt="Segunda Imagem"
          width={272}
          height={290}
        />
      </div>

      <div className="bg-white p-8 absolute top-[26rem] rounded-md w-[101rem] ml-7 h-auto">
        <label className="inline-flex items-center space-x-2">
          <input
            type="checkbox"
            className="w-4 h-4 flex-shrink-0 border-2 border-gray-300 rounded-md checked:bg-gray-900 checked:border-transparent focus:ring-gray-300 focus:ring-offset-1 focus:ring-opacity-50"
          />
          <span className="text-[#0000008a] font-inter text-xs font-normal leading-[33px] mt-1">
            Meus Ativos
          </span>
        </label>
        <div className="w-[199px] h-[2px] bg-gray-300 mt-2 -ml-2"></div>
        <span className="text-[#0000008a] font-inter text-xs font-normal leading-[33px] mt-2">
          TIPOS
        </span>
        <ul className="">
          <li className="flex items-center text-black text-sm space-x-1">
            Eventos <span className="text-[#0000008a] ml-24">(200)</span>
          </li>
          <li className="flex items-center text-black text-sm space-x-1">
            Maps <span className="text-[#0000008a]">(200)</span>
          </li>
          <li className="flex items-center text-black text-sm space-x-1">
            Destinos <span className="text-[#0000008a]">(200)</span>
          </li>
          <li className="flex items-center text-black text-sm space-x-1">
            Métricas <span className="text-[#0000008a]">(200)</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
