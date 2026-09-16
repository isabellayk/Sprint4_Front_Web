import Header from './components/Header';
import Hero from './components/Hero';
import SecaoProblema from './components/SecaoProblema';
import '../src/index.css';

function App()  {
  return (
    <>
      <body className='bg-[#0A1123]'>
        <Header />

        <Hero />
        
        <SecaoProblema />
      </body>
    </>
  )
}

export default App
