import { LiaGithub, LiaInstagram, LiaLinkedin } from "react-icons/lia";

function Home() {
  return (
    <div className="flex place-content-between" id="home">
      <div className="flex flex-col ml-36 mt-44">
        <h1 className="font-righteous text-vermelho text-2x1">Oiê</h1>
        <p className="font-work-sans text-vermelho text-1x1">Meu nome é Maria Eduarda</p>
        <p className="font-work-sans text-vermelho text-lg">Desenvolvedora Front-End</p>
      </div>
      <div>
        <img
          className="ml-80 mt-20"
          alt="dudinha"
          type="image/svg"
          src="/dudinha.svg"
        />
      </div>
      <div className="mr-32 mt-44 mb-36 bg-vermelho rounded-lg pb-0">
        <a href="https://www.linkedin.com/in/mariaeduardasilvafortuna/">
          <LiaLinkedin
            className="linkedinIcon"
            size={40}
            color="white"
          ></LiaLinkedin>
        </a>
        <a href="https://github.com/dudafortuna">
          <LiaGithub className="githubIcon" size={40} color="white"></LiaGithub>
        </a>
        <a href="https://www.instagram.com/dudinhaasf/">
          <LiaInstagram
            className="instagramIcon"
            size={40}
            color="white"
          ></LiaInstagram>
        </a>
      </div>
    </div>
  );
}

export default Home;
