import { useRef } from 'react';


function SecaoSolucao(){
const carouselRef = useRef(null);

  const handleScroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 370;
      carouselRef.current.scrollBy({
        left: direction === 'next' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
        });
    }
  };

  return (
    <>
      
    <section className="py-16 px-6 md:px-16 text-[#EAE9EE]" id="secao-solucao">
  <div className="max-w-7xl mx-auto flex flex-col min-[993px]:flex-row gap-12 items-start justify-between">
    
    <div className="w-full min-[993px]:w-1/3 flex flex-col gap-6 flex-none">
      <h2 className="font-bebas text-5xl md:text-6xl leading-none">
        A NOSSA<br />SOLUÇÃO
      </h2>
      <p className="font-sans text-base md:text-lg leading-relaxed text-[#EAE9EE]/90">
        O UltraFrame é uma solução inteligente integrada ao ecossistema dos smartphones Jovi.
        O sistema une hardware, Visão Computacional e Inteligência Artificial para transformar
        a câmera do celular em uma assistente de estudos.
      </p>

      <div className="flex gap-4 mt-2">
        <button
          onClick={() => handleScroll('prev')}
          className="w-12 h-12 rounded-full border border-[#EAE9EE] flex items-center justify-center text-xl hover:bg-[#EAE9EE] hover:text-[#0A1123] transition-colors duration-200 cursor-pointer"
          aria-label="Anterior"
        >
          &#10094;
        </button>
        <button
          onClick={() => handleScroll('next')}
          className="w-12 h-12 rounded-full border border-[#EAE9EE] flex items-center justify-center text-xl hover:bg-[#EAE9EE] hover:text-[#0A1123] transition-colors duration-200 cursor-pointer"
          aria-label="Próximo"
        >
          &#10095;
        </button>
      </div>
    </div>

    <div className="w-full min-[993px]:w-2/3 overflow-hidden">
      <div
        ref={carouselRef}
        className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar py-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {/* Card 1 */}
        <article className="flex-[0_0_290px] min-[993px]:flex-[0_0_340px] bg-[#EAE9EE] rounded-[35px] p-[1rem] snap-start shadow-[0_10px_25px_rgba(0,0,0,0.25)] flex flex-col hover:-translate-y-1 transition-transform duration-200">
          <div className="w-full h-[230px] overflow-hidden mb-[1.2rem]">
            <img
              src="./src/assets/card1.png"
              alt="Guiamento em Tempo Real"
              className="w-full h-full object-cover rounded-[35px]"
            />
          </div>
          <div className="pt-2 px-3 pb-4 text-[#0A1123]">
            <h3 className="font-sans text-[1.4rem] font-bold mb-[0.8rem]">
              Guiamento em Tempo Real
            </h3>
            <p className="font-sans text-[0.95rem] text-[#333] leading-[1.4]">
              Balões informativos não intrusivos analisam o ambiente através dos 
              sensores do aparelho e orientam o aluno a ajustar foco, iluminação 
              e modo de captura antes do clique.
            </p>
          </div>
        </article>

        {/* Card 2 */}
        <article className="flex-[0_0_290px] min-[993px]:flex-[0_0_340px] bg-[#EAE9EE] rounded-[35px] p-[1rem] snap-start shadow-[0_10px_25px_rgba(0,0,0,0.25)] flex flex-col hover:-translate-y-1 transition-transform duration-200">
          <div className="w-full h-[230px] overflow-hidden mb-[1.2rem]">
            <img
              src="./src/assets/card2.jpg"
              alt="Tratamento de Imagem"
              className="w-full h-full object-cover rounded-[35px]"
            />
          </div>
          <div className="pt-2 px-3 pb-4 text-[#0A1123]">
            <h3 className="font-sans text-[1.4rem] font-bold mb-[0.8rem]">
              Tratamento Automático
            </h3>
            <p className="font-sans text-[0.95rem] text-[#333] leading-[1.4]">
              Filtros acadêmicos corrigem o contraste e a nitidez do texto assim que a 
              foto é tirada.
            </p>
          </div>
        </article>

        {/* Card 3 */}
        <article className="flex-[0_0_290px] min-[993px]:flex-[0_0_340px] bg-[#EAE9EE] rounded-[35px] p-[1rem] snap-start shadow-[0_10px_25px_rgba(0,0,0,0.25)] flex flex-col hover:-translate-y-1 transition-transform duration-200">
          <div className="w-full h-[230px] overflow-hidden mb-[1.2rem]">
            <img
              src="./src/assets/card3.png"
              alt="Organização de galeria por IA"
              className="w-full h-full object-cover rounded-[35px]"
            />
          </div>
          <div className="pt-2 px-3 pb-4 text-[#0A1123]">
            <h3 className="font-sans text-[1.4rem] font-bold mb-[0.8rem]">
              Categorização Inteligente
            </h3>
            <p className="font-sans text-[0.95rem] text-[#333] leading-[1.4]">
              O conteúdo da lousa é analisado e a disciplina correspondente é identificada, 
              facilitando a organização da anotação na pasta correta.
            </p>
          </div>
        </article>

        {/* Card 4 */}
        <article className="flex-[0_0_290px] min-[993px]:flex-[0_0_340px] bg-[#EAE9EE] rounded-[35px] p-[1rem] snap-start shadow-[0_10px_25px_rgba(0,0,0,0.25)] flex flex-col hover:-translate-y-1 transition-transform duration-200">
          <div className="w-full h-[230px] overflow-hidden mb-[1.2rem]">
            <img
              src="./src/assets/card4.png"
              alt="Dashboard"
              className="w-full h-full object-cover rounded-[35px]"
            />
          </div>
          <div className="pt-2 px-3 pb-4 text-[#0A1123]">
            <h3 className="font-sans text-[1.4rem] font-bold mb-[0.8rem]">
              Gestão Transparente
            </h3>
            <p className="font-sans text-[0.95rem] text-[#333] leading-[1.4]">
              Um Dashboard Administrativo coleta métricas de uso anonimizadas
              para garantir a evolução contínua da experiência do usuário.
            </p>
          </div>
        </article>
      </div>
    </div>

  </div>
</section>


    </>
  )
}

export default SecaoSolucao
