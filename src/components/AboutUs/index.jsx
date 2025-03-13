'use client';

export default function AboutUs() {
  return (
    <div id="aboutUs" className="flex flex-col items-center gap-8 md:gap-18 xl:px-12">
      <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold">- Sobre a Impacto -</h2>
      <div className='w-full flex flex-col lg:flex-row justify-center gap-20'>
        <div className="w-full lg:w-1/2">
          <p className="text-lg mb-6 md:mb-10 leading-8">
            Há <span className="font-semibold text-xl">mais de 30 anos no mercado</span>, a Impacto Móveis se destaca pela <span className="font-semibold text-xl">qualidade, sofisticação e compromisso</span> com o conforto dos nossos clientes. Com um histórico de <span className="font-semibold text-xl">mais de 1.000 vendas</span> bem-sucedidas e uma alta qualificação no Google, garantimos não apenas produtos excepcionais, mas também uma experiência de compra que supera expectativas.
          </p>
          <p className="text-lg mb-6 md:mb-10 leading-8">
            Nosso compromisso vai além de oferecer móveis e colchões de alto padrão. Trabalhamos exclusivamente com fornecedores certificados, que utilizam <span className="font-semibold text-xl">madeira de reflorestamento</span> e seguem rigorosos <span className="font-semibold text-xl">padrões ambientais</span>. Assim, garantimos que cada peça que chega até você carrega não só <span className="font-semibold text-xl">durabilidade e elegância</span>, mas também a responsabilidade de um <span className="font-semibold text-xl">consumo consciente</span>.
          </p>
          <p className="text-lg mb-6 md:mb-10 leading-8">
            Aqui, a satisfação do cliente é a nossa prioridade. Por isso, oferecemos <span className="font-semibold text-xl">garantia de qualidade</span> e um atendimento dedicado para ajudar você a transformar sua casa com móveis que unem <span className="font-semibold text-xl">design, conforto e sustentabilidade</span>.
          </p>
        </div>
        <div className="w-full lg:w-1/2 h-[500px] ">
          <iframe className="w-full h-full" allowFullScreen={false} src="https://www.youtube.com/embed/oXOsJcUJTD8" title="Apresentação da loja e catálogo - Impacto Móveis" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
        </div>
      </div>
    </div>
  );
}
