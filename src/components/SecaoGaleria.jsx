import React from 'react'

function SecaoGaleria(){
  return (
    <>
      
     <section className="w-full bg-[#0A1123] py-[5rem] px-[5%]" id="galeria">
  <div className="max-w-[1100px] mx-auto my-0">
    
   
    <h2 className="font-bebas text-[clamp(3rem,5vw,4.5rem)] text-[#EAE9EE] text-center md:text-right mb-[2rem] tracking-[2px]">
      GALERIA
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1.3fr] grid-rows-none md:grid-rows-[280px_240px] gap-[1.2rem]">
    

      <div className="rounded-[20px] overflow-hidden w-full h-[220px] md:h-full col-span-1 md:col-span-2 md:row-start-1">
        <img src="./src/assets/galeria1.png" alt="Modo Estudante desativado e ativado" className="w-full h-full object-cover" />
      </div>

      <div className="rounded-[20px] overflow-hidden w-full h-[220px] md:h-full col-span-1 md:col-start-3 md:row-start-1">
        <img src="./src/assets/galeria2.png" alt="Foto Galeria 2" className="w-full h-full object-cover" />
      </div>

     
      <div className="rounded-[20px] overflow-hidden w-full h-[220px] md:h-full col-span-1 md:col-start-1 md:row-start-2">
        <img src="./src/assets/galeria3.png" alt="Foto Galeria 3" className="w-full h-full object-cover" />
      </div>

   
      <div className="rounded-[20px] overflow-hidden w-full h-[220px] md:h-full col-span-1 md:col-start-2 md:row-start-2">
        <img src="./src/assets/galeria4.png" alt="Foto Galeria 4" className="w-full h-full object-cover" />
      </div>


      <div className="rounded-[20px] overflow-hidden w-full h-[220px] md:h-full col-span-1 md:col-start-3 md:row-start-2">
        <img src="./src/assets/card4.png" alt="Foto Dashboard" className="w-full h-full object-cover" />
      </div>

    </div>

  </div>
</section>


    </>
  )
}

export default SecaoGaleria
