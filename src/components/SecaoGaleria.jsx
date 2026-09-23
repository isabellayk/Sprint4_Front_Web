import React from 'react'

function SecaoGaleria(){
  return (
    <>
      
        <section className="w-full bg-[0A1123] py-[5rem] px-[5%]" id="galeria">
            <div className="max-w-[1100px] mx-auto my-0">
                
                <h2 className="font-bebas text-[clamp(3rem,5vw,4.5rem)] text-[#EAE9EE] text-right mb-[2rem] tracking-[2px]">GALERIA</h2>

                <div className="grid grid-cols-[1fr_1fr_1.3fr] grid-rows-[280px_240px] gap-[1.2rem]">
                
                <div className="rounded-[20px] overflow-hidden w-full h-full object-cover block col-span-2 row-start-1">
                    <img src="./src/assets/galeria1.png" alt="Modo Estudante desativado e ativado" />
                </div>

                
                <div className="rounded-[20px] overflow-hidden w-full h-full object-cover block col-start-3 row-start-1">
                    <img src="./src/assets/galeria2.png" alt="Foto Galeria 2" />
                </div>

                
                <div className="rounded-[20px] overflow-hidden w-full h-full object-cover block col-start-1 row-start-2">
                    <img src="./src/assets/galeria3.png" alt="Foto Galeria 3" className='rounded-[20px]' />
                </div>

                
                <div className="rounded-[20px] overflow-hidden w-full h-full object-cover block col-start-2 row-start-2">
                    <img src="./src/assets/galeria4.png" alt="Foto Galeria 4" />
                </div>

            
                <div className="rounded-[20px] overflow-hidden w-full h-full object-cover block col-start-3 row-start-2">
                    <img src="./src/assets/card4.png" alt="Foto Dashboard" />
                </div>
                </div>

            </div>
            </section>


    </>
  )
}

export default SecaoGaleria
