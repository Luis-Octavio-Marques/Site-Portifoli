import React from "react";
import ModalMenu from "../components/ModalMenu";
import "./SobreQuery.css"; // Importe o arquivo CSS criado

const cursos = [
  {
    title: "Curso Básico Full-Stack",
    provider: "Hashtag Treinamentos",
    project: "Recriação do site Spotify",
  },
];

const abilityStyle = {
  cursor: "default",
  paddingLeft: "1.75rem", // 7 * 0.25rem
  paddingRight: "1.75rem",
  paddingTop: "0.75rem", // 3 * 0.25rem
  paddingBottom: "0.75rem",
  backgroundColor: "#333",
  borderRadius: "9999px", // rounded-full em Tailwind
  transition: "all 0.3s ease",
};

function Sobre() {
  return (
    <>
      <div
        id="sobre-container"
        className="w-[95vw] h-[95vh] bg-[url('/public/img/background-div.png')] bg-cover bg-center rounded-[20px] relative overflow-hidden px-4 sobre-container"
      >
        <ModalMenu />
        <div className="text-white flex flex-col mt-[7vh] about-container">
          <h1 className="text-4xl font-gantari font-bold about-title">Sobre Mim</h1>
          <div className="w-[15vw] h-[1px] bg-red-500 my-3 red-line-1"></div>
          <p className="font-sans font-extralight w-[45vw] text-[1em] about-text">
            {" "}
            Buscando me tornar um desenvolvedor front-end, com foco em React.js.
            Embora ainda não tenha experiência profissional, dedico-me
            intensamente ao aprendizado autodidata e à prática através de
            projetos pessoais. Minha jornada começou com HTML, CSS e JavaScript,
            mas me apaixonei pelo ecossistema React e suas infinitas
            possibilidades. Estou constantemente aprendendo novas tecnologias e
            aplicando esse conhecimento em projetos práticos para desenvolver
            minhas habilidades.
          </p>
          <div className="w-[25vw] h-[1px] bg-red-500 my-3 red-line-2"></div>
          <div>
            <h3 className="text-4xl font-gantari font-semibold tracking-wider my-4 technical-title">
              {" "}
              Habilidades Técnicas{" "}
            </h3>
            <div>
              <p> Tecnologias e Ferramentas </p>
              <div className="flex gap-7 mt-5 technology-container">
                {/* orange-500, blue-500, yellow-400, white */}
                <p
                  style={abilityStyle}
                  className="border-l-[8px] border-orange-500 shadow-[0_0px_10px_rgba(249,115,22,1)] hover:border-l-[24px] hover:shadow-[0_0px_20px_rgba(234,88,12,1)]"
                >
                  {" "}
                  HTML{" "}
                </p>
                <p
                  style={abilityStyle}
                  className="border-l-[8px] border-blue-600 shadow-[0_0px_10px_rgba(37,99,235,1)] hover:shadow-[0_0px_20px_rgba(37,99,235,1)] hover:border-l-[24px]"
                >
                  {" "}
                  CSS{" "}
                </p>
                <p
                  style={abilityStyle}
                  className="border-l-[8px] border-yellow-400 shadow-[0_0px_10px_rgba(250,204,21,1)] hover:shadow-[0_0px_20px_rgba(250,204,21,1)] hover:border-l-[24px]"
                >
                  {" "}
                  JavaScript{" "}
                </p>
                <p
                  style={abilityStyle}
                  className="border-l-[8px] border-purple-600 shadow-[0_0px_10px_rgba(147,51,234,1)] hover:shadow-[0_0px_20px_rgba(147,51,235,1)] hover:border-l-[24px]"
                >
                  {" "}
                  Vite{" "}
                </p>
                <p
                  style={abilityStyle}
                  className="border-l-[8px] border-white shadow-[0_0px_10px_rgba(250,250,250,1)] hover:shadow-[0_0px_20px_rgba(250,250,250,1)] hover:border-l-[24px]"
                >
                  {" "}
                  Git/GitHub{" "}
                </p>
              </div>
            </div>
            <div>
              <p className="mt-5"> Bibliotecas & Frameworks </p>
              <div className="flex gap-7 mt-5 frameworks-container">
                <p
                  style={abilityStyle}
                  className="border-l-[8px] border-[#68b3c7] shadow-[0_0px_10px_rgba(104,179,199,1)] hover:shadow-[0_0px_20px_rgba(104,179,199,1)] hover:border-l-[24px]"
                >
                  {" "}
                  React.js{" "}
                </p>
                <p
                  style={abilityStyle}
                  className="border-l-[8px] border-[#b4202a] shadow-[0_0px_10px_rgba(180,32,42,1)] hover:shadow-[0_0px_20px_rgba(180,32,52,1)] hover:border-l-[24px]"
                >
                  {" "}
                  React Router{" "}
                </p>
                <p
                  style={abilityStyle}
                  className="border-l-[8px] border-[#84fcd0] shadow-[0_0px_10px_rgba(132,252,208,1)] hover:shadow-[0_0px_20px_rgba(132,252,208,1)] hover:border-l-[24px]"
                >
                  {" "}
                  Styled Components{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-6 top-10 flex flex-col align-middle justify-center text-left course-container">
          <h1 className="text-white text-4xl font-gantari font-semibold tracking-wider">
            {" "}
            Cursos Realizados{" "}
          </h1>
          {cursos.map((curso, index) => (
            <div key={index} className="flex flex-col mt-2">
              <div className="w-[32vw] h-[1px] opacity-50 bg-red-500 mb-3 red-line-3"></div>
              <div className="w-[35vw] flex flex-col bg-transparent backdrop-blur-[5px] border border-white rounded-lg p-4 shadow-md course-card">
                <p className="text-white font-quicksand font-bold text-lg">
                  {curso.title} | {curso.provider}
                </p>
                <p className="text-white font-sans text-lg">
                  Projeto: {curso.project}
                </p>
                <div className="flex flex-wrap gap-5 mt-3 text-white font-oswald">
                  <p className="bg-[#333] px-4 py-2 rounded-lg cursor-default">
                    {" "}
                    HTML{" "}
                  </p>
                  <p className="bg-[#333] px-4 py-2 rounded-lg cursor-default">
                    {" "}
                    CSS{" "}
                  </p>
                  <p className="bg-[#333] px-4 py-2 rounded-lg cursor-default">
                    {" "}
                    React{" "}
                  </p>
                  <p className="bg-[#333] px-4 py-2 rounded-lg cursor-default">
                    {" "}
                    Express{" "}
                  </p>
                  <p className="bg-[#333] px-4 py-2 rounded-lg cursor-default">
                    {" "}
                    Node{" "}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Sobre;
