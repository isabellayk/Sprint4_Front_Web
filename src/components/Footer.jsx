import { useState } from 'react';
import emailjs from '@emailjs/browser';


const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function Footer() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: '',
  });

  const [enviado, setEnviado] = useState(false);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCarregando(true);
    setErro('');

    
    const templateParams = {
      nome: formData.nome,
      email: formData.email,
      mensagem: formData.mensagem,
    };


    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(
        (response) => {
          console.log('E-mail enviado com sucesso!', response.status, response.text);
          setEnviado(true);
          setFormData({ nome: '', email: '', mensagem: '' });
          setCarregando(false);

        
          setTimeout(() => setEnviado(false), 5000);
        },
        (err) => {
          console.error('Erro ao enviar e-mail:', err);
          setErro('Ocorreu um erro ao enviar. Tente novamente mais tarde.');
          setCarregando(false);
        }
      );
  };

  return (
    <footer className="w-full bg-[#0A1123] text-[#EAE9EE] pt-[5rem] pb-[2rem] px-[5%] border-t border-white/10" id="contato">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between gap-12 md:gap-16 mb-16">

    
        <div className="flex-1 max-w-full md:max-w-[550px]">
          <h2 className="font-bebas text-[clamp(3rem,5vw,4rem)] tracking-[2px] mb-2 text-[#EAE9EE]">
            FALE CONOSCO
          </h2>
          <p className="font-sans text-base opacity-85 mb-8">
            Tem dúvidas ou quer saber mais sobre o UltraFrame? Envie uma mensagem!
          </p>

          
          {enviado && (
            <div className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 rounded-xl font-sans text-sm">
              ✓ Mensagem enviada com sucesso! Em breve entraremos em contato.
            </div>
          )}

       
          {erro && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 text-red-300 rounded-xl font-sans text-sm">
              ✕ {erro}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-5" id="contactForm">
            <div>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                placeholder="Seu Nome"
                required
                className="w-full bg-[#EAE9EE]/[0.07] border-[1.5px] border-white/20 rounded-xl py-4 px-[1.2rem] font-sans text-base text-[#EAE9EE] placeholder:text-white/40 outline-none transition-colors duration-300 focus:border-white focus:bg-[#EAE9EE]/[0.12]"
              />
            </div>

            <div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Seu E-mail"
                required
                className="w-full bg-[#EAE9EE]/[0.07] border-[1.5px] border-white/20 rounded-xl py-4 px-[1.2rem] font-sans text-base text-[#EAE9EE] placeholder:text-white/40 outline-none transition-colors duration-300 focus:border-white focus:bg-[#EAE9EE]/[0.12]"
              />
            </div>

            <div>
              <textarea
                id="mensagem"
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                rows="4"
                placeholder="Sua Mensagem"
                required
                className="w-full bg-[#EAE9EE]/[0.07] border-[1.5px] border-white/20 rounded-xl py-4 px-[1.2rem] font-sans text-base text-[#EAE9EE] placeholder:text-white/40 outline-none transition-colors duration-300 focus:border-white focus:bg-[#EAE9EE]/[0.12] resize-y"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={carregando}
              className="font-sans font-bold text-[1.05rem] bg-[#EAE9EE] text-[#0A1123] border-none rounded-xl p-4 cursor-pointer transition-transform duration-200 hover:-translate-y-[2px] active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {carregando ? 'Enviando...' : 'Enviar Mensagem'}
            </button>
          </form>
        </div>

      
        <div className="flex-none md:w-[380px] flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <div className="mb-5">
            <img src="./src/assets/Logo.png" alt="Logo UltraFrame" className="max-w-[220px] h-auto" />
          </div>
          <p className="font-sans text-[0.95rem] leading-relaxed opacity-80 mb-8">
            O registro acadêmico sem ruídos, borrões ou desorganização. 
            Transformando a câmera do seu celular em uma assistente de estudos.
          </p>

          <div className="flex flex-wrap gap-5 justify-center md:justify-start">
            <a href="#solucao" className="font-sans text-[0.95rem] opacity-80 hover:opacity-100 transition-opacity duration-200">A Solução</a>
            <a href="#publico-alvo" className="font-sans text-[0.95rem] opacity-80 hover:opacity-100 transition-opacity duration-200">Público-Alvo</a>
            <a href="#galeria" className="font-sans text-[0.95rem] opacity-80 hover:opacity-100 transition-opacity duration-200">Galeria</a>
            <a href="#equipe" className="font-sans text-[0.95rem] opacity-80 hover:opacity-100 transition-opacity duration-200">Equipe</a>
          </div>
        </div>

      </div>

      <div className="max-w-[1200px] mx-auto pt-8 border-t border-white/5 text-center font-sans text-[0.85rem] opacity-60">
        <p>&copy; 2026 UltraFrame. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;