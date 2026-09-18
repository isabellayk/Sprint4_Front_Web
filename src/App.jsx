import Header from './components/Header';
import Hero from './components/Hero';
import SecaoProblema from './components/SecaoProblema';
import SecaoSolucao from './components/SecaoSolucao';
import '../src/index.css';

function App()  {
  return (
    <>
      <body className='bg-[#0A1123]'>
        <Header />

        <Hero />
        
        <SecaoProblema />

        <SecaoSolucao />
      </body>
    </>
  )
}

export default App
