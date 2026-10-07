import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
      <Router>
        <div className='bg-[#0A1123] min-h-screen flex flex-col justify-between'>
          <Header />

          <Routes>
              <Route path="/" element={<Hero />} />

              <Route path="/SecaoProblema" element={<SecaoProblema />} />

              <Route path="/SecaoSolucao" element={<SecaoSolucao />} />

              <Route path="/SecaoPub" element={<SecaoPub />}/>

              <Route path="/SecaoGaleria" element={<SecaoGaleria />}/>

              <Route path="/SecaoEquipe" element={<SecaoEquipe />}/>
          </Routes>
          <Footer />

        </div>
        
        </Router>
    </>
  )
}

export default App
