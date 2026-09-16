import { useState } from 'react';

function Header() {
const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
       <header className="absolute top-0 left-0 w-full z-[1000] flex justify-between items-center px-[5%] py-6 box-border">
      
      <a href="./index.html" className="block">
        <img
          src="./src/assets/Logo.png"
          alt="Logo UltraFrame"
          className="w-full max-w-[180px] md:max-w-[280px] h-auto block"
        />
      </a>

      
      <button
        onClick={toggleMenu}
        className="md:hidden bg-transparent border-none text-3xl text-[#EAE9EE] cursor-pointer focus:outline-none"
        aria-label={isMenuOpen ? "Fechar Menu" : "Abrir Menu"}
      >
        {isMenuOpen ? '✕' : '☰'}
      </button>

      
      <nav
        className={`
          ${isMenuOpen ? 'flex' : 'hidden'} 
          md:flex 
          absolute md:static 
          top-full left-0 
          w-full md:w-auto 
          flex-col md:flex-row 
          items-center 
          bg-[#000] md:bg-transparent 
          rounded-[20px] md:rounded-none 
          py-6 md:py-0 
          gap-6 md:gap-8 
          transition-all duration-200
        `}
      >
        <a
          href="#secao-solucao"
          className="text-[#EAE9EE] text-lg no-underline whitespace-nowrap opacity-100 hover:opacity-80 transition-opacity duration-200 font-sans"
        >
          A Solução
        </a>
        <a
          href="#publico-alvo"
          className="text-[#EAE9EE] text-lg no-underline whitespace-nowrap opacity-100 hover:opacity-80 transition-opacity duration-200 font-sans"
        >
          Público-Alvo
        </a>
        <a
          href="#galeria"
          className="text-[#EAE9EE] text-lg no-underline whitespace-nowrap opacity-100 hover:opacity-80 transition-opacity duration-200 font-sans"
        >
          Galeria
        </a>
        <a
          href="#equipe"
          className="text-[#EAE9EE] text-lg no-underline whitespace-nowrap opacity-100 hover:opacity-80 transition-opacity duration-200 font-sans"
        >
          Equipe
        </a>
        <a
          href="#contato"
          className="text-[#EAE9EE] text-lg no-underline whitespace-nowrap opacity-100 hover:opacity-80 transition-opacity duration-200 font-sans"
        >
          Contato
        </a>
      </nav>
    </header>
    
    </>
  )
}

export default Header
