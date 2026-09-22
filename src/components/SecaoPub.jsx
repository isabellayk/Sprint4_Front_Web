import React from 'react'

function SecaoPub() {
  return (
    <>
      
        <section className="w-full bg-[#0A1123] relative overflow-hidden py-12 px-6 md:px-12" id="publico-alvo">
  <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row justify-between items-stretch lg:items-center gap-12 lg:gap-[3rem]">


    <div className="w-full lg:flex-1 lg:max-w-[680px] text-[#EAE9EE]">
      <h2 className="font-bebas text-[clamp(3.5rem,6vw,5rem)] tracking-[2px] leading-none mb-8 text-[#EAE9EE]">
        PÚBLICO-ALVO
      </h2>


      <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-[1.5rem] mb-10">
        <h3 className="font-bebas text-[1.8rem] sm:text-[2rem] leading-none text-[#EAE9EE] tracking-[1px] whitespace-nowrap [writing-mode:horizontal-tb] sm:[writing-mode:vertical-rl] transform-none sm:rotate-180">
          QUEM SÃO?
        </h3>
        <p className="font-sans text-[1.05rem] leading-[1.5] opacity-95">
          Estudantes do ensino médio, pré-vestibulandos, universitários e alunos de cursos técnicos 
          que dependem de registros visuais de lousas, cadernos e apresentações para o seu fluxo diário de estudos.
        </p>
      </div>

  
      <div className="text-left sm:text-right">
        <h3 className="font-bebas text-[2rem] sm:text-[2.5rem] leading-[1.1] mb-4 tracking-[1px]">
          POR QUE É RELEVANTE?
        </h3>
        <p className="mb-4 font-sans text-[1rem] leading-[1.5] opacity-95">
          A solução elimina a frustração causada pela tentativa de estudar por meio de fotos borradas, escuras 
          ou de baixa qualidade, evitando o problema de conteúdo perdido. Além disso, proporciona economia 
          de tempo ao reduzir significativamente o tempo gasto procurando anotações na galeria de fotos do celular.
        </p>
        <p className="mb-4 font-sans text-[1rem] leading-[1.5] opacity-95">
          Por fim, contribui para o desenvolvimento de bons hábitos de estudo, incentivando os estudantes a registrar 
          imagens de melhor qualidade por meio de um design educativo com balões informativos.
        </p>
      </div>
    </div>

   
    
    <div className="w-full lg:w-[350px] shrink-0 flex flex-row lg:flex-col justify-center lg:items-center flex-wrap gap-4 lg:gap-0 mt-6 lg:mt-0">
    
  
    <img 
        src="./src/assets/pasta-top2.png" 
        alt="Imagem pasta de arquivos" 
        className="w-full max-w-[180px] lg:max-w-[220px] h-auto object-contain relative -rotate-6 z-3" 
    />
    
    <img 
        src="./src/assets/pasta-mid2.png" 
        alt="Imagem pasta de arquivos" 
        className="w-full max-w-[180px] lg:max-w-[220px] h-auto object-contain relative rotate-3 lg:-mt-[40px] lg:ml-[20px] z-2" 
    />
    
    <img 
        src="./src/assets/pasta-bot2.png" 
        alt="Imagem pasta de arquivos" 
        className="w-full max-w-[180px] lg:max-w-[220px] h-auto object-contain relative -rotate-3 lg:-mt-[30px] lg:-ml-[20px] z-1" 
    />

    </div>

  </div>
</section>

    </>
  )
}

export default SecaoPub
