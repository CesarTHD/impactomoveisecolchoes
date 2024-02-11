import React from 'react'
import Image from 'next/image'

// Importe o seu GIF da pasta de assets
import myLoadingGif from '../assets/Rolling-1s-200px.gif'

export default function Loading() {
  // Renderize o GIF no lugar do texto "Loading"
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <Image src={myLoadingGif} alt="Carregando..." />
    </div>
  )
}
