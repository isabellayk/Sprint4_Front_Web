import { useRef } from 'react';
import card1 from '../assets/card1.png'
import card2 from '../assets/card2.png'
import card3 from '../assets/card3.png'
import card4 from '../assets/card4.png'
const cardsData = [
  {
    id: 1,
    imagem: {card1},
    alt: 'Guiamento em Tempo Real',
    titulo: 'Guiamento em Tempo Real',
    descricao:
      'Balões informativos não intrusivos analisam o ambiente através dos sensores do aparelho e orientam o aluno a ajustar foco, iluminação e modo de captura antes do clique.',
  },
  {
    id: 2,
    imagem: {card2},
    alt: 'Tratamento de Imagem',
    titulo: 'Tratamento Automático',
    descricao:
      'Filtros acadêmicos corrigem o contraste e a nitidez do texto assim que a foto é tirada.',
  },
  {
    id: 3,
    imagem: {card3},
    alt: 'Organização de galeria por IA',
    titulo: 'Categorização Inteligente',
    descricao:
      'O conteúdo da lousa é analisado e a disciplina correspondente é identificada, facilitando a organização da anotação na pasta correta.',
  },
  {
    id: 4,
    imagem: {card4},
    alt: 'Dashboard',
    titulo: 'Gestão Transparente',
    descricao:
      'Um Dashboard Administrativo coleta métricas de uso anonimizadas para garantir a evolução contínua da experiência do usuário.',
  },
];


function CardSolucao({ imagem, alt, titulo, descricao }) {
  return (
    <article className="flex-[0_0_290px] min-[993px]:flex-[0_0_340px] bg-[#EAE9EE] rounded-[35px] p-[1rem] snap-start shadow-[0_10px_25px_rgba(0,0,0,0.25)] flex flex-col hover:-translate-y-1 transition-transform duration-200">
      <div className="w-full h-[230px] overflow-hidden mb-[1.2rem]">
        <img
          src={imagem}
          alt={alt || titulo}
          className="w-full h-full object-cover rounded-[35px]"
        />
      </div>
      <div className="pt-2 px-3 pb-4 text-[#0A1123]">
        <h3 className="font-sans text-[1.4rem] font-bold mb-[0.8rem]">
          {titulo}
        </h3>
        <p className="font-sans text-[0.95rem] text-[#333] leading-[1.4]">
          {descricao}
        </p>
      </div>
    </article>
  );
}


function SecaoSolucao() {
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
    <section className="py-[10rem] px-6 md:px-16 text-[#EAE9EE]" id="secao-solucao">
      <div className="max-w-7xl mx-auto flex flex-col min-[993px]:flex-row gap-12 items-start justify-between">
        <div className="w-full min-[993px]:w-1/3 flex flex-col gap-6 flex-none">
          <h2 className="font-bebas text-5xl md:text-6xl leading-none">
            A NOSSA
            <br />
            SOLUÇÃO
          </h2>
          <p className="font-sans text-base md:text-lg leading-relaxed text-[#EAE9EE]/90">
            O UltraFrame é uma solução inteligente integrada ao ecossistema dos
            smartphones Jovi. O sistema une hardware, Visão Computacional e
            Inteligência Artificial para transformar a câmera do celular em uma
            assistente de estudos.
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
          
            {cardsData.map((card) => (
              <CardSolucao
                key={card.id}
                imagem={card.imagem}
                alt={card.alt}
                titulo={card.titulo}
                descricao={card.descricao}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecaoSolucao;