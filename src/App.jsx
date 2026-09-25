import Header from './components/Header';
import Hero from './components/Hero';
import SecaoProblema from './components/SecaoProblema';
import SecaoSolucao from './components/SecaoSolucao';
import SecaoPub from './components/SecaoPub'
import SecaoGaleria from './components/SecaoGaleria';
import SecaoEquipe from './components/SecaoEquipe';
import Footer from './components/Footer'
import '../src/index.css';

function App()  {
  return (
    <>
      <div className='bg-[#0A1123] min-h-screen'>
        <Header />

        <Hero />
        
        <SecaoProblema />

        <SecaoSolucao />

        <SecaoPub />

        <SecaoGaleria />

        <SecaoEquipe />

        <Footer />

      </div>
    </>
  )
}

export default App
