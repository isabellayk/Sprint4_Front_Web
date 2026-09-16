import React from 'react'

function Hero() {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-16 px-8 md:pt-32 md:pb-16 pt-28 overflow-hidden min-h-0 md:min-h-screen">
     
      <img
        src="./src/assets/pasta-top.png"
        alt="Imagem hero pasta de arquivos"
        className="hidden md:block absolute pointer-events-none z-10 top-[25%] xl:top-[30%] -left-5 w-[160px] xl:w-[220px] h-auto"
      />
      <img
        src="./src/assets/pasta-mid.png"
        alt="Imagem hero pasta de arquivos"
        className="hidden md:block absolute pointer-events-none z-10 top-[58%] xl:top-[55%] -left-[10px] w-[180px] xl:w-[250px] h-auto"
      />
      <img
        src="./src/assets/pasta-bot.png"
        alt="Imagem hero pasta de arquivos"
        className="hidden md:block absolute pointer-events-none z-10 bottom-[2%] left-[10%] xl:left-[18%] w-[150px] xl:w-[200px] h-auto"
      />

   
      <div className="text-center max-w-[850px] w-full z-20 flex flex-col items-center">
        <p className="font-sans text-[#EAE9EE] text-xl mb-3">
          Diga adeus às fotos ilegíveis de lousas e slides.
        </p>

        <h1 className="font-bebas text-[#EAE9EE] text-[clamp(2.8rem,5vw,4.8rem)] leading-[1.05] font-normal mb-5">
          O registro acadêmico <br />
          sem ruídos, borrões ou desorganização.
        </h1>

        <p className="font-sans text-[#EAE9EE] text-base md:text-lg max-w-[650px] leading-snug mb-8">
          O Modo Estudante guia sua captura em tempo real e organiza suas matérias automaticamente com Inteligência Artificial.
        </p>

        <a
          href="#solucao"
          className="font-sans bg-[#EAE9EE] text-[#0A1123] font-bold text-lg px-8 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:bg-white inline-block"
        >
          Descubra a Solução
        </a>
      </div>

      <img
        src="./src/assets/celular-hand.png"
        alt="Imagem hero mão segurando celular"
        className="hidden md:block absolute pointer-events-none z-10 bottom-0 right-0 w-[240px] xl:w-[320px] h-auto"
      />
    </section>
    </>
  )
}

export default Hero
