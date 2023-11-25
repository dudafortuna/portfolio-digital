import { useRef } from "react";

function NavBar() {
  const navRef = useRef();

  return (
    <header className="flex items-center justify-between h-20 ml-16 px-10">
      <nav ref={navRef} className="place-content-between">
        <a href="#about" className="font-work-sans mx-8 text-vermelho hover:bg-vermelho hover:text-white hover: p-2 hover:rounded-lg">
          Sobre mim
        </a>
        <a href="#projects" className="font-work-sans mx-8 text-vermelho hover:bg-vermelho hover:text-white hover: p-2 hover:rounded-lg">
          Projetos
        </a>
        <a href="https://www.canva.com/design/DAFfDY79Ezw/qUXFTIuaw9UTAGSViAVZ-g/edit" className="font-work-sans mx-8 text-vermelho hover:bg-vermelho hover:text-white hover: p-2 hover:rounded-lg">
          Cronograma
        </a>
      </nav>
    </header>
  );
}

export default NavBar;
