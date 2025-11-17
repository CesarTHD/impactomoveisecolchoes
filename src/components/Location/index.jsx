'use client';

export default function Location() {
  return (
    <>
      <div className="flex flex-col items-center">
        <h2 className="text-3xl lg:text-3xl xl:text-4xl font-semibold my-4">Venha conferir de perto</h2>
        <div className="flex gap-2">
          📍
          <p className="text-sm">QNE 07 Lote 16 Loja 01 CEP: 72.125-070</p>
        </div>
        <p className="text-sm mb-12">Segunda a Sábado: 9:00 - 18:30</p>
        <iframe className="w-full h-[600px]" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d61421.4873076636!2d-48.064628!3d-15.8122326!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a333c9615f217%3A0x707a7ba158bd231b!2sImpacto%20M%C3%B3veis%20e%20Colch%C3%B5es%20-%20Taguatinga!5e0!3m2!1spt-BR!2sbr!4v1741620431244!5m2!1spt-BR!2sbr" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </>
  );
}
