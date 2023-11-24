function About() {
  return (
    <div className="flex justify-center mt-40" id="about">
      <h2 className="font-righteous text-vermelho text-2x1 mt-10 absolute">
        Carta de Apresentação
      </h2>
      <div className="flex">
      <div className="flex flex-col lg:flex-row justify-center items-center w-[1200px] h-[520px] bg-gray-200 bg-opacity-60 rounded-lg mt-52">
        <p className="font-work-sans ml-10 mt-10 mr-10 text-vermelho font-inter font-normal text-base">
          Eu nasci em Florianópolis, tenho 18 anos e sou estudante do Senai!
          <br />
          Atualmente estou no 3º ano do ensino médio, cursando também o curso{" "}
          <br />
          técnico integrado em análise e desenvolvimento de sistemas.
        </p>
        <img className="" alt="nós" src="../dudsemariah.jpg" />
      </div>
      </div>
    </div>
  );
}

export default About;
