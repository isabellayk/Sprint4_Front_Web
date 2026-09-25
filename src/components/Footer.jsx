import { useState } from 'react';

function Footer() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: '',
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    setFormData({ nome: '', email: '', mensagem: '' });

    setTimeout(() => {
      setEnviado(false);
    }, 5000);
  };

  return (
    <footer className="w-full bg-[#0A1123] text-[#EAE9EE] pt-20 pb-8 px-6 border-t border-white/10" id="contato">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between gap-12 mb-16">

        {/* Formulário */}
        <div className="flex-1 max-w-full md:max-w-[550px]">
          <h2 className="text-4xl md:text-6xl font-bold tracking-widest mb-2 text-[#EAE9EE]">
            FALE CONOSCO
          </h2>
          <p className="text-base opacity-85 mb-8">
            Tem dúvidas ou quer saber mais sobre o UltraFrame? Envie uma mensagem!
          </p>

          {enviado && (
            <div className="mb-6 p-4 bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 rounded-xl text-sm">
              ✓ Obrigado pelo contato! Sua mensagem foi enviada com sucesso.
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
                className="w-full bg-white/10 border border-white/20 rounded-xl py-4 px-5 text-base text-[#EAE9EE] outline-none"
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
                className="w-full bg-white/10 border border-white/20 rounded-xl py-4 px-5 text-base text-[#EAE9EE] outline-none"
              />
            </div>

            <div>
              <textarea
                id="mensagem"
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                rows={4}
                placeholder="Sua Mensagem"
                required
                className="w-full bg-white/10 border border-white/20 rounded-xl py-4 px-5 text-base text-[#EAE9EE] outline-none resize-y"
              ></textarea>
            </div>

            <button
              type="submit"
              className="font-bold text-lg bg-[#EAE9EE] text-[#0A1123] rounded-xl p-4 cursor-pointer"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>

        {/* Informações da Marca */}
        <div className="flex-none md:w-[380px] flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <div className="mb-5">
            <img src="./src/assets/Logo.png" alt="Logo UltraFrame" className="max-w-[220px] h-auto" />
          </div>
          <p className="text-sm leading-relaxed opacity-80 mb-8">
            O registro acadêmico sem ruídos, borrões ou desorganização. 
            Transformando a câmera do seu celular em uma assistente de estudos.
          </p>

          <div className="flex flex-wrap gap-5 justify-center md:justify-start">
            <a href="#solucao" className="text-sm opacity-80 hover:opacity-100">A Solução</a>
            <a href="#publico-alvo" className="text-sm opacity-80 hover:opacity-100">Público-Alvo</a>
            <a href="#galeria" className="text-sm opacity-80 hover:opacity-100">Galeria</a>
            <a href="#equipe" className="text-sm opacity-80 hover:opacity-100">Equipe</a>
          </div>
        </div>

      </div>

      <div className="max-w-[1200px] mx-auto pt-8 border-t border-white/5 text-center text-xs opacity-60">
        <p>&copy; 2026 UltraFrame. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;