"use client";
import logo from "@/assets/images/logo-impacto.jpg"
import paymentGetways from "@/assets/images/payment-getways.png"
import Image from "next/image";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

export default function Footer() {
const router = useRouter();

  return (
    <footer className="footer-section-wrapper bg-components print:hidden px-6">
      <div className="container-x block mx-auto max-w-[1200px]">
        <div className="w-full flex flex-col items-center mb-[50px]">
          {/* logo area */}
          <div className="my-8">
            <button onClick={() => router.push("/")}>
              <Image
                width="150"
                height="36"
                src={logo}
                alt="logo"
                className="rounded-lg"
              />
            </button>
          </div>
          <div className="w-full h-[1px] bg-[#E9E9E9]"></div>
        </div>
        <div className="md:flex justify-between mb-[50px]">
          <div className="md:w-[424px]  ml-0 w-full mb-10 lg:mb-0">
            <h2 className="font-500 text-[#2F2F2F] mb-5">Endereço</h2>
            <p className="text-[2F2F2F] text-[15px] w-full md:max-w-[247px] leading-[28px]">
              Visite nossa loja. Um ambiente familiar e confortável. Venha tomar um café.
            </p>

            <table className="mt-2">
              <tbody>
                <tr>
                  <td className="pr-2">
                    <MapPinIcon width={20} />
                  </td>
                  <td>
                    <p className="text-[2F2F2F] text-[14px] font-semibold w-[247px] ">
                      QNE 07 Lote 16 Loja 01
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="pr-2">
                  </td>
                  <td>
                    <p className="text-[2F2F2F] text-[14px] font-semibold w-[247px] ">
                      CEP: 72.125-070
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex-1 lg:flex">
            <div className="lg:w-1/3 w-full mb-10 lg:mb-0">
              <div className="mb-5">
                <h6 className="font-500 text-[#2F2F2F]">Feature</h6>
              </div>
              <div>
                <ul className="flex flex-col space-y-4 ">
                  <li>
                    <a href="#aboutUs">
                      <span className="text-[2F2F2F] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">
                        Sobre Nós
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#" >
                      <span className="text-[2F2F2F] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">
                        Mesas
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#bestSales">
                      <span className="text-[2F2F2F] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">
                        Mais Vendidos
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:w-1/3 lg:flex lg:flex-col items-center w-full mb-10 lg:mb-0 ">
              <div>
                <div className="mb-5">
                  <h6 className="text-[18] font-500 text-[#2F2F2F]">
                    General button
                  </h6>
                </div>
                <div>
                  <ul className="flex flex-col space-y-4 ">
                    <li>
                      <a href="https://www.instagram.com/impactomoveis_/" target="_blank">
                        <span className="text-[2F2F2F] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">
                          Blog
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/impactomoveisecolchoes/" target="_blank">
                        <span className="text-[2F2F2F] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">
                          Facebook
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 lg:flex lg:flex-col items-center w-full mb-10 lg:mb-0">
              <div>
                <div className="mb-5">
                  <h6 className="text-[18] font-500 text-[#2F2F2F]">Helpful</h6>
                </div>
                <div>
                  <ul className="flex flex-col space-y-4 ">
                    <li>
                      <button disabled>
                        <span className="text-[2F2F2F] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">
                          FAQ
                        </span>
                      </button>
                    </li>
                    <li>
                      <button disabled>
                        <span className="text-[2F2F2F] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">
                          Support
                        </span>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-bar border-t border-qgray-border lg:h-[82px] lg:flex justify-between items-center">
          <div className="flex lg:space-x-5 justify-between items-center mb-3">
            <span className="sm:text-base text-[10px] text-qgray font-300">
              ©2025 Impacto Móveis - Todos os direitos reservados
            </span>
          </div>
          <div className="">
            <a href="#">
              <Image
                width="318"
                height="28"
                src={paymentGetways}
                alt="payment-getways"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
