import React from 'react'

function SecaoEquipe(){
  return (
    <>
      
        <section className="w-full bg-[#EAE9EE] py-[5rem] px-[5%]" id="equipe">
            <div className="max-w-[1200px] mx-auto my-0">
                
                
                <h2 className="font-bebas text-[clamp(3.5rem,6vw,5rem)] text-[#0A1123] text-center sm:text-left mb-[2rem] tracking-[2px]">
                NOSSA EQUIPE
                </h2>

                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-[1.5rem]">
                
                
                <article className="bg-[#0A1123] rounded-[35px] p-6 sm:py-[2rem] sm:px-[1.2rem] flex flex-col items-center text-center text-[#EAE9EE]">
                    <div className="w-[150px] h-[150px] rounded-full overflow-hidden mb-[1.5rem]">
                    <img src="./src/assets/eduarda.jpeg" alt="Eduarda Soares" className="w-full h-full object-cover" />
                    </div>
                    <h3 className="font-mikalea text-[1.5rem] font-normal mb-[1rem] whitespace-nowrap">Eduarda Soares</h3>
                    <p className="font-sans text-[0.9rem] leading-[1.45] opacity-90">
                    Responsável pela lógica da aplicação, desenvolvimento do backend em Python 
                    e pela integração com a camada web.
                    </p>
                </article>

                
                <article className="bg-[#0A1123] rounded-[35px] p-6 sm:py-[2rem] sm:px-[1.2rem] flex flex-col items-center text-center text-[#EAE9EE]">
                    <div className="w-[150px] h-[150px] rounded-full overflow-hidden mb-[1.5rem]">
                    <img src="./src/assets/isabella.jpeg" alt="Isabella Yogui" className="w-full h-full object-cover" />
                    </div>
                    <h3 className="font-mikalea text-[1.5rem] font-normal mb-[1rem] whitespace-nowrap">Isabella Yogui</h3>
                    <p className="font-sans text-[0.9rem] leading-[1.45] opacity-90">
                    Responsável pela criação da identidade visual, layout da interface e pela
                    estruturação do front-end web.
                    </p>
                </article>

                
                <article className="bg-[#0A1123] rounded-[35px] p-6 sm:py-[2rem] sm:px-[1.2rem] flex flex-col items-center text-center text-[#EAE9EE]">
                    <div className="w-[150px] h-[150px] rounded-full overflow-hidden mb-[1.5rem]">
                    <img src="./src/assets/marcella.jpeg" alt="Marcella Pinheiro" className="w-full h-full object-cover" />
                    </div>
                    <h3 className="font-mikalea text-[1.5rem] font-normal mb-[1rem] whitespace-nowrap">Marcella Pinheiro</h3>
                    <p className="font-sans text-[0.9rem] leading-[1.45] opacity-90">
                    Responsável pelo mapeamento das necessidades do projeto, definição do escopo 
                    funcional e apoio na implementação web.
                    </p>
                </article>

                
                <article className="bg-[#0A1123] rounded-[35px] p-6 sm:py-[2rem] sm:px-[1.2rem] flex flex-col items-center text-center text-[#EAE9EE]">
                    <div className="w-[150px] h-[150px] rounded-full overflow-hidden mb-[1.5rem]">
                    <img src="./src/assets/mariana.jpeg" alt="Mariana Malagutti" className="w-full h-full object-cover" />
                    </div>
                    <h3 className="font-mikalea text-[1.5rem] font-normal mb-[1rem] whitespace-nowrap">Mariana Malagutti</h3>
                    <p className="font-sans text-[0.9rem] leading-[1.45] opacity-90">
                    Responsável pela elaboração da narrativa da solução, mapeamento dos fluxos 
                    de uso e produção da documentação textual do projeto.
                    </p>
                </article>

                </div>

            </div>
            </section>


    </>
  )
}

export default SecaoEquipe
