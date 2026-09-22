import Header from './components/Header';
import Hero from './components/Hero';
import SecaoProblema from './components/SecaoProblema';
import SecaoSolucao from './components/SecaoSolucao';
import SecaoPub from './components/SecaoPub'
import '../src/index.css';

function App()  {
  return (
    <>
      <body className='bg-[#0A1123]'>
        <Header />

        <Hero />
        
        <SecaoProblema />

        <SecaoSolucao />

        <SecaoPub />
      </body>
    </>
  )
}

export default App
