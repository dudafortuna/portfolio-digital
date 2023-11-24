function Projects() {
  return (
    <div className="w-full h-[646px] mt-36" id="projects">
      <h3 className="font-righteous text-vermelho text-2x1 text-center">
        Projetos
      </h3>
      <div className="flex flex-row place-content-between mt-32 mb-20">
        <a href="https://www.canva.com/design/DAFx2vNegU4/iy5c5XcayiQ2TIHCTAcATQ/edit?utm_content=DAFx2vNegU4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
          <img
            className="h-[200px] w-[300px] rounded-md"
            alt="Ciencias Humanas"
            src="humanas.svg"
            id="modal"
          />
        </a>
        <a href="https://www.canva.com/design/DAFx2vz1HZw/wMHuSuGkhIsxbH0TA9NO0Q/edit?utm_content=DAFx2vz1HZw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
          <img
            className="h-[200px] w-[300px] rounded-md"
            alt="Ciencias da Natureza"
            src="natureza.svg"
            id="modal"
          />
        </a>
        <a href="https://www.canva.com/design/DAFxz4wHPxM/LR-5Qf5b_cjDxBLDGUjMpw/edit?utm_content=DAFxz4wHPxM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
          <img className="h-[200px] w-[300px] rounded-md" 
          alt="Técnico" 
          src="tecnico.svg" 
          id="modal" />
        </a>
        <a href="/https://www.canva.com/design/DAFx2YnLqSU/R12wKaHmAU3tTFtZud20vg/edit?utm_content=DAFx2YnLqSU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
          <img className="h-[200px] w-[300px] rounded-md" 
          alt="Matemática"
           src="matematica.svg" 
           id="modal" />
        </a>
        <a href="https://www.canva.com/design/DAFx2mHbxBI/CjvTPTx6Vq2mbUA9drc8NA/edit?utm_content=DAFx2mHbxBI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
          <img className="h-[200px] w-[300px] rounded-md" 
          alt="Linguagens" 
          src="linguagens.svg" 
          id="modal" />
        </a>
      </div>
    </div>
  );
}

export default Projects;
